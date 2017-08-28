import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import EmojiList from '../components/images/views/list';
import EmojiThumbnail from '../components/images/views/thumbnail';
import EmojiGallery from '../components/images/views/gallery';

describe('views components', () => {

    const testEmojis = [
        {
          id: 1,
          title: 'syringe',
          description: 'nurses poke you with it',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/syringe_1f489.png'
        },{
          id: 2,
          title: 'sushi',
          description: 'super yummy!',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/sushi_1f363.png',
        },{
          id: 3,
          title: 'pile of poo',
          description: 'what I look like doing snapshot testing',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/pile-of-poo_1f4a9.png',
        }
    ];

    describe('list', () => {

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<EmojiList emojis={testEmojis}/>, div);
        });
    
        it('renders a snapshot', () => {
            const tree = renderer.create(<EmojiList emojis={testEmojis}/>).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });

    describe('thumbnail', () => {
        
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<EmojiThumbnail emojis={testEmojis}/>, div);
        });

        it('renders a snapshot', () => {
            const tree = renderer.create(<EmojiThumbnail emojis={testEmojis}/>).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });

    describe('gallery', () => {

        it('renders without crashing', () => {
            const testEmojiIndex = 1;
            const div = document.createElement('div');
            ReactDOM.render(<EmojiGallery emojis={testEmojis} emojiIndex={testEmojiIndex} />, div);
        });

        it('renders a snapshot', () => {
            const tree = renderer.create(<EmojiGallery emojis={testEmojis}/>).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });

});
