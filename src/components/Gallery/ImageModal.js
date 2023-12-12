import React, { useEffect, useState } from "react";
import { Modal, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sprite from "../../assets/images/sprite.svg";

const ImageModal = ({ show, closeModal, images, selectedImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleDocumentKeyDown = (e) => {
      if (show) {
        handleKeyDown(e);
      }
    };

    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, currentIndex]);
  
  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Body onKeyDown={handleKeyDown} tabIndex="0">
        <Row>
          <div className="box">
            <Carousel
              selectedItem={currentIndex}
              onChange={(index) => setCurrentIndex(index)}
              showIndicators
              showStatus={false}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  hasNext && (
                    <button
                      className="nav_btn nav_btn_right"
                      onClick={clickHandler}
                    >
                      <svg>
                        <use xlinkHref={sprite + "#right"}></use>
                      </svg>
                    </button>
                  )
                );
              }}
              renderArrowPrev={(clickHandler, hasNext) => {
                return (
                  hasNext && (
                    <button
                      onClick={clickHandler}
                      className="nav_btn nav_btn_left"
                    >
                      <svg>
                        <use xlinkHref={sprite + "#left"}></use>
                      </svg>
                    </button>
                  )
                );
              }}
              transitionTime={310}
              swipeable={false}
            >
              {images.map((data, index) => (
                <div className="slide" key={index}>
                  <img alt={`sample_file_${index}`} src={data.url} />
                </div>
              ))}
            </Carousel>
          </div>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
