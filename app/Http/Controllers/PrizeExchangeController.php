<?php

namespace App\Http\Controllers;

use App\Models\prize_exchange;
use App\Http\Requests\Storeprize_exchangeRequest;
use App\Http\Requests\Updateprize_exchangeRequest;

class PrizeExchangeController extends Controller
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
     * @param  \App\Http\Requests\Storeprize_exchangeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storeprize_exchangeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\prize_exchange  $prize_exchange
     * @return \Illuminate\Http\Response
     */
    public function show(prize_exchange $prize_exchange)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\prize_exchange  $prize_exchange
     * @return \Illuminate\Http\Response
     */
    public function edit(prize_exchange $prize_exchange)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updateprize_exchangeRequest  $request
     * @param  \App\Models\prize_exchange  $prize_exchange
     * @return \Illuminate\Http\Response
     */
    public function update(Updateprize_exchangeRequest $request, prize_exchange $prize_exchange)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\prize_exchange  $prize_exchange
     * @return \Illuminate\Http\Response
     */
    public function destroy(prize_exchange $prize_exchange)
    {
        //
    }
}
