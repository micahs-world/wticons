function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgProtractor = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlSpace: "preserve",
  style: {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  },
  viewBox: "0 0 128 128"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M86.1 47.5c8.2 8.5 8.7 18.8 8.7 21.2H33.7c0-2.1.5-13.5 9.8-22.3 8.5-8 18.5-8.3 20.8-8.3 2 0 13 .3 21.8 9.4ZM125.9 64c0 34.2-27.7 61.9-61.9 61.9S2 98.2 2 64 29.8 2 64 2s61.9 27.8 61.9 62Zm-15.2 16.3c.2-2.4.3-5.9 0-10v-.1h-8.9V67h8.6c-.7-8-2.6-19.9-11.3-30-.2-.3-.5-.5-.7-.8L91.6 43l-2.3-2.3 6.8-6.8C85 23.3 70.8 21.6 65.8 21.3v9.3h-3.2v-9.4c-4.9.2-19.1 1.8-30.5 12.9l6.5 6.5-2.2 2.4-6.5-6.5C20.7 46.8 18.6 59.1 17.8 67h8.3v3.2h-8.6v.4c-.3 4-.2 7.4 0 9.7h93.2Z",
  style: {
    fill: "#b7111d",
    fillRule: "nonzero"
  }
}));
export default SvgProtractor;