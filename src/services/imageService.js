require('dotenv').config();
const superagent = require('superagent');
const apiURL = process.env.apiURL;
const photos = require('./imageurls.json');

//use superagent!
export const populateDB = async () => {
  let postResponses = [];
  console.log(1, photos)
  const newPhoto = await photos.map(async photo => {
    photo = ({
      title: `${photo.title}`,
      url: `https://www.flickr.com/photos/${photo.owner}/${photo.id}`,
      alt: 'alt text',
      description: 'description'
    });
    console.log(newPhoto);
    const savedImage = await superagent.post(`${apiURL}/images`).send(photo);
    postResponses.push(savedImage);
  });
  console.log('populateDB: ', postResponses);
};

// export buildImageArray( async (req, res, next) => {
//   await connect();
//   const image = new Image(req.body);
//   const response = await image.save(image);
//   res.send(response);
// })

export function AddNewImage(title, desc, url, hondas) {
  //   // console.log('in AddImage: ', title, desc, url, hondas);
  //   const newImage = { title: title, description: desc, url: url };
  //   return hondas.push(newImage);
}

export function DefaultImages(hondas, selectedIndex) {}

export function DeleteImage(hondas, selectedIndex) {
  // console.log('in Delete: ', hondas[1], selectedIndex);
  // const index = hondas.indexOf(hondas[selectedIndex]);
  // console.log(index, selectedIndex);
  // if (index === -1) return hondas;
  // return [...hondas.slice(0, index), ...hondas.slice(index + 1)];
}
