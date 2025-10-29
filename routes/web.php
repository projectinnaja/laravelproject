<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PageController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/investor', function () {
    return Inertia::render('Investor');
});
// Route::get('/test', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// Route::get('/', function () {
//     return inertia('Auth/LoginPage');
// });

// Route::get('/login', function () {
//     return inertia('Auth/LoginPage');
// })->name('login');

// Route::get('/dashboard', function () {
//     return inertia('Dashboard', [
//         'auth' => [
//             'user' => auth()->user()
//         ]
//     ]);
// })->middleware('auth:sanctum');

// Route::get('/landing', function () {
//     return Inertia::render('LandingBeraksi');
// });

// // Handle all other routes
// Route::get('/{any}', function () {
//     return inertia('Auth/LoginPage');
// })->where('any', '.*');

require __DIR__.'/auth.php';
