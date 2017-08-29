// import { request } from './request';
import superagent from 'superagent';

const URL = '/api/images';

export default {

  getImages() {
    console.log('making emoji api call to get all images...');
    return superagent.get(URL);
  },

  addImage(img) {
    return superagent.post(URL, img);
  }

};
