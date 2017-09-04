require('dotenv').config();
const apiURL = process.env.REACT_APP_API_URL;
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
    const savedImage = await superagent.post(`${apiURL}/images`).send(photo);
    postResponses.push(savedImage.text);
    return postResponses;
  });
  return postResponses;
};

// export buildImageArray( async (req, res, next) => {
//   await connect();
//   const image = new Image(req.body);
//   const response = await image.save(image);
//   res.send(response);
// })

export function AddNewImage(title, desc, url, hondas) {
//   //   const newImage = { title: title, description: desc, url: url };
//   //   return hondas.push(newImage);
}

// export function DefaultImages(hondas, selectedIndex) {}

export function DeleteImage(hondas, selectedIndex) {
//   // const index = hondas.indexOf(hondas[selectedIndex]);
//   // if (index === -1) return hondas;
//   // return [...hondas.slice(0, index), ...hondas.slice(index + 1)];
}
