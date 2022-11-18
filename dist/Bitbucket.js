var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
var SvgBitbucket = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128" }, props),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "bitbucket_svg__a", x1: 28.593, x2: 16.672, y1: 14.226, y2: 23.532, gradientTransform: "scale(4)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0.176, stopColor: "#0052cc" }),
            React.createElement("stop", { offset: 1, stopColor: "#2684ff" }))),
    React.createElement("path", { fill: "#2684ff", d: "M19.082 20c-1.918 0-3.355 1.758-3.039 3.516l12.95 79.289c.32 2.078 2.077 3.515 4.155 3.515h62.66c1.442 0 2.72-1.12 3.04-2.558l13.109-80.086c.316-1.918-1.121-3.516-3.039-3.516zM74.07 77.227H54.09l-5.278-28.293h30.215zm0 0" }),
    React.createElement("path", { fill: "url(#bitbucket_svg__a)", d: "M107.64 48.934H78.868L74.07 77.227H54.09l-23.5 27.972s1.12.961 2.719.961h62.66c1.441 0 2.719-1.12 3.039-2.558zm0 0" }))); };
export default SvgBitbucket;
