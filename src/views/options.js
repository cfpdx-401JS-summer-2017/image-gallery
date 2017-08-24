import React from 'react';

export default function ViewOptions({ checked, onClick }) {

  return (
    <div>
      <button onClick={() => onClick("list")}>list</button>
      <button onClick={() => onClick("thumbnail")}>thumbnail</button>
      <button onClick={() => onClick("gallery")}>gallery</button>
    </div>
  );
}
