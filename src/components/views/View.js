import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import ChooseView from './ChooseView';
import AddImage from '../images/AddImage';

View.propTypes = {
  images: PropTypes.array,
  deleteImage: PropTypes.func,
  onChangeView: PropTypes.func,
  addImage: PropTypes.func,
  view: PropTypes.string
};

export default function View({
  deleteImage,
  onChangeView,
  view,
  images,
  addImage
}) {
  const currentView = view || 'gallery';
  const View =
    currentView === 'list' ? List : currentView === 'gallery' ? Gallery : Thumb;

  return (
    <div>
      <div className="functionsHeader">
        <ChooseView
          view={currentView}
          onChangeView={target => onChangeView(target)}
        />
        <AddImage addImage={addImage} />
      </div>
      <div>
        <View
          images={images}
          deleteImage={target => deleteImage(target)}
        />
      </div>
    </div>
  );
}
