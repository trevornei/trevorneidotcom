// components/Modal.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Animation for modal appearance
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      );
      // Animation for overlay appearance
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" },
      );
    } else {
      // Exit animation if closing
      gsap.to(modalRef.current, {
        opacity: 1,
        y: -50,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/20 backdrop-blur-3xl"
      >
        <div
          ref={modalRef}
          className="relative rounded-lg bg-white p-6 shadow-xl"
          style={{ opacity: 1 }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
