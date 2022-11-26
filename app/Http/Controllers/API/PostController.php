<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\comment;
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
                'comment_count' => DB::table('comment')->where('post_id', $post->id)->count(),
                'comment' => DB::table('comment')->where('post_id', $post->id)->get(),
            ];
        });

        return response()->json([
            'returnPost' => $returnPosts,
        ], 200);
    }
    public function postComment(Request $request)
    {
        // get token from request
        $token = $request->bearerToken();
        // hash token
        $token = hash('sha256', $token);
        // get userID from personal_access_tokens table
        $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
        $comment = comment::create([
            'user_id' => $userID,
            'post_id' => $request->post_id,
            'content' => $request->content,
            'create_at' => date('Y-m-d H:i:s'),
        ]);
        return response()->json([
            'comment' => $comment,
        ], 200);
    }
    public function postPost(Request $request)
    {
        // get token from request
        $token = $request->bearerToken();
        // hash token
        $token = hash('sha256', $token);
        // get userID from personal_access_tokens table
        $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
        $post = post::create([
            'user_id' => $userID,
            'caption' => $request->caption,
            'image_url' => $request->image_url,
            'like' => 0,
            'share' => 0,
            'create_at' => date('Y-m-d H:i:s'),
        ]);
        return response()->json([
            'post' => $post,
        ], 200);
    }
    // Like
    public function postLike(Request $request)
    {
        try {
            // get token from request
            $token = $request->bearerToken();
            // hash token
            $token = hash('sha256', $token);
            // get userID from personal_access_tokens table
            $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
            $post = post::find($request->post_id);
            $post->like = $post->like + 1;
            $post->save();
            return response()->json([
                'post' => $post,
                // 'request' => $request->all(),
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'fail',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
    // Dislike
    public function postDislike(Request $request)
    {
        try {
            // get token from request
            $token = $request->bearerToken();
            // hash token
            $token = hash('sha256', $token);
            // get userID from personal_access_tokens table
            $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
            $post = post::find($request->post_id);
            $post->like = $post->like - 1;
            $post->save();
            return response()->json([
                'post' => $post,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'fail',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
