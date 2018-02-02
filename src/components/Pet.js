import React from 'react';

export default function Pet(props) {

 return (
  <section className="section">
    <header className= "header">
      <h3>{props.petToAdopt.name}</h3>
      <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription}/>
    </header>
    <main className="main">
      <dl className="dl">
        <dt>Gender:</dt>
        <dd>{props.petToAdopt.sex}</dd>
        <dt>Age:</dt>
        <dd>{props.petToAdopt.age}</dd>
        <dt>Breed:</dt>
        <dd>{props.petToAdopt.breed}</dd>
        <dt>Story:</dt>
        <dd>{props.petToAdopt.story}</dd>
      </dl>
      <button className="button" onClick={() => props.onAdoptPet()}>Adopt {props.petToAdopt.name}!</button>
    </main>
  </section>
 )

}