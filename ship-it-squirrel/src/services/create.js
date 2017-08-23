import React from 'react';

export default function CreateEmoji({ handleOnSubmit }) {

  return (
    <div>
      <h2>Add a new emoji-wiki!</h2>
      <form onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { title, description, url } = form.elements;
          handleOnSubmit(title.value, description.value, url.value);
          form.reset();
      }}>
        <input type="text" name="title" placeholder="emoji name" required />
        <br/>
        <textarea rows="4" cols="50" name="description" placeholder="wikipedia description" required />
        <br/>
        <input type="url" name="url" placeholder="emojipedia url" required />
        <br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );

}
