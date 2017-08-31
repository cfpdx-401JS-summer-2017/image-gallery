import { request } from './request';

const URL = '/bunnies';

export default {
	getAll() {
		return request.get(URL);
	},
	add(bunny) {
		return request.post(URL, bunny);
	},
	remove(id){
		return request.delete(`${URL}/${id}`);
	}
};