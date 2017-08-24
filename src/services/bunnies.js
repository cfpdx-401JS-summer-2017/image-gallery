export function bunnyBuild() {
    return [
        {
            title: 'Cute Bunny 1',
            description: 'Who\'s a cute bunny??',
            url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
        },  
        {
            title: 'Cute Bunny 2',
            description: 'Diabolically cute!!',
            url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
        },  
        {
            title: 'Cute Bunny 3',
            description: 'There are no bounds to the cuteness!',
            url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
        },
        {
            title: 'Cute Bunny 4',
            description: 'Hey, that\'s not a bunny!',
            url: 'https://i.pinimg.com/originals/52/79/ec/5279ec99c74876b17224e0e033224222.jpg'
        }
    ];
}

export function plusBunny(bunnies, title, description, url) {
    const bunny = { title, description, url };
    return [
        ...bunnies,
        bunny
    ];
}

export function minusBunny(bunnies, bunny) {
    const index = bunnies.indexOf(bunny);
    if (index === -1) return bunnies;
    console.log('in minusBunny', bunnies, bunny);
    return [
        ...bunnies.slice(0, index),
        ...bunnies.slice(index + 1)
    ];
}