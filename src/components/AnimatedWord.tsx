import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedWord = ({ words }: { words: string[] }) => {
    const [index, setIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsExiting(true);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsExiting(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [words]);

    const wordVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.25 } }
    };


    const maxWidth = Math.max(...words.map(word => word.length));

    return (
        <div style={{ width: `${maxWidth * 0.9}ch`, display: 'inline-block' }}>
            <AnimatePresence>
                {!isExiting && (
                    <motion.span
                        key={index}
                        variants={wordVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500"
                        style={{ display: 'inline-block', width: '100%' }}
                    >
                        {words[index]}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedWord;
