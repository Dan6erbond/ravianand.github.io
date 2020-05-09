import {motion} from "framer-motion";
import React from "react";

import "./Banner.scss";
import {Link} from "react-router-dom";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-image"/>
                <div className="content-container">
                    <motion.div initial={{opacity: 0, translateY: "-20%"}}
                                animate={{opacity: 1, translateY: 0}}
                                transition={{duration: 0.5}}>
                        <h2 className="banner-title">RaviAnand Mohabir</h2>
                        <p className="banner-text">
                            An engineering student in Switzerland, experienced with Java, C# and
                            Python.
                        </p>
                        <a className="btn btn-outline-primary flat-button"
                           href="mailto:moravrav@gmail.com?subject=Hi!">
                            Message Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}