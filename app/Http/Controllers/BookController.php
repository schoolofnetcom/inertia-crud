<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        // return Inertia::render('');
        return inertia('Book/List');
    }

    public function create()
    {
        return inertia('Book/Create');
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Book $book)
    {
        return inertia('Book/Show');
    }

    public function edit(Book $book)
    {
        return inertia('Book/Edit');
    }

    public function update(Request $request, Book $book)
    {
        //
    }

    public function destroy(Book $book)
    {
        //
    }
}
