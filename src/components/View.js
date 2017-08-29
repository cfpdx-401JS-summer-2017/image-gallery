import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import ChooseView from './ChooseView';
import AddImage from './AddImage';
import qs from 'qs';

View.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteImage: PropTypes.func,
  onChangeView: PropTypes.func,
  match: PropTypes.object,
  view: PropTypes.string,
  props: PropTypes.object,
  onSubmitImage: PropTypes.func
};

export default function View({
  hondas,
  deleteImage,
  match,
  onChangeView,
  view
}) {
  console.log('view: ', view, match);
  const currentView =
    qs.parse(match.location.search.slice(1)).view || 'gallery';
  // const currentView =
  //   this.props.match.location.search.substr(1) || 'gallery';

  const View =
    currentView === 'list' ? List : currentView === 'gallery' ? Gallery : Thumb;

  return (
    <div>
      <div className="functionsHeader">
        <ChooseView
          view={currentView}
          onChangeView={target => onChangeView(target)}
        />
        <AddImage />
      </div>
      <div>
        <View
          hondas={hondas}
          deleteImage={target => deleteImage({ target })}
        />
      </div>
    </div>
  );
}
