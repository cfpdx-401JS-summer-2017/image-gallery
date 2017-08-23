// import hondas from '../data/hondas';

export function DefaultImages(hondas, moto) {



}

export function AddImage(hondas, moto) {
  //paste a url?




}

export function DeleteImage(hondas, moto) {
  console.log('in Delete: ', hondas, moto)
  const index = hondas.indexOf(moto);
  if (index === -1) return hondas;

  return [
    ...hondas.slice(0, index),
    ...hondas.slice(index+1)
  ]
}