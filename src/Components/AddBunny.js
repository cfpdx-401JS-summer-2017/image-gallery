import React from 'react';

export default function AddBunny({ onAdd }) {
    return (
        <div>
            <h2>Add a new bunny</h2>
            <form onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { title, description, url } = form.elements;
                onAdd(title.value, description.value, url.value);
                form.reset();
            }}>
                <label htmlFor="title">Title:</label>
                <input id="title" name="title" required /> 
                <label htmlFor="description">Description:</label>
                <input id="description" name="description" required /> 
                <label htmlFor="url">url:</label>
                <input id="url" name="url" required /> 
                <button type="submit">Add Bunny</button>
            </form>
        </div>
    );
}