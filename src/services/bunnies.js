let id = 0;
const wrapper = cmd => cmd
    .then(res => res.body,
        ({response}) => {
            throw response.body.error;
        });

export function fetchBunnies() {
    return fetch('/api/bunnies/')
        .then(res => res.json());


}
export function bootstrapBunnies() {
    return [
        { 
            id: ++id, 
            title: 'Cute Bunny',
            description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
            url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
        },
        {
            id: ++id, 
            title: 'Silly Bunny',
            description: 'Isn\'t it just the cutest widdle guy?',
            url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
        },
        {
            id: ++id, 
            title: 'Fluffy Bunny',
            description: 'Simply adorable',
            url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
        }
    ];
}

export function plusBunny(bunnies, title, description, url) {
    const bunny = {title, description, url};
    return [
        ...bunnies,
        bunny
    ];
}

export function minusBunny(bunnies, bunny) {
    const index = bunnies.indexOf(bunny);
    if(index === -1) return bunnies;
    return [
        ...bunnies.slice(0,index),
        ...bunnies.slice(index+1)
    ];
}