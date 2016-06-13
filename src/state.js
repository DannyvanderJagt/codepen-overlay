export default {


  username: 'thesuitcase',
  active: undefined,
  pens: {
    // id: data
    // title
    // subtitle
    // description
    // left
    // right
    // gif
    // time
    // credits
    // 
    // likes
    // views
    // comments
  },



  _callback: undefined,
  setCallback(cb){
    this._callback = cb;
  },
  set(data){
    if(!data){ return; }
    Object.assign(this, data);
    if(this._callback){
      this._callback.setState(this)
    }
  },

  setPen(id, data){
    this.pens[id] = data;
    if(this._callback){
      this._callback.setState(this)
    }
  }

}