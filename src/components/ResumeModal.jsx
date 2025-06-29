import React, { useEffect, useRef } from "react";
import resume from "../assets/Resume_final.pdf";

const ResumeModal = ({ setResumeModalOpen }) => {
  let targetRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (targetRef.current && !targetRef.current.contains(e.target)) {
        setResumeModalOpen(false);

        console.log(targetRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className="top-6 left-0 bottom-0 w-full h-full z-20 bg-black bg-opacity-60 fixed">
        <iframe
          src={resume}
          ref={targetRef}
          className="w-1/2 h-full pt-12 mt-2 z-20 mx-auto block"
        />
      </div>
    </>
  );
};

export default ResumeModal;
