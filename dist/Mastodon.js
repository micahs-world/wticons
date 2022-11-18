function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgMastodon = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlSpace: "preserve",
  style: {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  },
  viewBox: "0 0 65 65"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M62.754 14.39C61.814 7.406 55.727 1.903 48.512.836 47.294.656 42.682 0 31.997 0h-.08C21.23 0 18.938.656 17.72.836 10.705 1.873 4.299 6.82 2.745 13.886c-.748 3.48-.828 7.338-.689 10.877.198 5.075.237 10.142.697 15.197a71.52 71.52 0 0 0 1.664 9.968c1.477 6.056 7.458 11.096 13.317 13.152a35.723 35.723 0 0 0 19.484 1.028 28.522 28.522 0 0 0 2.107-.576c1.572-.5 3.413-1.057 4.766-2.038a.156.156 0 0 0 .062-.118v-4.899a.146.146 0 0 0-.177-.139 54.006 54.006 0 0 1-12.644 1.478c-7.328 0-9.298-3.478-9.863-4.925a15.238 15.238 0 0 1-.857-3.882v-.008a.143.143 0 0 1 .178-.137 53.01 53.01 0 0 0 12.437 1.477c1.007 0 2.012 0 3.02-.026 4.213-.119 8.654-.334 12.8-1.144.103-.02.206-.038.295-.065 6.539-1.255 12.762-5.196 13.394-15.176.024-.393.083-4.115.083-4.523.003-1.386.446-9.829-.065-15.017Z",
  style: {
    fill: "url(#mastodon_svg__a)",
    fillRule: "nonzero"
  }
}), /*#__PURE__*/React.createElement("path", {
  d: "M52.394 22.237v17.35H45.52V22.749c0-3.545-1.478-5.353-4.483-5.353-3.303 0-4.958 2.139-4.958 6.364v9.217h-6.835V23.76c0-4.225-1.657-6.364-4.96-6.364-2.988 0-4.48 1.808-4.48 5.353v16.84H12.93V22.237c0-3.545.905-6.362 2.715-8.45 1.868-2.082 4.317-3.152 7.358-3.152 3.519 0 6.178 1.354 7.951 4.057l1.711 2.871 1.714-2.871c1.773-2.704 4.432-4.056 7.945-4.056 3.038 0 5.487 1.069 7.36 3.152 1.81 2.085 2.712 4.902 2.71 8.449Z",
  style: {
    fill: "#fff",
    fillRule: "nonzero"
  }
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "mastodon_svg__a",
  x1: 0,
  x2: 1,
  y1: 0,
  y2: 0,
  gradientTransform: "matrix(0 65 -65 0 32.5 0)",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  offset: 0,
  style: {
    stopColor: "#6364ff",
    stopOpacity: 1
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: 1,
  style: {
    stopColor: "#563acc",
    stopOpacity: 1
  }
}))));
export default SvgMastodon;