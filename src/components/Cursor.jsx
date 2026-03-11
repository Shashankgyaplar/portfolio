import { useEffect, useState } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
            document.addEventListener("mouseenter", mEnter);
            document.addEventListener("mouseleave", mLeave);
            document.addEventListener("mousedown", mDown);
            document.addEventListener("mouseup", mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
            document.removeEventListener("mouseenter", mEnter);
            document.removeEventListener("mouseleave", mLeave);
            document.removeEventListener("mousedown", mDown);
            document.removeEventListener("mouseup", mUp);
        };

        const mMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setHidden(false);
        };

        const mEnter = () => setHidden(false);
        const mLeave = () => setHidden(true);
        const mDown = () => setClicked(true);
        const mUp = () => setClicked(false);

        addEventListeners();
        handleLinkHoverEvents();

        return () => removeEventListeners();
    }, []);

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, button, input, .project__card, .project__link').forEach((el) => {
            el.addEventListener('mouseenter', () => setLinkHovered(true));
            el.addEventListener('mouseleave', () => setLinkHovered(false));
        });
    };

    // Re-bind hover events if DOM mutates
    useEffect(() => {
        const mutationObserver = new MutationObserver(() => {
            handleLinkHoverEvents();
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            mutationObserver.disconnect();
        }
    }, []);

    const cursorClasses = `custom-cursor 
        ${hidden ? 'c-hidden' : ''} 
        ${clicked ? 'c-clicked' : ''} 
        ${linkHovered ? 'c-hover' : ''}
    `;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </div>
    );
}
