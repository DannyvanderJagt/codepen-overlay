import React, {
  Component
} from 'react';

import State from '../state';

class Input extends Component{
  constructor(){
    super();

    this.state = {
      value: ''
    }
  }
  setValue(props){
    let value;

    if(props.value){
      value = props.value;
    }else if(props.pen && props.name){
      value = State.pens[props.pen][props.name];
    }

    if(!value){
      value = '';
    }

    this.setState({value})
  }
  componentDidMount(){
    this.setValue(this.props)
  }
  componentWillReceiveProps(props){
    this.setValue(props)
  }
  onChange(event){
    let value = event.target.value;

    if(this.props.pen && this.props.name){
      State.setPen(this.props.pen, {
        [this.props.name]: value
      });
    }

    this.setState({value: event.target.value})
  }
  render(){
    return (
      <div className='field'>
        <div className='name'>{this.props.title}</div>
        <input 
          className='value' 
          type='text' 
          value={this.state.value}
          onChange={this.onChange.bind(this)}/>
      </div>
    )
  }

}

export default Input;