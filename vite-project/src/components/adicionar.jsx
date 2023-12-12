import Modal from "react-bootstrap/Modal";
import Formulario from "./formulario";

function Adicionar() {
    return(
        <>
        <Modal>
            <Modal.Header>
                <h2>Adicionar</h2>
                <Modal.Body>
                    <Formulario />
                </Modal.Body>
            </Modal.Header>
        </Modal>
        </>
    )
}