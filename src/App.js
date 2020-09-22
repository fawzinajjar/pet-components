import React from "react";
import Todo from "./Todo/Todo";
import ImageSlideShow from "./ImageSlideShow/ImageSlideShow";

const App = () => {
  return (
    <>
      <div>
        <ImageSlideShow />
      </div>

      <style jsx="true">
        {`
          div {
            height: 250px;
            width: 500px;
            border-radius: 15px;
          }
        `}
      </style>
    </>
  );
};

export default App;
