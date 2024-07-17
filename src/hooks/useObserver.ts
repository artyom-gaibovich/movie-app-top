import {MutableRefObject, useEffect, useRef} from "react";

export const useObserver = (ref: IntersectionObserver, canLoad: boolean, isLoading: boolean, callback: Function) => {
    const observer = useRef()

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb: IntersectionObserverCallback = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()

            }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading]);
}