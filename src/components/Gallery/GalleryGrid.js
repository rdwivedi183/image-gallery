import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import imageData from "../../data/images.json";
import ImageModal from "./ImageModal";


const GalleryGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Row xs={1} md={3} lg={4}>
        {imageData.images.map((image, index) => (
          <Col className="h-100 mb-4" key={index}>
            <Image
              src={image?.url}
              alt={image.alt}
              className="gallery-thumbnail w-100" style={{height: '200px'}}
              onClick={() => openModal(image.url)}
            />
          </Col>
        ))}
      </Row>
      <ImageModal
        show={showModal}
        selectedImage={selectedImage}
        closeModal={closeModal}
        images={imageData.images}
      />
    </>
  );
};

export default GalleryGrid;
