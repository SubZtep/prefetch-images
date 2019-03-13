'use strict';

const checkImage = (path) => new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve({ path, status: "ok" });
    img.onerror = () => reject({ path, status: "error" });
    img.src = path;
});
const prefetchImages = (urls) => Promise.all(urls.map(checkImage));

module.exports = prefetchImages;
