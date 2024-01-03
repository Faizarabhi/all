<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Laravel\Firebase\Facades\Firebase;

class FirebaseAuthController extends Controller
{
    protected $auth;

    public function __construct()
    {
        $this->auth = Firebase::auth();
    }
    public function register(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        try {
            $user = Firebase::auth()->createUserWithEmailAndPassword($email, $password);
            return response()->json(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Registration failed.'], 400);
        }
    }
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        try {
            $signInResult = Firebase::auth()->signInWithEmailAndPassword($email, $password);
            $token = $signInResult->idToken();
            return response()->json(['token' => $token], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Authentication failed.'], 401);
        }
    }
}
