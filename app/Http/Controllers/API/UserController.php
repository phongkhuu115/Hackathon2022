<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mockery\Generator\Method;
use PhpParser\Builder\Method as BuilderMethod;

use function PHPSTORM_META\map;

class UserController extends Controller
{
    // 30day
    const timeout = 60 * 60 * 24 * 30;
    // const timeout = 60;
    public function isvalidRequest(Request $request)
    {
        if ($request->all() == null) {
            return false;
        } else {
            return true;
        }
    }

    // update expire time of token
    public function updateExpireTimeOfToken(Request $request)
    {
        try {
            $token = $request->bearerToken();
            $token = hash('sha256', $token);
            // update expire time
            DB::table('personal_access_tokens')->where('token', $token)->update(['expires_at' => now()->addMinute(self::timeout)]);
        } catch (\Throwable $th) {
        }
    }

    // check expired token
    public function isExpiredToken(Request $request)
    {
        $token = $request->bearerToken();
        $token = hash('sha256', $token);
        $token = DB::table('personal_access_tokens')->where('token', $token)->first();
        // if expired time is less than current time revoke token
        if ($token->expires_at < now()) {
            $token->delete();
            return true;
        } else {
            return false;
        }
    }

    public function isAdmin(Request $request)
    {
        if ($request->user()->userRoleID == 1) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($this->isAdmin($request)) {
            $user = User::all();
            return response()->json($user);
        } else {
            return response()->json([
                'message' => 'You have no permission'
            ], 401);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if ($this->isAdmin($request)) {
            // validate
            $isValid = $request->validate([
                'username' => 'required|string|min:3',
                'password' => 'required|min:4|confirmed',
            ]);
            if ($isValid) {
                $user = new User;
                $user->userName = $request->username;
                $user->password =  bcrypt($request->password);
                $isSuccess = $user->save();
                return response()->json([
                    'user created' => $user,
                    'status' => $isSuccess ?  'success' : 'fail'
                ], 200);
            }
        } else {
            return response()->json([
                'status' => 'fail',
                'message' => 'You have no permission'
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function getbyid(Request $request)
    {
        if ($this->isAdmin($request)) {
            $user = User::find($request->userID);
            return response()->json([
                'user found' => $user,
                'status' => $user != null ?  'success' : 'fail, please check userID'
            ], 200);
        } else {
            return response()->json([
                'message' => 'You have no permission'
            ], 401);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        try {
            // get token from request
            $token = $request->bearerToken();
            // hash token
            $token = hash('sha256', $token);
            // get userID from personal_access_tokens table
            $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
            // check userID and hash token is exist in personal access token table
            $updateData = [];
            foreach ($request->all() as $key => $value) {
                if ($key == 'id' || $key == 'full_name' || $key == 'username' || $key == 'mobile' || $key == 'email' || $key == 'birth') {
                    if ($value != null) {
                        $updateData[$key] = $value;
                    }
                }
            }
            return response()->json([
                'status' => User::where('id', $userID)->update($updateData) ? 'success' : 'info not changed',
                'data' => $updateData
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'request' => $request->all(),
                'message' => $th->getMessage()
            ], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        // valid request
        if ($this->isvalidRequest($request)) {
            // check admin
            if ($this->isAdmin($request)) {
                $user = User::where('username', $request->username);
                if ($user == null || $user->count() == 0) {
                    return response()->json([
                        'message' => 'User not found'
                    ], 404);
                } else {
                    return response()->json([
                        'user deleted' => $user->get(),
                        'status' => $user->delete() ?  'success' : 'fail'
                    ], 200);
                }
            } else {
                return response()->json([
                    'message' => 'You have no permission'
                ], 401);
            }
        }
    }


    // get my profile
    public function getProfile(Request $request)
    {
        try {
            // get token from request
            $token = $request->bearerToken();
            // hash token
            $token = hash('sha256', $token);
            // get userID from personal_access_tokens table
            $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
            // check userID and hash token is exist in personal access token table
            $isMySelf = DB::table('personal_access_tokens')->where('tokenable_id', $userID)->where('token', $token)->count() > 0;

            if ($isMySelf && !$this->isExpiredToken($request)) {
                $user = User::find($userID);
                $returnUser = $user;
                // [
                //     'full_name' => $user->full_name,
                //     'avatar' => $user->avatar,
                //     'score' => $user->score,
                // ];
                // get mission of user
                // $InProgressMissions = DB::table('mission_of_user')->join('mission', 'mission_of_user.mission_id', '=', 'mission.id')->where('user_id', $userID)->get();

                // $returnInProgressMissions = $InProgressMissions->map(function ($mission) {
                //     return [
                //         'id' => $mission->id,
                //         'name' => $mission->mission_name,
                //         'description' => $mission->mission_description,
                //         'score' => $mission->score_mission,
                //         'status' => $mission->status,
                //         'created_at' => $mission->created_at,
                //         'expired_at' => $mission->expire,
                //     ];
                // });

                // $missionGeneral = DB::table('mission')->get();
                // $returnMissionGeneral = $missionGeneral->map(function ($mission) {
                //     return [
                //         'id' => $mission->id,
                //         'name' => $mission->mission_name,
                //         'description' => $mission->mission_description,
                //         'score' => $mission->score_mission,
                //     ];
                // });

                $this->updateExpireTimeOfToken($request);
                return response()->json(
                    [
                        'profile' => $returnUser,
                        // 'missions_general' => $returnMissionGeneral,
                        // 'missions' => $returnInProgressMissions,
                        'message' => 'success'
                    ],
                    200
                );
            } else {
                return response()->json([
                    'message' => 'You Are Not Your Self, Who Are You?, What are you going to do :)?'
                ], 401);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 401);
        }
    }
}
