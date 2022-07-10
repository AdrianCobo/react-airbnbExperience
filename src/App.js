import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./index.css"

export default function App() {

  const cards = data.map(item => {
    return (
    <Card
      key={item.id}//importante tener un id unico cuando usas map
      item={item}
    />)
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}