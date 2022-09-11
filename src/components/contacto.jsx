import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Contacto = (props) => {
    const [switchState, setSwitchState] = useState(true);
    const Change=()=>{
        setSwitchState(switchState=false)
    }

    
    return (
        <div>
            <h1>Hola Soy el Componente de Contacto</h1>
            <div>
                <h3>Datos</h3>
                <h2>Nombre:{props.Nombre}</h2>
                <h2>Apellido:{props.Apellido}</h2>
                <h2>email:{props.email}</h2>
                <h2>conectado:{props.estado}</h2>

            </div>
            <div>
            <button onClick={Change}></button>
            </div>
        </div>
    );
};


Contacto.propTypes = {
    Nombre:PropTypes.string,
    Apellido:PropTypes.string,
    email:PropTypes.string,
    estado:PropTypes.bool

};


export default Contacto;
