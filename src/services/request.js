import superagent from 'superagent';

export const API_URL = '/api';

const wrap = cmd => cmd
    .then(
        // caller cares about the data, not http response
        r => r.body,
        ({ response }) => {
            throw response.body.error;
        }
    );

export const request = {
    get(url) {
        return wrap(superagent.get(`${API_URL}${url}`));
    },
    post(url, data) {
        return wrap(superagent.post(`${API_URL}${url}`));
    },
    delete(url) {
        return wrap(superagent.delete(`${API_URL}${url}`));
    }
};