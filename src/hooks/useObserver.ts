/*
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

*/

import { MutableRefObject, useEffect, useRef } from "react";

export const useObserver = (
    ref: MutableRefObject<Element | null>,
    canLoad: boolean,
    isLoading: boolean | string | undefined | (() => Promise<void>),
    callback: () => void
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading) return;

        const cb: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && canLoad) {
                    callback();
                }
            });
        };

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(cb);

        if (ref.current) {
            observer.current.observe(ref.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [isLoading, canLoad, ref, callback]);
};
