import React from 'react'

// Componentes
import Header from '../../components/Header/Header'

// Estilos
import {Container} from 'reactstrap'

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <h1>Dashboard Administrador</h1>
      </Container>
    </>
  )
}

export default Home