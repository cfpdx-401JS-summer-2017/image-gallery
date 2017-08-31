'use strict';
// forked from https://codepen.io/AriScott/pen/NGeRMR?editors=0010
var Images = React.createClass({
  displayName: 'Images',

  render: function render() {
    var self = this;
    var divStyle = {
      left: this.props.active * -100 + '%',
      width: 4 * 100 + '%'
    };
    var width = {
      width: 100 / this.props.items.length + '%'
    };
    return React.createElement(
      'div',
      { className: 'slider-wrapper' },
      React.createElement(
        'ul',
        { className: 'slides', style: divStyle },
        this.props.items.map(function (m, index) {
          if (self.props.useImages === 'true') {
            return React.createElement(
              'li',
              { style: width },
              React.createElement('img', { src: "images/" + m })
            );
          } else {
            return React.createElement(
              'li',
              { style: width },
              index
            );
          }
        })
      )
    );
  }
});

var Pagers = React.createClass({
  displayName: 'Pagers',

  updateSlide: function updateSlide(i) {
    this.props.callbackParent(i); // hey parent, I've changed!
  },
  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        { className: 'pagers' },
        this.props.items.map(function (m, index) {
          return React.createElement('li', { onClick: this.updateSlide.bind(this, index) });
        }, this)
      )
    );
  }
});

var Slider = React.createClass({
  displayName: 'Slider',

  getInitialState: function getInitialState() {
    return { active: 0 };
  },
  onPagerClicked: function onPagerClicked(newState) {
    this.setState({ active: newState });
  },
  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      { className: 'imgSlider' },
      React.createElement(Images, { items: this.props.slides, useImages: this.props.useImages, active: this.state.active }),
      React.createElement(Pagers, { items: this.props.slides, callbackParent: this.onPagerClicked })
    );
  }
});

React.render(React.createElement(Slider, { useImages: 'false', slides: ['image-1', 'image-2', 'image-3', 'image4'] }), document.getElementById('react-container'));