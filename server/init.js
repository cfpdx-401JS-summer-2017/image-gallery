const fs = require('fs');

const current = JSON.parse(fs.readFileSync('bunnies/bunnies.json'));
const bunnies = current.map(bunny => {
    let newBunny = {
        _id: bunny._id,
        title: bunny.title,
        description: bunny.description,
        url: bunny.url
    };
    return newBunny;
});

fs.writeFile('bunnies/BunnyData.json', JSON.stringify(bunnies));