import React, { useState, useEffect } from "react";

import axios from 'axios'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function List() {
    const navigate = useNavigate();

    const [item, setItem] = useState([])

    const url = "http://localhost:5000/pokemons"
    const url2 = "http://localhost:5000/"

    useEffect(() => {
        listItem()
    }, [])

    const listItem = () => {
        axios.get(`${url}`).then((response) => {
        setItem(response.data);
    
    });
}

    const handleRemove = (id) => {
        if (window.confirm('tem certeza de excluir esse usuáorio')) {
            axios.delete(`${url2}delete-action/${id}`).then((response) => {
                listItem()

            });
        }
    }

    return (
            <>
            
                <Link className="link-button-add" to="/add">
                    <button className="button-add">add</button>
                </Link>
                    <table border="1px" width="100%" className="table">
                        <thead className="thead">
                            <tr>
                                <th>nome</th>
                                <th>hp</th>
                                <th>attack</th>
                                <th>defense</th>
                                <th>speed</th>
                                <th>special attack</th>
                                <th>special defense</th>
                                <th>acões</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">

                            {

                                item.map((dados, id) => (

                                            <tr key={id}>
                                                <td data-label="Nome">{dados.name}</td>
                                                <td data-label="Nome">{dados.hp}</td>
                                                <td data-label="Description">{dados.attack}</td>
                                                <td data-label="Preço">{dados.defense}</td>
                                                <td data-label="Preço">{dados.speed}</td>
                                                <td data-label="Categoria">{dados.special_attack}</td>
                                                <td data-label="Destaque">{dados.special_defense}</td>

                                                <td data-label="Ações" className="action">
                                                    <Link to={`/update/${dados.id}`}>
                                                        <button className="btn">Editar</button>
                                                    </Link>

                                                    <button onClick={() => handleRemove(dados.id)} className="btn">Excluir</button>
                                                </td>
                                            </tr>
                                ))

                            }
                        </tbody>

                    </table>
                 
            </>
    )

}

