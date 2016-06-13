import React, {
  Component
} from 'react';

import State from '../state';

class Overview extends Component{

  goToDetails(id){
    State.set({active: id});
  }

  renderItems(){
    return Object.keys(this.props.pens).map((id) => {
      let pen = this.props.pens[id];
      return (
        <div className='pen' key={id} onMouseDown={this.goToDetails.bind(this, id)}>
          <div className='image' style={{backgroundImage: `url(http://codepen.io/${State.username}/pen/${id}/image/large.png)`}}/>
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
      );
    })
  }

  render(){
    return (
      <div id='overview' className='view'>

        {this.renderItems()}
      </div>
    )
  }
}

export default Overview;