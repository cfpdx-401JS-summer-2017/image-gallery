import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import Detail from './Detail';
import ChooseView from '../ChooseView';
import AddImage from '../AddImage';

View.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteImage: PropTypes.func,
  onChangeView: PropTypes.func,
  view: PropTypes.string
};

export default function View({
  hondas,
  deleteImage,
  onChangeView,
  view
}) {
  const currentView = view || 'gallery';

  const View =
    currentView === 'list' ? List : currentView === 'gallery' ? Gallery : currentView === 'detail' ? Detail : Thumb;

  return (
    <div>
      <div className="functionsHeader">
        <ChooseView
          view={currentView}
          onChangeView={target => onChangeView(target)}
        />
        <AddImage hondas={hondas}/>
      </div>
      <div>
        <View
          hondas={hondas}
          deleteImage={target => deleteImage( target )}
        />
      </div>
    </div>
  );
}
