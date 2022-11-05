import styled from 'styled-components';

export const CardContainer = styled.div`
  .Card {
    background-color: red;
    border: 3px solid red;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 180px;
    width: 150px;
    
}

.Card .Title {
    background-color: red;
    padding: 8px;
    display: flex;
    justify-content: center;
}

.Card .PokemonName {
    background-color: white;
    color: blue;
    padding: 20px;
}
`;




