import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContainer, } from './styles';

// import { Container } from './styles';

function Home() {
    const navigate = useNavigate();
    return (
    <HomeContainer>
        <h1>Bem vindo!</h1>
        Clica no link abaixo para dar início a sua coleção! <br />

        <button onClick={() => navigate('/pokemon-list')}>Meu Pokedex</button>
    </HomeContainer>
  )
}

export default Home;