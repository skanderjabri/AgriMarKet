import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyDocument from '../Function/GeneratePdfActualite';

const ViewPdfActualite = ({ show, handleClose, titre, image, description }) => {
    return (
        <Modal show={show} onHide={handleClose} size="xl" centered fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>{titre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MyDocument
                    description={description}
                    image={image}
                    titre={titre}
                />
            </Modal.Body>
        </Modal>
    );
};

export default ViewPdfActualite;
