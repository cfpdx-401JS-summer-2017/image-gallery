import { request } from './request';

const URL = '/images';

export default {

  getImages() {
    return request.get(URL);
  },

  addImage(img) {
    return request.post(URL, img);
  }

};
