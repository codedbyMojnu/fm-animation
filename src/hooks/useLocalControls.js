import { useEffect, useState } from "react";

export const useLocalControls = (demo) => {
    const [controls, setControls] = useState(demo ? demo.defaultProps : {});

    useEffect(() => {
        if (demo) {
            setControls(demo.defaultProps);
        }
    }, [demo]);

    const handleControlChange = (name, value) => {
        setControls((prev) => ({ ...prev, [name]: value }));
    };

    return {
        controls,
        handleControlChange,
    };
};
