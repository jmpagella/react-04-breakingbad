import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 30%, #0f574e 100%);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  opacity: 1;
  background-size: 320px;
  transition: background-size .8s ease;

  &:hover {
    border: 2px solid lightgreen;
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // State de Frases
  const [ frase, guardarFrase ] = useState({});

  // Consultar a la API
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]); 
  }

  // Cargar una frase
  useEffect( () => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      
      <Frase
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
