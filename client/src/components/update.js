import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Update() {
    const navigate = useNavigate();
    const url = "http://localhost:5000/add"

    const [name, setName] = useState("")
    const [hp, setHp] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [speed, setSpeed] = useState("")
    const [special_attack, setSpecial_attack] = useState("")
    const [special_defense, setSpecial_defense] = useState("")

    const { id } = useParams()

    useEffect(() => {
        loadName()

    }, [])


    const loadName = () => {

        fetch("http://localhost:5000/pokemon" + id)
            .then(response => response.json())
            .then(res => {

                console.log(res[0].name)
                setName(res[0].name)
                setHp(res[0].hp)
                setAttack(res[0].attack)
                setDefense(res[0].defense)
                setSpeed(res[0].speed)
                setSpecial_attack(res[0].special_attack)
                setSpecial_defense(res[0].special_defense)

            })

    }

    const data = {
        name: name,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        special_attack: special_attack,
        special_defense: special_defense,
    }

    const handleSubmit = ((e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/edit-action/" + id, data)
            .then(res => {

                if (res.status === 200) {
                    navigate('/')
                }

            })

    })

    return (
        <>
            <h2 className="titleCreate">editar item</h2>

            <hr className='bars' />
            <form className='formCreate' onSubmit={handleSubmit} enctype="multipart/form-data">

                <label>Nome</label>
                <br></br>
                <input
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    
                />
                <br></br>
                <br></br>

                <label>hp</label>
                <br></br>
                <input
                    name='hp'
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                   
                />
                <br></br>
                <br></br>

                <label>attack</label>
                <br></br>
                <input
                    name='attack'
                    value={attack}
                    onChange={(e) => setAttack(e.target.value)}
                   
                />
                <br></br>
                <br></br>

                <label>defense</label>
                <br></br>
                <input
                    name='defense'
                    value={defense}
                    onChange={(e) => setDefense(e.target.value)}
                   
                />
                <br></br>
                <br></br>

                <label>speed</label>
                <br></br>
                <input
                    name='speed'
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    
                />

                <br></br>
                <br></br>

                <label>special attack</label>
                <br></br>
                <input
                    name='specialAttack'
                    value={special_attack}
                    onChange={(e) => setSpecial_attack(e.target.value)}
                   
                />

                <br></br>
                <br></br>

                <label>special defense</label>
                <br></br>
                <input
                    name='specialDefense'
                    value={special_defense}
                    onChange={(e) => setSpecial_defense(e.target.value)}
                    
                />
                <br></br>
                <br></br>

                <input type="submit" className="submitCreate" value="adicionar" />

                <Link to='/'>
                    <button className="cancelCreate">cancel</button>
                </Link>

            </form>

        </>

    );
}

export default Update;
