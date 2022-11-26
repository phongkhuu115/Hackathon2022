<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\comment;
use App\Models\post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\like;
class PostController extends Controller
{
    public function getNewfeed(Request $request)
    {
        // get all post sort by created_at
        $posts = post::orderBy('create_at', 'desc')->get();
        $returnPosts = $posts->map(function ($post) {
            $comment = DB::table('comment')->where('post_id', $post->id)->get();
            $returnComment = $comment->map(function ($comment) {
                return [
                    'id' => $comment->id,
                    'user_id' => $comment->user_id,
                    'full_name' => DB::table('user')->where('id', $comment->user_id)->value('full_name'),
                    'avatar' => DB::table('user')->where('id', $comment->user_id)->value('avatar'),
                    'post_id' => $comment->post_id,

                    'content' => $comment->content,
                    'create_at' => $comment->create_at,
                    'update_at' => $comment->update_at,
                ];
            });

            return [
                'post_id' => $post->id,
                'post_caption' => $post->caption,
                'post_image' => $post->image_url,
                'post_created_at' => $post->create_at,
                'post_updated_at' => $post->update_at,
                'post_of_user' => $post->user_id,
                'full_name' => DB::table('user')->where('id', $post->user_id)->first()->full_name,
                'avatar' => DB::table('user')->where('id', $post->user_id)->first()->avatar,
                'like' => DB::table('like')->where('post_id', $post->id)->count(),
                'share' => $post->share,
                'comment_count' => DB::table('comment')->where('post_id', $post->id)->count(),
                'comment' => $returnComment,
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
        $random_iam = [
            "https://firebasestorage.googleapis.com/v0/b/web-koin.appspot.com/o/Hackathon%2Fwork.png?alt=media&token=d262a024-6b94-49c0-ba2f-67fbcb80b696",
            "https://firebasestorage.googleapis.com/v0/b/web-koin.appspot.com/o/Hackathon%2Fwok2.png?alt=media&token=8c988714-1109-410e-9da6-0c44c2f4f5ae",
            "https://firebasestorage.googleapis.com/v0/b/web-koin.appspot.com/o/Hackathon%2Fwork3.png?alt=media&token=ace32d7d-1caf-4ac2-ac9f-b2b8d157f9eb",
            "https://firebasestorage.googleapis.com/v0/b/web-koin.appspot.com/o/Hackathon%2Fwork1.png?alt=media&token=0dfba813-ecaf-4fbc-948f-7dac29fa6613]",
        ];
        $random_iam = $random_iam[rand(0, 3)];
        // get token from request
        $token = $request->bearerToken();
        // hash token
        $token = hash('sha256', $token);
        // get userID from personal_access_tokens table
        $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
        $post = post::create([
            'user_id' => $userID,
            'caption' => $request->caption,
            'image_url' => $random_iam,
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
            // insert like
            // if user liked post
            if (DB::table('like')->where('user_id', $userID)->where('post_id', $request->post_id)->exists()) {
                // delete like
                DB::table('like')->where('user_id', $userID)->where('post_id', $request->post_id)->delete();
                // update like count
                $post->like = DB::table('like')->where('post_id', $request->post_id)->count();
                $post->save();
                return response()->json([
                    'message' => 'User unliked post',
                ], 200);
            } else {
                // insert like
                like::create([
                    'user_id' => $userID,
                    'post_id' => $request->post_id,
                    'create_at' => date('Y-m-d H:i:s'),
                ]);
                // update like count
                $post->like = DB::table('like')->where('post_id', $request->post_id)->count();
                $post->save();
                return response()->json([
                    'message' => 'User liked post',
                ], 200);
            }
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
            if ($post->like > 0) {
                $post->like = $post->like - 1;
                $post->save();
            } else {
                $post->like = 0;
                $post->save();
            }
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
    // get my post
    public function getMyPost(Request $request)
    {
        try {
            // get token from request
            $token = $request->bearerToken();
            // hash token
            $token = hash('sha256', $token);
            // get userID from personal_access_tokens table
            $userID = DB::table('personal_access_tokens')->where('token', $token)->first()->tokenable_id;
            $posts = post::where('user_id', $userID)->get();
            $returnPosts = $posts->map(function ($post) {
                $comment = DB::table('comment')->where('post_id', $post->id)->get();
                $returnComment = $comment->map(function ($comment) {
                    return [
                        'id' => $comment->id,
                        'user_id' => $comment->user_id,
                        'full_name' => DB::table('user')->where('id', $comment->user_id)->value('full_name'),
                        'avatar' => DB::table('user')->where('id', $comment->user_id)->value('avatar'),
                        'post_id' => $comment->post_id,
                        'content' => $comment->content,
                        'create_at' => $comment->create_at,
                        'update_at' => $comment->update_at,
                    ];
                });

                return [
                    'post_id' => $post->id,
                    'post_caption' => $post->caption,
                    'post_image' => $post->image_url,
                    'post_created_at' => $post->create_at,
                    'post_updated_at' => $post->update_at,
                    'post_of_user' => $post->user_id,
                    'full_name' => DB::table('user')->where('id', $post->user_id)->first()->full_name,
                    'avatar' => DB::table('user')->where('id', $post->user_id)->first()->avatar,
                    'like' => DB::table('like')->where('post_id', $post->id)->count(),
                    'share' => $post->share,
                    'comment_count' => DB::table('comment')->where('post_id', $post->id)->count(),
                    'comment' => $returnComment,
                ];
            });
            return response()->json([
                'returnPost' => $returnPosts,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'fail',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
