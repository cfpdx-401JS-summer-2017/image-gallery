import React from 'react';

export default function AddImage({ onAdd }) {
    return (
        <section>
            <h4>Add a new image</h4>
            <form onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { title, url, description } = form.elements;
                onAdd(title.value,description.value, url.value);
                form.reset();
            }}>
                <label> Title<input name="title"/></label>
                <label> description<input name="description"/></label>
                <label> url<input name="url"/></label>
                <button type="submit">Add</button>
            </form>
        </section>
    );
}