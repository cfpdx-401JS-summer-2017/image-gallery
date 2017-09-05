import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import ChooseView from './ChooseView';
import AddImage from '../images/AddImage';

View.propTypes = {
  imageArray: PropTypes.array,
  deleteImage: PropTypes.func,
  onChangeView: PropTypes.func,
  view: PropTypes.string
};

export default function View({ imageArray, deleteImage, onChangeView, view, imagesFromParent }) {
  const currentView = view || 'gallery';
  const View =
    currentView === 'list' ? List : currentView === 'gallery' ? Gallery : Thumb;

    return (
    <div>
      <div className="functionsHeader">
        <ChooseView
          view={currentView}
          onChangeView={target => onChangeView(target)}
          imagesFromParent={imagesFromParent}
        />
        <AddImage imageArray={imageArray} />
      </div>
      <div>
        <View imagesFromParent={imagesFromParent} view={currentView} deleteImage={target => deleteImage(target)} />
      </div>
    </div>
  );
}
