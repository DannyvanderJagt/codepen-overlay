import React, {
  Component
} from 'react';

import State from '../state';

class Details extends Component{

  handleChange(){

  }

  back(){
    State.set({active: undefined});
  }

  render(){
    let pen = this.props.pen || {};

    return (
      <div 
        id='details' 
        className={'view' + (this.props.pen ? ' active' : '')}>

        <div className='pen'>
          <div 
            className='image' 
            style={{backgroundImage: `url(http://codepen.io/${State.username}/pen/${pen.id}/image/large.png)`}}
            onMouseDown={this.back.bind(this)}/>
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
        <div className='field'>
          <div className='name'>Id</div>
          <input className='value' type='text' value={pen.id||''} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <div className='name'>Title</div>
          <input className='value' type='text' value={pen.title||''} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <div className='name'>Sub Title</div>
          <input className='value' type='text' value={pen.subtitle||''} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <div className='name'>Left</div>
          <input className='value' type='text' value={pen.left||''} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <div className='name'>Right</div>
          <input className='value' type='text' value={pen.right||''} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <div className='name'>Gif</div>
          <input className='value' type='text' value={pen.gif||''} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <div className='name'>Time</div>
          <input className='value' type='text' value={pen.time||''} onChange={this.handleChange}/>
        </div>
        
      </div>
    )
  }

}

export default Details;