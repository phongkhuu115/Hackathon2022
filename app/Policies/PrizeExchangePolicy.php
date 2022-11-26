<?php

namespace App\Policies;

use App\Models\User;
use App\Models\prize_exchange;
use Illuminate\Auth\Access\HandlesAuthorization;

class PrizeExchangePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\prize_exchange  $prizeExchange
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, prize_exchange $prizeExchange)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\prize_exchange  $prizeExchange
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, prize_exchange $prizeExchange)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\prize_exchange  $prizeExchange
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, prize_exchange $prizeExchange)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\prize_exchange  $prizeExchange
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, prize_exchange $prizeExchange)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\prize_exchange  $prizeExchange
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, prize_exchange $prizeExchange)
    {
        //
    }
}
