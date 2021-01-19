import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Show = ({book}) => {
    return (
        <div>
            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td className="border px-4 py-2"><strong>Nome</strong></td>
                        <td className="border px-4 py-2">{ book.name }</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2"><strong>Número de páginas</strong></td>
                        <td className="border px-4 py-2">{ book.pages }</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2"><strong>Autor</strong></td>
                        <td className="border px-4 py-2">{ book.author }</td>
                    </tr>
                </tbody>
            </table>

            <div className="max-w-7xl mx-auto mt-8">
                <InertiaLink
                    href={ route('books.index') }
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Voltar
                </InertiaLink>
            </div>
        </div>
    );
}

export default Show;
