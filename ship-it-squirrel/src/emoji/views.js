import React from 'react';

export function DetailView() {
  return <div>this is the detail view</div>;
}

export function ThumbnailView() {
  return <div>this is the thumbnail view</div>;
}

export function GalleryView() {
  return <div>this is the gallery view</div>;
}

export function Options({ onClick }) {
  return (
    <form>
      <label>
        details 
        <input type="radio" name="view-picker" value="details" onClick={() => onClick("details")} />
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
