import React, { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "./Gallary.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/dist/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/dist/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/dist/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/dist/plugins/zoom";
import "./Thumbnails.css";

import photos from "./photos";

const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

const Gallary = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <PhotoAlbum
                photos={photos}
                layout="rows"
                targetRowHeight={150}
                onClick={(event, photo, index) => setIndex(index)}
            />

            <Lightbox
                slides={slides}
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