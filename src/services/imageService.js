
export function DefaultImages(hondas) {
  console.log('in default: ',hondas)


}

export function AddNewImage(hondas, imageName) {
  console.log('in AddImage: ', hondas, imageName)
  // add an image from the directory that a user has chosen from a select menu

}

export function DeleteImage(hondas, selectedIndex) {
  console.log('in Delete: ', hondas, selectedIndex)
  const index = hondas.indexOf(selectedIndex);
  if (index === -1) return hondas;

  return [
    ...hondas.slice(0, index),
    ...hondas.slice(index+1)
  ]
}