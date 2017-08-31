import hondas from '../data/hondas';
require('dotenv').config()
const connect = require('../connect');
const req = require('./request');
const apiURL = process.env.apiURL;


export default async function populateDB() {
  await connect();
  let postResponses = [];
  hondas.map( async (honda) => {
    const savedImage = await req.post('/api/images').send(honda);
    postResponses.push(savedImage);
  })
  console.log('populateDB: ', postResponses);


};

// export buildImageArray( async (req, res, next) => {
//   await connect();
//   const image = new Image(req.body);
//   const response = await image.save(image);
//   res.send(response);
// })

// export function AddNewImage(title, desc, url, hondas) {
//   // console.log('in AddImage: ', title, desc, url, hondas);
//   const newImage = { title: title, description: desc, url: url };
//   return hondas.push(newImage);
// }

// export function DeleteImage(hondas, selectedIndex) {
//   // console.log('in Delete: ', hondas[1], selectedIndex);
//   const index = hondas.indexOf(hondas[selectedIndex]);
//   // console.log(index, selectedIndex);
//   if (index === -1) return hondas;
//   return [...hondas.slice(0, index), ...hondas.slice(index + 1)];
// }

