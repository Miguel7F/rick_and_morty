import React from 'react'
import axios from "axios"
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail() {

  const { id } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);


  return (
    <div>
      <div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Specie: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin?.name}</p>
      </div>
      <div><img src={character.image} alt={character.name} /></div>
    </div>
  )
}
