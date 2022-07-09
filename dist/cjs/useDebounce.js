"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var DEFAULT_TIMEOUT = 250;
var useDebounce = function (timeout) {
    if (timeout === void 0) { timeout = DEFAULT_TIMEOUT; }
    var timeoutRef = (0, react_1.useRef)(0);
    return (0, react_1.useCallback)(function (callback) {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(callback, timeout);
    }, [timeoutRef, timeout]);
};
exports.default = useDebounce;
//# sourceMappingURL=useDebounce.js.map