import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = () => {

    const [data, setData] = useState({
        name: '',
        pages: '',
        author: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        Inertia.post(route('books.store'), data);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setData({...data, [name]: value});
        console.log(data);
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
                        onChange={handleInputChange}
                    />
                    {/* error message */}
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Quantidade de Páginas
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        name="pages"
                        onChange={handleInputChange}
                    />
                    {/* error message */}
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Autor
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="author"
                        onChange={handleInputChange}
                    />
                    {/* error message */}
                </div>
                <button
                    className="px-3 ml-3 py-2 bg-green-400" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default Create;
