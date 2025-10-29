<?php

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::get('/user', [AuthController::class, 'user']);
// });

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Auth;

// ===========================
// AUTH ROUTES
// ===========================

// Register user biasa
Route::post('/register', [AuthController::class, 'register']);

// Login user biasa
Route::post('/login', [AuthController::class, 'login']);

// Register investor (role = investor)
Route::post('/register/investor', function (Request $request) {
    // Validasi data sama seperti register biasa
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8|confirmed',
    ]);

    // Buat user dengan role = investor
    $user = \App\Models\User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => bcrypt($validated['password']),
        'role' => 'investor',
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Investor registered successfully',
        'user' => $user,
        'access_token' => $token,
        'token_type' => 'Bearer',
    ]);
});

// Login investor (bisa pakai endpoint sama, tapi disarankan dipisah untuk kejelasan)
Route::post('/login/investor', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = \App\Models\User::where('email', $request->email)->first();

    if ($user->role !== 'investor') {
        return response()->json(['message' => 'Unauthorized: not an investor'], 403);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Login investor successful',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'user' => $user,
    ]);
});


