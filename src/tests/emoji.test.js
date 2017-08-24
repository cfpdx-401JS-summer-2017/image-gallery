import { createEmoji, deleteEmoji } from '../services/emoji';

// import { addTodo, bootstrap } from '../todos';

// describe('todo actions', () => {
//     it('updates list', () => {
//         const list = bootstrap();
//         const newList = addTodo(list, 'three');
        
//         expect(newList).not.toBe(list);
//         expect(newList.length).toBe(3);
//         expect(newList[0]).toBe(list[0]);
//         expect(newList[1]).toBe(list[1]);
//         const newTodo = newList[2];
//         expect(newTodo.title).toEqual('three');
//         expect(newTodo.complete).toBeFalsy();
//     });
// });

describe('emoji services', () => {
  
  it('creates a new emoji and adds it to the list', () => {
    const newEmoji = {
      title: 'grinning face',
      description: 'yellow smiley',
      url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/grinning-face_1f600.png',
    }

    const emojis = createEmoji(newEmoji);

    expect(emojis[8].title).toEqual(newEmoji.title);

  });

});

