<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\mission;
use App\Models\mission_of_user;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\mission  $mission
     * @return \Illuminate\Http\Response
     */
    public function show(mission $mission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\mission  $mission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, mission $mission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\mission  $mission
     * @return \Illuminate\Http\Response
     */
    public function destroy(mission $mission)
    {
        //
    }
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
        $mission = mission_of_user::where('status', 'Ongoing')->orderBy('id', 'desc')->limit(5)->get();
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
}
