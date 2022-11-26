<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Prize;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mockery\Generator\Method;
use PhpParser\Builder\Method as BuilderMethod;
use App\Models\prize_exchange;

class PrizeController extends Controller
{
    public function getPrize(Request $request)
    {
        //limit 4
        $prize = prize::all()->take(4);
        return response()->json(['prize' => $prize], 200);
    }
    // purchasePrize
    public function purchasePrize(Request $request)
    {
        // get token from request
        $token = $request->bearerToken();
        // hash token
        $token = hash('sha256', $token);
        // get userID from personal_access_tokens table
        $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
        // get prize from prize table
        $prize = Prize::find($request->id);
        // get user from user table
        $user = DB::table('user')->where('id', $userID)->first();
        // check prize quantity
        if ($prize->prize_quantity > 0) {
            // check user point
            if ($user->score >= $prize->prize_score) {
                // update prize quantity
                $prize->prize_quantity = $prize->prize_quantity - 1;
                // update user point
                DB::table('user')->where('id', $userID)->update(['score' => $user->score - $prize->prize_score]);
                // insert prize history
                prize_exchange::create([
                    'prize_id' => $prize->id,
                    'user_id' => $userID,
                    'create_at' => date('Y-m-d H:i:s'),
                    'update_at' => date('Y-m-d H:i:s'),

                ]);
                return response()->json(['message' => 'Purchase prize success'], 200);
            } else {
                return response()->json([
                    'message' => 'Not enough point',
                    'user_score' => $user->score
                ], 200);
            }
        } else {
            return response()->json(['message' => 'Prize is out of stock'], 200);
        }
        return response()->json(['prize' => $prize], 200);
    }
}
