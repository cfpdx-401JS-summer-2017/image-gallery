// starter id
let id = 8;

export function createEmoji(emojis, title, description, url) {
  const newEmoji = { id: ++id, title, description, url };
  console.log('new emoji added', newEmoji);
  return [...emojis, newEmoji];
}

export function deleteEmoji(emojis, id) {
  if (id <= 0) return emojis;
  
  let index = emojis.findIndex(emoji => emoji.id == id);  //why doesn't === work?
  const beforeIndexArray = [...emojis.slice(0, index)];
  const afterIndexArray = [...emojis.slice(++index)];

  return beforeIndexArray.concat(afterIndexArray);
}