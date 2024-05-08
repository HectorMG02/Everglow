import { useState, useEffect } from "react";

const AnimatedWord = ({ words }: { words: string[]}) => {
    const [word, setWord] = useState(words[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWord(prevWord => {
                const newIndex = (words.indexOf(prevWord) + 1) % words.length;
                return words[newIndex]; 
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <span
            id="word"
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500
                       transition-all duration-1500 ease-in-out
                       animate-pulse"
        >
            {word}
        </span>
    );
};

export default AnimatedWord;
