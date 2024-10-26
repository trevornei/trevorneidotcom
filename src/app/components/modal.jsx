// components/Modal.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef();
    const overlayRef = useRef();

    useEffect(() => {
        if (isOpen) {
            // Animation for modal appearance
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
            // Animation for overlay appearance
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'power3.out' }
            );
        } else {
            // Exit animation if closing
            gsap.to(modalRef.current, { opacity: 1, y: -50, duration: 0.3, ease: 'power3.in' });
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power3.in' });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
                <div
                    ref={modalRef}
                    className="bg-white p-6 rounded-lg shadow-lg relative"
                    style={{ opacity: 1 }}
                >
                    <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                        X
                    </button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
