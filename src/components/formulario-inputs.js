import React from "react";
import '../css/inputs.css'

function Inputs () {
    return(
        <section>
        
        <form action="">
            <div className="form">
                <div className="cedula">
                    
                    <i className="fa-regular fa-address-card"></i>
                    <input className="cedula-input" type="text" placeholder=" Cédula" required id="cedula"/>
    
                </div>
    
                <div className="cedula">
                    <i className="fa-regular fa-user"></i>
                    <input className="cedula-input" type="text" placeholder=" Primer apellido" required id=""/>
    
                </div>
    
                <div className="cedula">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <input className="cedula-input" type="text" placeholder=" Celular" required id=""/>
    
                </div>
               
            </div>
        </form>
        
    

    <section>
        <div className="politica">
            <div className="check">
                <input type="radio" className="fa-regular fa-circle"/>
            </div>
            <div className="p">
                 Acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de tratamiento de datos.</a>
            </div>
        </div>
    </section>
    <div className="container-boton">
        <div className="boton">
            <input type="button" value="¡Comencemos!"   />
            
        </div>
    </div>
    
    </section>
    );
}


export default Inputs