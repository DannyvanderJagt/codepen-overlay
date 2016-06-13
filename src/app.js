import React, {Component} from 'react';
import ReactDom from 'react-dom';

// Components
import TitleBar from './components/titlebar';

// Views
import Overview from './views/overview';
import Details from './views/details';

// Data
import Data from './data';
import State from './state';

class App extends Component{
  constructor(){
    super();
    State.setCallback(this);

    this.state = State;
  }
  render(){
    return (
      <div id='app'>
        <TitleBar/>

        <Overview pens={this.state.pens}/>
        <Details pen={this.state.active ? this.state.pens[this.state.active]: undefined} />

        <div id='bar'/>
      </div>
    )
  }
}


ReactDom.render(
  <App/>,
  document.getElementById('window')
);

