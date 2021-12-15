import React from 'react'
import perfilPhoto from "../assets/perfilPhoto.jpg"

function Home() {
  return (
    <div className="content">
      <section className="description">
        <h2>Olá, meu nome é</h2>
        <h1>Lucas Ferreira</h1>
        <button>Trabalhos</button>
      </section>
      <section className="perfil-photo-main">
        <img src={perfilPhoto} alt="Foto perfil ilustrativa" />
      </section>
    </div>
  )
}

export default Home;