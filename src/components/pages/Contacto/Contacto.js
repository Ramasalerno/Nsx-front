import React from 'react'
import "./Contactostyle.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Contacto = () => {

    const handleSubmit = () => {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con exito!',
            text: 'Muchas gracias por su mensaje, nos contactaremos a la brevedad!',
        }).then(function () {
            window.location = "/";
        });
    }


    return (
        <div className="content">
            <div className="contact-wrapper animated bounceInUp container">
                <div className="contact-form">
                    <h1 className='logo'>Contactanos!</h1>
                    {/* <form action={"http://10.0.10.47:1551/mail"} method="POST" onSubmit={handleSubmit}> */}
                    <form action={"https://info.nsx.com.ar/mail/mail"} method="POST" onSubmit={handleSubmit}>
                        <div className="contenedorForm">
                            <p className="rowsForm">
                                <label>Nombre y Apellido</label>
                                <input type="text" name="nombre" required />
                            </p>
                            <p className="rowsForm">
                                <label>Email</label>
                                <input type="email" name="email" required />
                            </p>
                            <p className="rowsForm">
                                <label>Telefono</label>
                                <input type="tel" name="telefono" required />
                            </p>
                            <p className="rowsForm">
                                <label>Producto de interes</label>
                                <input type="text" name="interes" required />
                            </p>
                            <p className="rowsForm">
                                <label>Pais</label>
                                <input type="text" name="country" required />
                            </p>
                            <p className="rowsForm">
                                <label>Estado/Provincia</label>
                                <input type="text" name="state" required />
                            </p>
                            <p className="rowsFormMensaje block">
                                <label>Mensaje</label>
                                <textarea name="mensaje" rows="1" required></textarea>
                            </p>
                        </div>

                        <div className="conenedorBotonGracias mt-5">
                            <button type="submit" className='enviaConsulta' id='botonSubmit'>Enviar consulta</button>
                            <h4>¡Gracias por tu mensaje!</h4>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    )
}
