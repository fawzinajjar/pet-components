import React, { useState } from "react";
import OverlayPageModal from "./OverlayPageModal";

const OverlayPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>OPEN</button>
        <OverlayPageModal open={isOpen} close={() => setIsOpen(false)}>
          <p>fawzi najjar</p>
        </OverlayPageModal>
      </div>
      <style jsx>
        {`
          div {
            zindex: 1;
            postion: relative;
          }
        `}
      </style>
    </>
  );
};

export default OverlayPage;
