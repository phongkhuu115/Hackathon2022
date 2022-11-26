<?php

namespace App\Http\Controllers;

use App\Models\mission_of_user;
use App\Http\Requests\Storemission_of_userRequest;
use App\Http\Requests\Updatemission_of_userRequest;

class MissionOfUserController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Storemission_of_userRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storemission_of_userRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\mission_of_user  $mission_of_user
     * @return \Illuminate\Http\Response
     */
    public function show(mission_of_user $mission_of_user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\mission_of_user  $mission_of_user
     * @return \Illuminate\Http\Response
     */
    public function edit(mission_of_user $mission_of_user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updatemission_of_userRequest  $request
     * @param  \App\Models\mission_of_user  $mission_of_user
     * @return \Illuminate\Http\Response
     */
    public function update(Updatemission_of_userRequest $request, mission_of_user $mission_of_user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\mission_of_user  $mission_of_user
     * @return \Illuminate\Http\Response
     */
    public function destroy(mission_of_user $mission_of_user)
    {
        //
    }
}
