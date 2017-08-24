
import React from 'react';

export function addImage(images, title, url, description) {
    const image = { id: ++id, title, url, description}
    return [
      ...images,
      image
    ]
  }

  export function removeImages(images, image) {
    const index = images.indexOf(image);
    if (index === -1) return images;
  
    return [
      ...images.slice(0, index),
      ...images.slice(index + 1)
    ]
  }

  
  
  export default function AddTodo({ onAdd }) {
      console.log('render of AddTodo')
      return (
          <section>
              <h4>Add a new todo</h4>
              <form onSubmit={event => {
                  event.preventDefault();
                  const form = event.target;
                  const { title } = form.elements;
                  onAdd(title.value);
                  form.reset();
              }}>
                  <input name="title"/>
                  <button type="submit">Add</button>
              </form>
          </section>
      );
  }