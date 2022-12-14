import { useRef, useEffect } from "react";

const useOutsideClick = (callback: () => void) => {
    const ref = useRef();

    // useEffect(() => {
    //     /**
    //      * Alert if clicked on outside of element
    //      */
    //     function handleClickOutside(event: React.MouseEvent) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             alert("You clicked outside of me!");
    //         }
    //     }
    //     // Bind the event listener
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [ref]);

    return ref;
};
