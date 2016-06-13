
import State from '../state';
import Request from 'request'
import Xml2js from 'xml2js';


let Data = {
  username: State.username,
  pens: {},

  collectPens(){
    Request({
      url: `http://codepen.io/${this.username}/public/feed/`,
      xml: true,
    }, (error, response, body) => {
      if(error){ throw error; }
      Xml2js.parseString(body, this.processData.bind(this));
    })
  },

  processData(error, data){
    if(error){ throw error; }
   
    if(!data.rss.channel[0]){ return; }
    if(!data.rss.channel[0].item){ return; }

    data.rss.channel[0].item.forEach((item) => {
      let parts = item.guid[0].split('/');
      let id = parts[parts.length-1];

      State.setPen(id, {
        id: id,
        title: item.title[0]
      });
      

    })

        console.log(State);
  }



}


Data.collectPens();

export default Data;