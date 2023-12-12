import React from "react";
import { Container } from "react-bootstrap";
import GalleryGrid from "../components/Gallery/GalleryGrid";

const Gallery = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="heading">Photo Gallery</h1>
        <p className="description-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <GalleryGrid />
      </Container>
    </div>
  );
};

export default Gallery;
