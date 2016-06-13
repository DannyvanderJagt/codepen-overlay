import React, {
  Component
} from 'react';

class TitleBar extends Component{
  render(){
    return (
      <div className='titlebar'>

        <div className='traffic-light red'/>
        <div className='traffic-light yellow'/>
      </div>
    );
  }
}

export default TitleBar;