import React, { useState } from 'react'
import './ModalInfo.css'

const ModalInfo = () => {

    const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClickMarca = (e) => {
    //     handleShow();
    // }

    return (
        <div className={`modal fade ${show && 'd-none'} `} 
            id="modal-info"
            name="config" tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            style={{ paddingRight: "17px", display: "block", backgroundColor: "#00000080" }}
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content fade-in-top" id="modal-border">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(!show)} />
                    <div className="modal-body text-center" id="modal-configurador-mensaje">
                        <h3>
                            Completá tu setup NSX gamer con los mejores componentes
                        </h3>
                        <div className="logos-plataforma justify-content-around">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInfo