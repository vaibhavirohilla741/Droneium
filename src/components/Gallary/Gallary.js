import React, { useState, useEffect } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "./Gallary.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/dist/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/dist/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/dist/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/dist/plugins/zoom";
import "./Thumbnails.css";
import photos from "./photos"
import axios from "axios";




const Gallary = () => {
 
  const [index, setIndex] = useState(-1);
  return (
    <>
      <PhotoAlbum
        photos={photos}
        columns={4}
        layout="masonry"
        targetRowHeight={150}
        onClick={(event, photo, index) => setIndex(index)}
        
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default Gallary;
