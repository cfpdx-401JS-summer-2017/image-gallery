
export function addImage(images, img) {
    let title = img.title;
    let description = img.description;
    let url = img.url;

    const image = { id: ++id, title, url, description }
    return [
        ...images,
        image
    ]
}

export function removeImage(images, image) {
    const index = images.indexOf(image);
    if (index === -1) return images;

    return [
        ...images.slice(0, index),
        ...images.slice(index + 1)
    ]
}

let id = 0;


export const images = [
    { id: ++id, title: 'cute bunny', description: 'very cute bunny', url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
    { id: ++id, title: 'another cute bunny', description: 'very, very cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
    { id: ++id, title: 'fairly cute bunny', description: 'pretty much a cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' },
    { id: ++id, title: 'ugly bunny', description: 'the ugliest bunny you\'ve ever seen', url: 'https://s-media-cache-ak0.pinimg.com/736x/5c/40/1f/5c401f8c1d1075cc5b49db6cda84700b--kungfu-baby-wombat.jpg' },
];

