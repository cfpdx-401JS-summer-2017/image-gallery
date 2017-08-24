import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import EmojiList from '../views/list';
import EmojiThumbnail from '../views/thumbnail';
import EmojiGallery from '../views/gallery';

describe('views components', () => {

    it('renders the LIST view  without crashing', () => {
        const testEmojis = [];
        const div = document.createElement('div');
        ReactDOM.render(<EmojiList emojis={testEmojis}/>, div);
    });

    it('renders the THUMBNAIL view  without crashing', () => {
        const testEmojis = [];
        const div = document.createElement('div');
        ReactDOM.render(<EmojiThumbnail emojis={testEmojis}/>, div);
    });

    it('renders the GALLERY view  without crashing', () => {
        const testEmojis = [];
        const testEmojiIndex = 1;
        const div = document.createElement('div');
        ReactDOM.render(<EmojiGallery emojis={testEmojis} emojiIndex={testEmojiIndex} />, div);
    });

});
