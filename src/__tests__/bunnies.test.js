import { bunnyBuild, plusBunny, minusBunny } from '../services/bunnies';

describe('bunny services tests', () => {
    it('bootstraps bunny data', () => {
        const bunnyList = bunnyBuild();
        
        expect(bunnyList.length).toBe(4);
    });

    it('adds a bunny', () => {
        const bunnyList = bunnyBuild();
        const newBun = {
            title: 'test',
            description: 'test!',
            url: 'testurl'
        };
        const newList = plusBunny(bunnyList, newBun.title, newBun.description, newBun.url);
        expect(newList.length).toBe(5);
        const testBun = newList[4];
        expect(testBun).toEqual(newBun);
        expect(newList).not.toBe(bunnyList);
        expect(testBun.description).toBe('test!');
    });

    it('removes a bunny', () => {
        const bunnyList = bunnyBuild();
        const bunnyToRemove = bunnyList[1];
        const newList = minusBunny(bunnyList, bunnyToRemove);

        expect(newList.length).toBe(3);
        expect(newList.indexOf(bunnyToRemove)).toBe(-1);
        expect(newList).not.toBe(bunnyList);
        })
})