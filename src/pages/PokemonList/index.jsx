import { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../../components/Card';
import { api } from '../../services/api';
import { ListContainer } from './styles';






function PokemonList() {

    useEffect(()=>{
        getPokemonList()
    },[])
    
    

    const [pokemonList, setPokemonList] = useState([])

    async function getPokemonList(){
        const pokemonListResponse = await api.get()
            console.log(pokemonListResponse)
            setPokemonList(pokemonListResponse.data.results)
    }
  return <ListContainer>
    {
        pokemonList.map((pokemon)=>(
            <Fragment key={pokemon.name}>
                <Card title={pokemon.name} />
            </Fragment>
        ))
    }
    <Card title='Picachu'/>
    
             
  </ListContainer> 

}


// body {
//     font-family: PokemonSolid;
//     background-color: black;
//     color: white;
//     text-align: center;
// }

// h1, h2, h3 {
//     font-weight: 200;
// }




export default PokemonList;

