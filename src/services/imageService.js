export function DefaultImages(hondas) {
  console.log('in default: ', hondas, hondas.length);
  if (hondas.length < 2) {
    hondas = [
      {
        title: 'CB450 1986',
        description: 'My first motorcycle. I still regret selling it.',
        url: './images/01-honda-CB450-1986.jpg',
        alt: 'honda!'
      },
      {
        title: 'CB750 2000',
        description: 'This is my current bike. I was out riding around and turned to sharply too slowly and dropped it in someone\'s driveway. On a side street on a weekday afternoon in the suburbs. I waited for about 45 minutes for someone to come along and help me pick it up. On the plus side I got to learn how to replace a clutch lever after this broke mine off.',
        url: './images/09-honda-CB750-2000.jpg',
        alt: 'honda!'
      }
    ];
  }
}

export function AddNewImage(hondas, imageName) {
  console.log('in AddImage: ', hondas, imageName);
  // add an image from the directory that a user has chosen from a select menu
}

export function DeleteImage(hondas, selectedIndex) {
  console.log('in Delete: ', hondas, selectedIndex);
  const index = hondas.indexOf(selectedIndex);
  if (index === -1) return hondas;

  return [...hondas.slice(0, index), ...hondas.slice(index + 1)];
}
