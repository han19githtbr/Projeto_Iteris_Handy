
import {  Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Add(){

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [hp, setHp] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [speed, setSpeed] = useState("")
    const [special_attack, setSpecial_attack] = useState("")
    const [special_defense, setSpecial_defense] = useState("")

    const data={
        name:name,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        special_attack: special_attack,
        special_defense: special_defense,
    }

    const handleSubmit = ((e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/add", data)
            .then(res => {

                if (res.status === 200) {
                    navigate('/')
                }

            })

    })

    return(
        <>

            <h2 className="titleCreate">Adicionar Carta</h2>
            <hr className='bars' />
            <form className='formCreate' onSubmit={handleSubmit} enctype="multipart/form-data">
             
                    <label>Nome</label>
                    <br></br>
                    <input className="form-input"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="pokemon"
                    />
                    <br></br>
                    <br></br>

                    <label>hp</label>
                    <br></br>
                    <input className="form-input"
                        name='hp'
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        placeholder="pokemon"
                    />
                    <br></br>
                    <br></br>

                    <label>attack</label>
                    <br></br>
                    <input className="form-input"
                        name='attack'
                        value={attack}
                        onChange={(e) => setAttack(e.target.value)}
                        placeholder="pokemon"
                    />

                    <br></br>
                    <br></br>

                    <label>defense</label>
                    <br></br>
                    <input className="form-input"
                        name='defense'
                        value={defense}
                        onChange={(e) => setDefense(e.target.value)}
                        placeholder="pokemon"
                    />

                    <br></br>
                    <br></br>

                    <label>speed</label>
                    <br></br>
                    <input className="form-input"
                        name='speed'
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        placeholder="pokemon"
                    />

                    <br></br>
                    <br></br>

                    <label>special attack</label>
                    <br></br>
                    <input className="form-input"
                        name='specialAttack'
                        value={special_attack}
                        onChange={(e) => setSpecial_attack(e.target.value)}
                        placeholder="pokemon"
                    />

                    <br></br>
                    <br></br>

                    <label>special defense</label>
                    <br></br>
                    <input className="form-input"
                        name='specialDefense'
                        value={special_defense}
                        onChange={(e) => setSpecial_defense(e.target.value)}
                        placeholder="pokemon"
                    />
                    <br></br>
                    <br></br>
    
                    <input type="submit" className="submitCreate" value="adicionar" />

                    <Link to='/'>
                        <button className="cancelCreate">cancel</button>
                    </Link>

            </form>
        
        </>
    )
}