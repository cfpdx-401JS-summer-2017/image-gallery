import { request } from './request';

const URL = '/images';

export default {
  getEmojis() {
    return request.get(URL);
  },
  addEmoji(img) {
    return request.post(URL, img);
  },
  removeEmoji(id) {
    return request.delete(URL, id);
  }
};
