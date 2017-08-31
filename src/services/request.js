import superagent from 'superagent';

export const API_URL = '/api';

const wrap = cmd => cmd
	.then(
		r => r.body,
		({ response }) => {
			throw response.error;
		}
	);
    
export const request = {
	get(url) {
		return wrap(superagent.get(`${API_URL}${url}`));
	},
	post(url, data) {
		return wrap(superagent.post(`${API_URL}${url}`).send(data));
	},
	delete(id) {
		return wrap(superagent.delete(`${API_URL}${id}`));
	},
        
};
