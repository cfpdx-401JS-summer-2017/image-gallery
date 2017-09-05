require('dotenv').config();
const superagent = require('superagent');
const photos = require('./imageurls.json');

export const populateDB = async () => {
  let postResponses = [];
  await photos.map(async photo => {
    photo = {
      title: `${photo.title}`,
      url: `https://www.flickr.com/photos/${photo.owner}/${photo.id}`,
      alt: 'alt text',
      description: 'description'
    };
    const savedImage = await superagent.post('/api/images').send(photo);
    postResponses.push(savedImage.text);
    return postResponses;
  });
  return postResponses;
};

export const AddNewImage = async (newPhoto) => {
  const savedImage = await superagent.post(`/api/images`).send(newPhoto);
  return savedImage;
}


export function DeleteImage(hondas, selectedIndex) {
//   // const index = hondas.indexOf(hondas[selectedIndex]);
//   // if (index === -1) return hondas;
//   // return [...hondas.slice(0, index), ...hondas.slice(index + 1)];
}
