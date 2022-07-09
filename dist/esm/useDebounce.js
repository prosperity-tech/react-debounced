import { useCallback, useRef } from 'react';
const DEFAULT_TIMEOUT = 250;
const useDebounce = (timeout = DEFAULT_TIMEOUT) => {
    const timeoutRef = useRef(0);
    return useCallback((callback) => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(callback, timeout);
    }, [timeoutRef, timeout]);
};
export default useDebounce;
//# sourceMappingURL=useDebounce.js.map