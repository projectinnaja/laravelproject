<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'email' => 'test@user.test',
        //     'name' => 'Test User',
        //     'email_verified_at' => now(),
        //     'password' => Hash::make('password123'),
        // ]);
         // User dummy
        User::create([
            'name' => 'Admin Pengmas',
            'email' => 'admin@pengmas.com',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);

        // User::create([
        //     'name' => 'User Demo',
        //     'email' => 'user@pengmas.com',
        //     'password' => Hash::make('password123'),
        //     'email_verified_at' => now(),
        // ]);

        // User::factory(5)->create();
    }
}
