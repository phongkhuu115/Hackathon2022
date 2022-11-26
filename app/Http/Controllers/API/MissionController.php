<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\mission;
use App\Models\mission_of_user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MissionController extends Controller
{
    public function getSpecifyMission(Request $request)
    {
        $mission = mission::where('id', $request->id)->get();
        return response()->json([
            'mission' => $mission,
        ], 200);
    }
    // get5RandomMission except challenge
    public function get5RandomMission(Request $request)
    {
        $mission = mission::where('mission_type', '!=', 'challenge')->inRandomOrder()->limit(5)->get();
        return response()->json([
            'mission' => $mission,
        ], 200);
    }


    public function getAllMission(Request $request)
    {
        $mission = mission::all();
        return response()->json([
            'mission' => $mission,
        ], 200);
    }

    public function get5LatestOnProgress(Request $request)
    {
        // get token from request
        $token = $request->bearerToken();
        // hash token
        $token = hash('sha256', $token);
        // get userID from personal_access_tokens table
        $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
        // get 5 latest mission on progress join with mission table get only mission fields
        $mission = mission_of_user::where('user_id', $userID)->where('status', 'Ongoing')->join('mission', 'mission.id', '=', 'mission_of_user.mission_id')->select('mission.*')->orderBy('mission_of_user.created_at', 'desc')->limit(5)->get();
        return response()->json([
            'mission' => $mission,
        ], 200);
    }

    public function getAllOnProgress(Request $request)
    {
        $mission = mission_of_user::where('status', 'Ongoing')->get();
        return response()->json([
            'mission' => $mission,
        ], 200);
    }

    // acceptMission
    public function acceptMission(Request $request)
    {
        // get token from request
        $token = $request->bearerToken();
        // hash token
        $token = hash('sha256', $token);
        // get userID from personal_access_tokens table
        $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;

        // get missionID from request
        $missionID = $request->id;

        // get mission of user from mission_of_user table
        $missionOfUser = mission_of_user::where('user_id', $userID)->where('mission_id', $missionID)->first();
        // check if mission of user is null
        if ($missionOfUser == null) {
            // create new mission of user
            $missionOfUser = new mission_of_user();
            $missionOfUser->user_id = $userID;
            $missionOfUser->mission_id = $missionID;
            $missionOfUser->status = 'Ongoing';
            $missionOfUser->created_at = date('Y-m-d H:i:s');
            $missionOfUser->expire = date('Y-m-d H:i:s');
            $missionOfUser->save();
        } else {
            return response()->json([
                'message' => 'Mission already accepted',
            ], 200);
        }
        return response()->json([
            'message' => 'Mission accepted successfully',
        ], 200);
    }
}
