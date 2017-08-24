import nextId from './nextId';

export function createEmoji(emojis, title, description, url) {
  const newEmoji = { id: nextId(), title, description, url };
  
  return [...emojis, newEmoji];
}

export function deleteEmoji(emojis, id) {
  if (id <= 0) return emojis;
  
  let index = emojis.findIndex(emoji => emoji.id == id);  //why doesn't === work?
  const beforeIndexArray = [...emojis.slice(0, index)];
  const afterIndexArray = [...emojis.slice(++index)];

  return beforeIndexArray.concat(afterIndexArray);
}
