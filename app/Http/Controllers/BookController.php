<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        return @Inertia('Book/Index');
    }

    public function create()
    {
        return @Inertia('Book/Create');
    }

    public function show(Book $book)
    {
        return @Inertia('Book/Show');
    }

    public function edit(Book $book)
    {
        return @Inertia('Book/Edit');
    }
}
