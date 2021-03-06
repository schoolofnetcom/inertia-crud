import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({book}) => {
    const { errors } = usePage().props;

    const [data, setData] = useState({
        name: book.name,
        pages: book.pages,
        author: book.author
    });

    function handleSubmit(event) {
        event.preventDefault();
        Inertia.put(route('books.update', { book : book.id }), data);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setData({...data, [name]: value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nome
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="name"
                        value={data.name ?? ''}
                        onChange={handleInputChange}
                    />
                    { errors.name && <p className="text-red-500 text-xs italic mb-4">{errors.name}</p> }
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Quantidade de Páginas
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        name="pages"
                        value={data.pages ?? ''}
                        onChange={handleInputChange}
                    />
                    { errors.pages && <p className="text-red-500 text-xs italic mb-4">{errors.pages}</p> }
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Autor
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="author"
                        value={data.author ?? ''}
                        onChange={handleInputChange}
                    />
                    { errors.author && <p className="text-red-500 text-xs italic mb-4">{errors.author}</p> }
                </div>
                <button
                    className="px-3 ml-3 py-2 bg-green-400" type="submit">
                    Atualizar
                </button>
            </form>
        </div>
    );
}

export default Edit;
