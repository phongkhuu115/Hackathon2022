<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\mission;
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
            'mission'=>$mission,
        ],200);
    }
}
