import { createEmoji, deleteEmoji } from '../services/emoji';

describe('emoji services', () => {

  const testEmojis = [
    {
      id: 1,
      title: 'person with ball',
      description: 'doing sports',
      url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/person-with-ball_26f9.png'
    },{
      id: 2,
      title: 'circus tent',
      description: 'the house i grew up in',
      url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/circus-tent_1f3aa.png',
    }
  ];
  
  it('creates a new emoji', () => {
    const title = 'grinning face';
    const description = 'yellow smiley';
    const url = 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/grinning-face_1f600.png';
    const newList = createEmoji(testEmojis, title, description, url);

    expect(newList).not.toBe(testEmojis);
    expect(newList.length).toBe(3);
    expect(newList[0]).toBe(testEmojis[0]);
    expect(newList[1]).toBe(testEmojis[1]);

    const saved = newList[2];
    // expect(saved.id).toEqual(3);
    expect(saved.title).toEqual(title);
    expect(saved.description).toEqual(description);
    expect(saved.url).toEqual(url);
  });

  

 });

