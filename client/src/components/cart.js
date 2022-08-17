
import React, { useState, useEffect } from "react";
import axios from 'axios'


export default function Cart(){
    const [item, setItem] = useState([])
    const [item2, setItem2] = useState([])

    const [som1,setSom1]=useState("")
    const [som2, setSom2] = useState("")

    const [pokemon2, setPokemon2] = useState("")
    const [pokemon1, setPokemon1] = useState("")
    const [result, setResult] = useState("")


    const [cart, setCart]=useState("")
    const [show, setShow]=useState(true)

    const [showResult, setShowResult] = useState(true)
    const [sucess,setSucess]=useState("")

    const url = "http://localhost:5000/pokemons"

    useEffect(() => {

        listItem()

    }, [])
 
    
    const listItem = () => {
        axios.get(`${url}`).then((response) => {

            var arr= response.data 
            arr = Array.from({ length: 1 }, () => arr[Math.floor(Math.random() * arr.length)]);
           
            setItem(arr);
            setPokemon1(arr[0].name)
            var arr2 = response.data
            
            arr2 = Array.from({ length: 3 }, () => arr2[Math.floor(Math.random() * arr2.length)]);
            
            arr2 = arr2.filter(item => !arr.includes(item))
          
            setItem2(arr2);
            
            var somap

            arr.map((e)=> {
                somap=(e.hp+e.attack+ e.defense + e.speed +e.special_attack +e.special_defense)

            })
          
            setSom1(somap)
             


        });
    }
    var somU
        function handlePokemon(item){
    
            somU=(item.hp + item.attack + item.defense + item.speed + item.special_attack + item.special_defense)
            setSom2(somU)
            setPokemon2(item.name)
            setCart(item)
            setShow(false)
       
    }
    
    var nom1=""
    var nom2=""

    console.log(sucess)
    function handleComp(){
        if(som1 > som2 ){
           
            setResult(pokemon1)
            nom1 = pokemon1
            console.log(pokemon1)
            setSucess(pokemon1)
            setShowResult(false)
         
        }else{
          
            setResult(pokemon2)
            nom2 = pokemon2
            setShowResult(false)
            setSucess(pokemon2)
           
        }

        const data = {
            pokemon1: pokemon1,
            pokemon2: pokemon2,
            result: nom1+ nom2
        }

        axios.post("http://localhost:5000/result", data)
            .then(res => {
                if (res.status === 200) {
                  
                }

            })
        
            console.log(result)
            console.log(data)
    }

    function handleStart(){
        window.location.reload(true);
    }

    return(
        <div className="base">
            {
            showResult?
                <>
                    <div>
                        {
                            item.map((item, id) => (
                                <div key={id} className="cart">
                                    <div>{item.name}</div>
                                    <div>{item.hp}</div>
                                    <div>{item.attack}</div>
                                    <div>{item.defense}</div>
                                    <div>{item.speed}</div>
                                    <div>{item.special_attack}</div>
                                    <div>{item.special_defense}</div>
                                </div>
                            ))
                        }
                    </div>

                        {
                            show ?

                            <>
                                <div>escolhe uma carta </div>
                                    <div className="user">
                                    {
                                        item2.map((item, id) => (

                                            <div key={id} className="cartuser" onClick={(e) => handlePokemon(item)}>
                                                <div>{item.name}</div>
                                                <div>{item.hp}</div>
                                                <div>{item.attack}</div>
                                                <div>{item.defense}</div>
                                                <div>{item.speed}</div>
                                                <div>{item.special_attack}</div>
                                                <div>{item.special_defense}</div>
                                            </div>
                                        ))
                                    }   

                                </div>
                            </>
                            :
                            <>
                                <div className="cartuser">
                                    <div>{cart.name}</div>
                                    <div>{cart.hp}</div>
                                    <div>{cart.attack}</div>
                                    <div>{cart.defense}</div>
                                    <div>{cart.speed}</div>
                                    <div>{cart.special_attack}</div>
                                    <div>{cart.special_defense}</div>
                                </div>
                                <div onClick={handleComp} className="comparar">comparar</div>
                            </>
                        }

                </>
                :
               
                        <>
                            <div className="sucess">{sucess} ganhou!</div>
                            <div className="iniciar" onClick={handleStart}>iniciar</div>
                        </>
                         
            }
        
        </div>
    )
}