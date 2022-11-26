<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\MissionController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route Public API
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/checkToken', [AuthController::class, 'checkToken']);
// Route User
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/getNewfeed', [PostController::class, 'getNewfeed']);
    Route::get('/getProfile', [UserController::class, 'getProfile']);
    Route::post('/postComment', [PostController::class, 'postComment']);
    Route::post('/getSpecifyMission', [MissionController::class, 'getSpecifyMission']);


});
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
