<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\prize;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mockery\Generator\Method;
use PhpParser\Builder\Method as BuilderMethod;

class PrizeController extends Controller
{
    public function getPrize(Request $request)
    {
        //limit 4
        $prize = prize::all()->take(4);
        return response()->json($prize);
    }
}
