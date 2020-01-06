window.onload = function () {

  'use strict';

  var Viewer = window.Viewer;
  var console = window.console || { log: function () {} };
  var pictures = document.querySelector('.image_viewer');
  var options = {
        // inline: true,
        url: 'data-original',
        ready:  function (e) {
          console.log(e.type);
        },
        show:  function (e) {
          console.log(e.type);
        },
        shown:  function (e) {
          console.log(e.type);
        },
        hide:  function (e) {
          console.log(e.type);
        },
        hidden:  function (e) {
          console.log(e.type);
        },
        view:  function (e) {
          console.log(e.type);
        },
        viewed:  function (e) {
          console.log(e.type);
          // this.viewer.zoomTo(1).rotateTo(180);
        }
      };
  var viewer;
  viewer = new Viewer(pictures, options);

  if (viewer) {    
    options['inline'] = false;
    viewer.destroy();
    viewer = new Viewer(pictures, options);
  }
};
