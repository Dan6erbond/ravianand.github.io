import * as React from "react";
import {motion, useSpring, useTransform, useViewportScroll} from "framer-motion";

import "./MenuToggle.scss";

interface PathProps {
    d?: string;
    variants: any;
    transition?: any;
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="rgb(64, 153, 130)"
        strokeLinecap="round"
        {...props}
    />
);

interface MenuToggleProps {
    toggle: () => void;
}

export default function MenuToggle(props: MenuToggleProps) {
    const {scrollYProgress} = useViewportScroll();

    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    return (
        <button onClick={props.toggle} className="menu-toggle">
            <div>
                <svg className="progress-indicator" width="50" height="50" viewBox="0 0 50 50">
                    <motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="rgb(64, 153, 130)"
                        strokeDasharray="0 1"
                        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                        style={{
                            pathLength,
                            rotate: 90,
                            translateX: 5,
                            translateY: 5,
                            scaleX: -1
                        }}
                    />
                </svg>
                <svg className="menu-icon" width="23" height="23" viewBox="0 0 23 23">
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </div>
        </button>
    );
}
