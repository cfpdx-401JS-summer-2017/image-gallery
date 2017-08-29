import React, { Component } from 'react';
import { request } from './request';
const URL = '/images';

class imagesAPI extends Component {
    


    getAll() {
        return request.get(URL);
    }

    add(image) {
        return request.post(URL, image);
    }

    remove(id) {
        return request.delete(`${URL}/${id}`);
    }
}
export default imagesAPI;
