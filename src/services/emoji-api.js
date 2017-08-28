import { request } from './request';

const URL = '/images';

export default = {

  getImage() {
    return request.get('/api/images');
  },

  addImage(img) {
    return request.post('/api/images', img);
  }

};
