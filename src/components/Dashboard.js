import React from 'react';
import Pet from './Pet';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.cats = [
      {
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
      },
      {
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Mittens',
        sex: 'Male',
        age: 4,
        breed: 'Bengal',
        story: 'Owner lost in a wormhole incident'
      },
      {
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Moon',
        sex: 'Female',
        age: 1,
        breed: 'Bengal',
        story: 'Brought to shelter'
      }
    ];

    this.dogs = [
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away'
      },
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Donovan',
        sex: 'Male',
        age: 6,
        breed: 'Golden Retriever',
        story: 'Family moved'
      },
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Barbara',
        sex: 'Female',
        age: 1,
        breed: 'Golden Retriever',
        story: 'Found wandering the street'
      }
    ];
    
    this.state = {
    }
  }

  onAdopt() {
    console.log('Pet adopted!')
  }
  
  render() {
    return (
      <div className="dashboard-container">
        <Pet petToAdopt={this.cats[0]} onAdoptPet={this.onAdopt}/>
        <Pet petToAdopt={this.dogs[0]} onAdoptPet={this.onAdopt}/>
      </div>
    )

  }
}