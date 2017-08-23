import React from 'react';

export default function ViewOptions({ onClick }) {

  return (
    <form>
      <label>
        list 
        <input type="radio" name="view-picker" value="list" default onClick={() => onClick("list")} />
      </label>
      <label>
        thumbnail 
        <input type="radio" name="view-picker" value="thumbnail" onClick={() => onClick("thumbnail")} />
      </label>
      <label>
        gallery 
        <input type="radio" name="view-picker" value="gallery" onClick={() => onClick("gallery")} />
      </label>
    </form>
  );
  
}
