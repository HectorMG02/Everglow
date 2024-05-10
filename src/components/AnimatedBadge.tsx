import React, { useState } from "react";
import { motion } from "framer-motion";

const animations = {
  scale: { scale: [1, 1.2, 1] },
  rotate: { rotate: 360 },
  bounce: { y: [-5, 0, -5, 0], ease: "easeInOut" },
  shake: { x: [0, -10, 10, -10, 10, 0] },
  fadeIn: { opacity: 1, scale: [0.8, 1] },
  fadeOut: { opacity: [0.001, 1] },
  pulse: { scale: [1, 1.1, 1] },
};

const AnimatedBadge = ({ children }: any) => {
  const [isActive, setIsActive] = useState(false);

  const animations: { [key: string]: any } = {
    scale: { scale: [1, 1.2, 1] },
    rotate: { rotate: 360 },
    bounce: { y: [-5, 0, -5, 0], ease: "easeInOut" },
    shake: { x: [0, -10, 10, -10, 10, 0] },
    fadeOut: { opacity: [0.001, 1] },
    pulse: { scale: [1, 1.1, 1] },
  };

  const handleAnimation = () => {
    const randomAnimation =
      Object.keys(animations)[
        Math.floor(Math.random() * Object.keys(animations).length)
      ];
    const animation = animations[randomAnimation] || animations.pulse;

    return {
      ...animation,
      transition: {
        duration: 0.5,
        yoyo: 1,
        ease: "easeInOut",
      },
    };
  };

  return (
    <motion.div
      initial={false}
      animate={handleAnimation()}
      onClick={() => setIsActive(!isActive)}
      className="cursor-pointer m-2"
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "10%",
        backgroundColor: "#eee9f2",
        fontSize: "0.95rem",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBadge;
