import React from 'react';
import { connect } from 'react-redux';

import {fetchCat, adoptCat} from '../actions/cat';
import {fetchDog, adoptDog} from '../actions/dog';

import Pet from './Pet';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.onAdoptCat = this.onAdoptCat.bind(this);
    this.onAdoptDog = this.onAdoptDog.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptCat() {
    console.log('Pet adopted!');
    this.props.dispatch(adoptCat());
  }

  onAdoptDog() {
    console.log('Pet adopted!')
    this.props.dispatch(adoptDog());
  }
  
  render() {
    return (
        <div className="dashboard-container">
          {this.props.cat && this.props.dog ? (
            <div>
              <Pet petToAdopt={this.props.cat} onAdoptPet={this.onAdoptCat}/>
              <Pet petToAdopt={this.props.dog} onAdoptPet={this.onAdoptDog}/>
            </div>
          ) : (
            'Loading...'
          )}
        </div>
    )

  }
}

const mapStateToProps = state => ({
  cat: state.cat.data,
  dog: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);