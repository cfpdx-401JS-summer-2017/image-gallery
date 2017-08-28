import { request } from './request';

const URL = '/images';

export default {
    getAll() {
        return request.get(URL);
    },
    add(image) {
        return request.post(URL, image);
    },
    remove(id) {
        return request.delete(`${URL}/${id}`);
    }
};