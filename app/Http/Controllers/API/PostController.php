<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
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
     * @param  \App\Models\post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(post $post)
    {
        //
    }
    public function getNewfeed(Request $request)
    {
        // get all post
        $posts = post::all();
        $returnPosts = $posts->map(function ($post) {
            return [
                'post_id' => $post->id,
                'post_caption' => $post->caption,
                'post_image' => $post->image_url,
                'post_created_at' => $post->create_at,
                'post_updated_at' => $post->update_at,
                'post_of_user' => $post->user_id,
                'like' => $post->like,
                'share' => $post->share,
                'comment' => DB::table('comment')->where('post_id', $post->id)->get(),
            ];
        });

        return response()->json([
            'returnPost' => $returnPosts,
        ], 200);
    }
}
