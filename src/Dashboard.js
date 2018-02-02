import React from 'react';

export default function Dashboard(props) {
  
  return (
    <div className="container">
      <section className="section">
        <header className= "header">
          <h3>{props.catToAdopt.name}</h3>
          <img src={props.catToAdopt.imageURL} alt={props.catToAdopt.imageDescription}/>
        </header>
        <main className="main">
          <dl className="dl">
            <dt>Gender:</dt>
            <dd>{props.catToAdopt.sex}</dd>
            <dt>Age:</dt>
            <dd>{props.catToAdopt.age}</dd>
            <dt>Breed:</dt>
            <dd>{props.catToAdopt.breed}</dd>
            <dt>Story:</dt>
            <dd>{props.catToAdopt.story}</dd>
          </dl>
          <button className="button">Adopt this cat!</button>
        </main>
      </section>
      <section className="section">
        <header className= "header">
          <h3>{props.dogToAdopt.name}</h3>
          <img src={props.dogToAdopt.imageURL} alt={props.dogToAdopt.imageDescription}/>
        </header>
        <main className="main">
          <dl className="dl">
            <dt>Gender:</dt>
            <dd>{props.dogToAdopt.sex}</dd>
            <dt>Age:</dt>
            <dd>{props.dogToAdopt.age}</dd>
            <dt>Breed:</dt>
            <dd>{props.dogToAdopt.breed}</dd>
            <dt>Story:</dt>
            <dd>{props.dogToAdopt.story}</dd>
          </dl>
          <button className="button">Adopt this dog!</button>
        </main>
      </section>
    </div>
  )
}