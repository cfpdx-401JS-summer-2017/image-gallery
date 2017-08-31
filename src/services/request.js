import superagent from 'superagent';

export const API_URL= '/api';

const wrapper = cmd => cmd
  .then(res => res.body,
    ({ response }) => {
      throw response.body.error;
    }
  )

export const request = {
  get(url) {
    return wrapper(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrapper(superagent.post(`${API_URL}${url}`).send(data));
  }
};
