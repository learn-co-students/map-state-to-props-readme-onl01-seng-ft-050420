import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {//2 when this function is called we are specifing which slice of the 
  //state we want to provide to our component
  //providing a prop called items that has a value of state.items
  return {items: state.items};
}

export default connect(mapStateToProps)(App);//3 here we are saying provide items to App to specify which 
//component we want the props to have access to
//4 this connect() method returns a new component it looks like app but it has the correct data whcih is why we are 
//exporting it with export default so it can be used elsewhere
//1 when a change occurs it calls mapStateToProps
