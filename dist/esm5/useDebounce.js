import { useCallback, useRef } from 'react';
var DEFAULT_TIMEOUT = 250;
var useDebounce = function (timeout) {
    if (timeout === void 0) { timeout = DEFAULT_TIMEOUT; }
    var timeoutRef = useRef(0);
    return useCallback(function (callback) {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(callback, timeout);
    }, [timeoutRef, timeout]);
};
export default useDebounce;
//# sourceMappingURL=useDebounce.js.map