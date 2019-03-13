(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.prefetchImages = factory());
}(this, function () { 'use strict';

  const checkImage = (path) => new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve({ path, status: "ok" });
      img.onerror = () => reject({ path, status: "error" });
      img.src = path;
  });
  const prefetchImages = (urls) => Promise.all(urls.map(checkImage));

  return prefetchImages;

}));
