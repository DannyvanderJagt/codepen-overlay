import React, {
  Component
} from 'react';

import State from '../state';
import Input from '../components/input';

class Details extends Component{

  back(){
    State.set({active: undefined});
  }

  renderInputFields(){
    let pen = this.props.pen || {};

    if(!pen){ return; }

    return (
      <div>
        <Input title='Id' pen={pen.id} name='id'/>
        <Input title='Title' pen={pen.id} name='title' />
        <Input title='Subtitle' pen={pen.id} name='subtitle'/>

        <div className='field'>
          <div className='name'>Left</div>
          <select>
            {Object.keys(State.pens).map((key) => {
              return <option value={key}>{State.pens[key].title}</option>
            })}
          </select>
        </div>

         <div className='field'>
          <div className='name'>Right</div>
          <select>
            {Object.keys(State.pens).map((key) => {
              return <option value={key}>{State.pens[key].title}</option>
            })}
          </select>
        </div>

        <Input title='Gif' pen={pen.id} name='gif'/>
        <Input title='Time' pen={pen.id} name='time'/>
        <Input title='Credits' pen={pen.id} name='credits'/>
      </div>
    )
  }

  render(){
    let pen = this.props.pen || {};

    let image;

    if(pen && pen.id){
       image = <div 
            className='image' 
            style={{backgroundImage: `url(http://codepen.io/${State.username}/pen/${pen.id}/image/small.png)`}}
            onMouseDown={this.back.bind(this)}/>
    }


    return (
      <div 
        id='details' 
        className={'view' + (this.props.pen ? ' active' : '')}>

        <div className='pen'>
          {image}
          <div className='info'>
            <div className='item'>
              <img src='./images/view.svg'/>
              <div className='text'>10k view</div>
            </div>
            <div className='item'>
              <img src='./images/like.svg'/>
              <div className='text'>102 likes</div>
            </div>
            <div className='item'>
              <img src='./images/comment.svg'/>
              <div className='text'>3 comments</div>
            </div>
          </div>
        </div>
        {this.renderInputFields()}
               
      </div>
    )
  }

}

export default Details;