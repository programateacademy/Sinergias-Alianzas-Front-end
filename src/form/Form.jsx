import React from 'react'
import "./Form.css"
import libro from "./img/Libro.png"
const Form = () => {
  return (
    <>
    <section className='partForm'>
      
    <h1 className='texttitlee'> Formulario</h1>
      <div>
        
        <div className='containerform'> 
          <div className='pict'> 
          
            <img src={libro} alt="imagen libro" />

            <div className='info'>
              <div className=''>
                <h1>
                Primer apellido
                </h1>
                <input 
                type="text" 
                className='texth2'/>
              </div>
              <div className=''>
                <h1>
                Segundo apellido
                </h1>
                <input 
                type="text" 
                className='texth2'/>
              </div>
              <div className=''>
                <h1>
                Primer nombre
                </h1>
                <input 
                type="text" 
                className='texth2'/>
              </div>
              <div className=''>
                <h1>
                Segundo nombre
                </h1>
                <input 
                type="text" 
                className='texth2'/>
              </div>
              <div className=''>
                <h1>
                Correo
                </h1>
                <input 
                type="text" 
                className='texth2'/>
              </div>
              <div className=''>
                <h1>
                Contraseña
                </h1>
                <input 
                type="text" 
                className='texth2'/>
              </div>
              <div className='add'>
              <button className='butadd'> Añadir</button>
              </div>
            </div>
          </div>

          
        </div>
        {/* <table class="default">
          <tr>
            <th scope="row">Caracteristicas</th>
            <th>Primer Nombre</th>
            <th>Segundo Nombre</th>
            <th>Primer apellido</th>
            <th>Segundo apellido</th>
            <th>Correo</th>
          </tr>
          <tr>
            <th>Usuario</th>
            <td>Soleado</td>
            <td>Mayormente soleado</td>
            <td>Parcialmente nublado</td>
            <td>fdsf</td>
            <td>fdasfads</td>
          </tr>
          
        </table> */}

      </div>
    </section>
    </>
  )
}

export default Form