import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import "../App.css";

export default class HistModal extends Component {
    render() {
        const { modalValue, modalItems, hideModal , clearModal } = this.props;
        return (
            <div>
                <Modal show={modalValue} onHide={hideModal}>
                    <Modal.Header className='modalHeader'>
                        <Modal.Title className='cross' onClick={hideModal}>&times;</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modalBody'>
                        <table className=''>
                            <thead>
                                <tr>
                                </tr>
                            </thead>
                            <tbody>
                                {modalItems()}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-danger' onClick={clearModal}>Clear</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}