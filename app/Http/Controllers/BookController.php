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
        $books = Book::orderBy('id', 'desc')->paginate()->items();
        return inertia('Book/List', ["books" => $books]);
    }

    public function create()
    {
        return inertia('Book/Create');
    }

    public function store(Request $request)
    {
        Book::create(
            $request->validate([
                "name" => ["required", "min:3"],
                "pages" => ["required"],
                "author" => ["required"],
            ])
        );

        return \Redirect::route('books.index');
    }

    public function show(Book $book)
    {
        return inertia('Book/Show', ['book' => $book]);
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
