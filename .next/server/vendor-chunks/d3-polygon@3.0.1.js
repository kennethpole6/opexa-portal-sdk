"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-polygon@3.0.1";
exports.ids = ["vendor-chunks/d3-polygon@3.0.1"];
exports.modules = {

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/area.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/area.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(polygon) {\n  var i = -1,\n      n = polygon.length,\n      a,\n      b = polygon[n - 1],\n      area = 0;\n\n  while (++i < n) {\n    a = b;\n    b = polygon[i];\n    area += a[1] * b[0] - a[0] * b[1];\n  }\n\n  return area / 2;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvYXJlYS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvYXJlYS5qcz80ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvbHlnb24pIHtcbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBwb2x5Z29uLmxlbmd0aCxcbiAgICAgIGEsXG4gICAgICBiID0gcG9seWdvbltuIC0gMV0sXG4gICAgICBhcmVhID0gMDtcblxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIGEgPSBiO1xuICAgIGIgPSBwb2x5Z29uW2ldO1xuICAgIGFyZWEgKz0gYVsxXSAqIGJbMF0gLSBhWzBdICogYlsxXTtcbiAgfVxuXG4gIHJldHVybiBhcmVhIC8gMjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/area.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/centroid.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/centroid.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(polygon) {\n  var i = -1,\n      n = polygon.length,\n      x = 0,\n      y = 0,\n      a,\n      b = polygon[n - 1],\n      c,\n      k = 0;\n\n  while (++i < n) {\n    a = b;\n    b = polygon[i];\n    k += c = a[0] * b[1] - b[0] * a[1];\n    x += (a[0] + b[0]) * c;\n    y += (a[1] + b[1]) * c;\n  }\n\n  return k *= 3, [x / k, y / k];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvY2VudHJvaWQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1wb2x5Z29uQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1wb2x5Z29uL3NyYy9jZW50cm9pZC5qcz9lOWUzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvbHlnb24pIHtcbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBwb2x5Z29uLmxlbmd0aCxcbiAgICAgIHggPSAwLFxuICAgICAgeSA9IDAsXG4gICAgICBhLFxuICAgICAgYiA9IHBvbHlnb25bbiAtIDFdLFxuICAgICAgYyxcbiAgICAgIGsgPSAwO1xuXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgYSA9IGI7XG4gICAgYiA9IHBvbHlnb25baV07XG4gICAgayArPSBjID0gYVswXSAqIGJbMV0gLSBiWzBdICogYVsxXTtcbiAgICB4ICs9IChhWzBdICsgYlswXSkgKiBjO1xuICAgIHkgKz0gKGFbMV0gKyBiWzFdKSAqIGM7XG4gIH1cblxuICByZXR1cm4gayAqPSAzLCBbeCAvIGssIHkgLyBrXTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/centroid.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/contains.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/contains.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(polygon, point) {\n  var n = polygon.length,\n      p = polygon[n - 1],\n      x = point[0], y = point[1],\n      x0 = p[0], y0 = p[1],\n      x1, y1,\n      inside = false;\n\n  for (var i = 0; i < n; ++i) {\n    p = polygon[i], x1 = p[0], y1 = p[1];\n    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;\n    x0 = x1, y0 = y1;\n  }\n\n  return inside;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvY29udGFpbnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXBvbHlnb25AMy4wLjEvbm9kZV9tb2R1bGVzL2QzLXBvbHlnb24vc3JjL2NvbnRhaW5zLmpzP2Y1MTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocG9seWdvbiwgcG9pbnQpIHtcbiAgdmFyIG4gPSBwb2x5Z29uLmxlbmd0aCxcbiAgICAgIHAgPSBwb2x5Z29uW24gLSAxXSxcbiAgICAgIHggPSBwb2ludFswXSwgeSA9IHBvaW50WzFdLFxuICAgICAgeDAgPSBwWzBdLCB5MCA9IHBbMV0sXG4gICAgICB4MSwgeTEsXG4gICAgICBpbnNpZGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkge1xuICAgIHAgPSBwb2x5Z29uW2ldLCB4MSA9IHBbMF0sIHkxID0gcFsxXTtcbiAgICBpZiAoKCh5MSA+IHkpICE9PSAoeTAgPiB5KSkgJiYgKHggPCAoeDAgLSB4MSkgKiAoeSAtIHkxKSAvICh5MCAtIHkxKSArIHgxKSkgaW5zaWRlID0gIWluc2lkZTtcbiAgICB4MCA9IHgxLCB5MCA9IHkxO1xuICB9XG5cbiAgcmV0dXJuIGluc2lkZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/contains.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/cross.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/cross.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of\n// the 3D cross product in a quadrant I Cartesian coordinate system (+x is\n// right, +y is up). Returns a positive value if ABC is counter-clockwise,\n// negative if clockwise, and zero if the points are collinear.\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c) {\n  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvY3Jvc3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQWUsb0NBQVM7QUFDeEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1wb2x5Z29uQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1wb2x5Z29uL3NyYy9jcm9zcy5qcz81YzZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJldHVybnMgdGhlIDJEIGNyb3NzIHByb2R1Y3Qgb2YgQUIgYW5kIEFDIHZlY3RvcnMsIGkuZS4sIHRoZSB6LWNvbXBvbmVudCBvZlxuLy8gdGhlIDNEIGNyb3NzIHByb2R1Y3QgaW4gYSBxdWFkcmFudCBJIENhcnRlc2lhbiBjb29yZGluYXRlIHN5c3RlbSAoK3ggaXNcbi8vIHJpZ2h0LCAreSBpcyB1cCkuIFJldHVybnMgYSBwb3NpdGl2ZSB2YWx1ZSBpZiBBQkMgaXMgY291bnRlci1jbG9ja3dpc2UsXG4vLyBuZWdhdGl2ZSBpZiBjbG9ja3dpc2UsIGFuZCB6ZXJvIGlmIHRoZSBwb2ludHMgYXJlIGNvbGxpbmVhci5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMpIHtcbiAgcmV0dXJuIChiWzBdIC0gYVswXSkgKiAoY1sxXSAtIGFbMV0pIC0gKGJbMV0gLSBhWzFdKSAqIChjWzBdIC0gYVswXSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/cross.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/hull.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/hull.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cross.js */ \"./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/cross.js\");\n\n\nfunction lexicographicOrder(a, b) {\n  return a[0] - b[0] || a[1] - b[1];\n}\n\n// Computes the upper convex hull per the monotone chain algorithm.\n// Assumes points.length >= 3, is sorted by x, unique in y.\n// Returns an array of indices into points in left-to-right order.\nfunction computeUpperHullIndexes(points) {\n  const n = points.length,\n      indexes = [0, 1];\n  let size = 2, i;\n\n  for (i = 2; i < n; ++i) {\n    while (size > 1 && (0,_cross_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;\n    indexes[size++] = i;\n  }\n\n  return indexes.slice(0, size); // remove popped points\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(points) {\n  if ((n = points.length) < 3) return null;\n\n  var i,\n      n,\n      sortedPoints = new Array(n),\n      flippedPoints = new Array(n);\n\n  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];\n  sortedPoints.sort(lexicographicOrder);\n  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];\n\n  var upperIndexes = computeUpperHullIndexes(sortedPoints),\n      lowerIndexes = computeUpperHullIndexes(flippedPoints);\n\n  // Construct the hull polygon, removing possible duplicate endpoints.\n  var skipLeft = lowerIndexes[0] === upperIndexes[0],\n      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],\n      hull = [];\n\n  // Add upper hull in right-to-l order.\n  // Then add lower hull in left-to-right order.\n  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);\n  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);\n\n  return hull;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvaHVsbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsT0FBTztBQUNyQix1QkFBdUIscURBQUs7QUFDNUI7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7O0FBRUEsNkJBQWUsb0NBQVM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QyxzQkFBc0IscUNBQXFDOztBQUUzRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXBvbHlnb25AMy4wLjEvbm9kZV9tb2R1bGVzL2QzLXBvbHlnb24vc3JjL2h1bGwuanM/OGVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3Jvc3MgZnJvbSBcIi4vY3Jvc3MuanNcIjtcblxuZnVuY3Rpb24gbGV4aWNvZ3JhcGhpY09yZGVyKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gLSBiWzBdIHx8IGFbMV0gLSBiWzFdO1xufVxuXG4vLyBDb21wdXRlcyB0aGUgdXBwZXIgY29udmV4IGh1bGwgcGVyIHRoZSBtb25vdG9uZSBjaGFpbiBhbGdvcml0aG0uXG4vLyBBc3N1bWVzIHBvaW50cy5sZW5ndGggPj0gMywgaXMgc29ydGVkIGJ5IHgsIHVuaXF1ZSBpbiB5LlxuLy8gUmV0dXJucyBhbiBhcnJheSBvZiBpbmRpY2VzIGludG8gcG9pbnRzIGluIGxlZnQtdG8tcmlnaHQgb3JkZXIuXG5mdW5jdGlvbiBjb21wdXRlVXBwZXJIdWxsSW5kZXhlcyhwb2ludHMpIHtcbiAgY29uc3QgbiA9IHBvaW50cy5sZW5ndGgsXG4gICAgICBpbmRleGVzID0gWzAsIDFdO1xuICBsZXQgc2l6ZSA9IDIsIGk7XG5cbiAgZm9yIChpID0gMjsgaSA8IG47ICsraSkge1xuICAgIHdoaWxlIChzaXplID4gMSAmJiBjcm9zcyhwb2ludHNbaW5kZXhlc1tzaXplIC0gMl1dLCBwb2ludHNbaW5kZXhlc1tzaXplIC0gMV1dLCBwb2ludHNbaV0pIDw9IDApIC0tc2l6ZTtcbiAgICBpbmRleGVzW3NpemUrK10gPSBpO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4ZXMuc2xpY2UoMCwgc2l6ZSk7IC8vIHJlbW92ZSBwb3BwZWQgcG9pbnRzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvaW50cykge1xuICBpZiAoKG4gPSBwb2ludHMubGVuZ3RoKSA8IDMpIHJldHVybiBudWxsO1xuXG4gIHZhciBpLFxuICAgICAgbixcbiAgICAgIHNvcnRlZFBvaW50cyA9IG5ldyBBcnJheShuKSxcbiAgICAgIGZsaXBwZWRQb2ludHMgPSBuZXcgQXJyYXkobik7XG5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgc29ydGVkUG9pbnRzW2ldID0gWytwb2ludHNbaV1bMF0sICtwb2ludHNbaV1bMV0sIGldO1xuICBzb3J0ZWRQb2ludHMuc29ydChsZXhpY29ncmFwaGljT3JkZXIpO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBmbGlwcGVkUG9pbnRzW2ldID0gW3NvcnRlZFBvaW50c1tpXVswXSwgLXNvcnRlZFBvaW50c1tpXVsxXV07XG5cbiAgdmFyIHVwcGVySW5kZXhlcyA9IGNvbXB1dGVVcHBlckh1bGxJbmRleGVzKHNvcnRlZFBvaW50cyksXG4gICAgICBsb3dlckluZGV4ZXMgPSBjb21wdXRlVXBwZXJIdWxsSW5kZXhlcyhmbGlwcGVkUG9pbnRzKTtcblxuICAvLyBDb25zdHJ1Y3QgdGhlIGh1bGwgcG9seWdvbiwgcmVtb3ZpbmcgcG9zc2libGUgZHVwbGljYXRlIGVuZHBvaW50cy5cbiAgdmFyIHNraXBMZWZ0ID0gbG93ZXJJbmRleGVzWzBdID09PSB1cHBlckluZGV4ZXNbMF0sXG4gICAgICBza2lwUmlnaHQgPSBsb3dlckluZGV4ZXNbbG93ZXJJbmRleGVzLmxlbmd0aCAtIDFdID09PSB1cHBlckluZGV4ZXNbdXBwZXJJbmRleGVzLmxlbmd0aCAtIDFdLFxuICAgICAgaHVsbCA9IFtdO1xuXG4gIC8vIEFkZCB1cHBlciBodWxsIGluIHJpZ2h0LXRvLWwgb3JkZXIuXG4gIC8vIFRoZW4gYWRkIGxvd2VyIGh1bGwgaW4gbGVmdC10by1yaWdodCBvcmRlci5cbiAgZm9yIChpID0gdXBwZXJJbmRleGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSBodWxsLnB1c2gocG9pbnRzW3NvcnRlZFBvaW50c1t1cHBlckluZGV4ZXNbaV1dWzJdXSk7XG4gIGZvciAoaSA9ICtza2lwTGVmdDsgaSA8IGxvd2VySW5kZXhlcy5sZW5ndGggLSBza2lwUmlnaHQ7ICsraSkgaHVsbC5wdXNoKHBvaW50c1tzb3J0ZWRQb2ludHNbbG93ZXJJbmRleGVzW2ldXVsyXV0pO1xuXG4gIHJldHVybiBodWxsO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/hull.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   polygonArea: () => (/* reexport safe */ _area_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   polygonCentroid: () => (/* reexport safe */ _centroid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   polygonContains: () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   polygonHull: () => (/* reexport safe */ _hull_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   polygonLength: () => (/* reexport safe */ _length_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area.js */ \"./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/area.js\");\n/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./centroid.js */ \"./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/centroid.js\");\n/* harmony import */ var _hull_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hull.js */ \"./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/hull.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/contains.js\");\n/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./length.js */ \"./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/length.js\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNRO0FBQ1I7QUFDUTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXBvbHlnb25AMy4wLjEvbm9kZV9tb2R1bGVzL2QzLXBvbHlnb24vc3JjL2luZGV4LmpzPzNjM2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtkZWZhdWx0IGFzIHBvbHlnb25BcmVhfSBmcm9tIFwiLi9hcmVhLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcG9seWdvbkNlbnRyb2lkfSBmcm9tIFwiLi9jZW50cm9pZC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBvbHlnb25IdWxsfSBmcm9tIFwiLi9odWxsLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcG9seWdvbkNvbnRhaW5zfSBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBvbHlnb25MZW5ndGh9IGZyb20gXCIuL2xlbmd0aC5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/index.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/length.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/length.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(polygon) {\n  var i = -1,\n      n = polygon.length,\n      b = polygon[n - 1],\n      xa,\n      ya,\n      xb = b[0],\n      yb = b[1],\n      perimeter = 0;\n\n  while (++i < n) {\n    xa = xb;\n    ya = yb;\n    b = polygon[i];\n    xb = b[0];\n    yb = b[1];\n    xa -= xb;\n    ya -= yb;\n    perimeter += Math.hypot(xa, ya);\n  }\n\n  return perimeter;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvbGVuZ3RoLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtcG9seWdvbkAzLjAuMS9ub2RlX21vZHVsZXMvZDMtcG9seWdvbi9zcmMvbGVuZ3RoLmpzPzU4NWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocG9seWdvbikge1xuICB2YXIgaSA9IC0xLFxuICAgICAgbiA9IHBvbHlnb24ubGVuZ3RoLFxuICAgICAgYiA9IHBvbHlnb25bbiAtIDFdLFxuICAgICAgeGEsXG4gICAgICB5YSxcbiAgICAgIHhiID0gYlswXSxcbiAgICAgIHliID0gYlsxXSxcbiAgICAgIHBlcmltZXRlciA9IDA7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICB4YSA9IHhiO1xuICAgIHlhID0geWI7XG4gICAgYiA9IHBvbHlnb25baV07XG4gICAgeGIgPSBiWzBdO1xuICAgIHliID0gYlsxXTtcbiAgICB4YSAtPSB4YjtcbiAgICB5YSAtPSB5YjtcbiAgICBwZXJpbWV0ZXIgKz0gTWF0aC5oeXBvdCh4YSwgeWEpO1xuICB9XG5cbiAgcmV0dXJuIHBlcmltZXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-polygon@3.0.1/node_modules/d3-polygon/src/length.js\n");

/***/ })

};
;