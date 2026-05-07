import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import "./PromoModal.css";

function PromoModal({ youtubeUrl }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mostrar el modal al montar la página
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  // Obtener URL desde prop o variable de entorno `REACT_APP_PROMO_URL`
  const url = "https://www.youtube.com/watch?v=dRh95Jnt8aA";

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop={false}
      dialogClassName="promo-modal-dialog"
    >
      <Modal.Body className="promo-body">
        {/* Close icon in top-right */}
        <button aria-label="Cerrar" onClick={handleClose} className="promo-close">
          <AiOutlineClose size={20} />
        </button>

        {/* Overlay message */}
        <div className="promo-message">¿Ya viste el nuevo performance?</div>

        {/* Desktop image (visible en md+) - clickable */}
        <a href={url} target="_blank" rel="noreferrer" aria-label="Ver Red Ocean en YouTube" className="d-none d-md-block">
          <img
            src="/images/modal-promo/RedOceanDesktop.png"
            alt="Promo Desktop"
            className="w-100 promo-img-clickable"
          />
        </a>

        {/* Mobile image (visible in sm) - clickable */}
        <a href={url} target="_blank" rel="noreferrer" aria-label="Ver Red Ocean en YouTube" className="d-block d-md-none">
          <img src="/images/modal-promo/RedOceanMobile.png" alt="Promo Mobile" className="w-100 promo-img-clickable" />
        </a>

        {/* Action buttons overlayed at bottom (kept inside body) */}
        <div className="promo-actions">
          <Button variant="primary" className="inverted-outline-red" href={url} target="_blank" rel="noreferrer">
            Ver en YouTube
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PromoModal;
