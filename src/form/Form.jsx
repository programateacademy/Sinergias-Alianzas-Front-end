import React from 'react'
import "./Form.css"
import libro from "./img/Libro.png"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin2Line } from 'react-icons/ri';


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
                    className='texth2' />
                </div>
                <div className=''>
                  <h1>
                    Segundo apellido
                  </h1>
                  <input
                    type="text"
                    className='texth2' />
                </div>
                <div className=''>
                  <h1>
                    Primer nombre
                  </h1>
                  <input
                    type="text"
                    className='texth2' />
                </div>
                <div className=''>
                  <h1>
                    Segundo nombre
                  </h1>
                  <input
                    type="text"
                    className='texth2' />
                </div>
                <div className=''>
                  <h1>
                    Correo
                  </h1>
                  <input
                    type="text"
                    className='texth2' />
                </div>
                <div className=''>
                  <h1>
                    Contraseña
                  </h1>
                  <input
                    type="text"
                    className='texth2' />
                </div>
                <div className='add'>
                  <button className='butadd'> Añadir</button>
                </div>
              <div className='textProfile'> 
                <h1>Perfiles agregados</h1> 
              </div>
                <div >
                    <div className='profiles'>
                      <h1>
                        nombre y apellido
                      </h1>
                      <button>
                        <BiEdit/>
                      </button>
                      <button>
                        <RiDeleteBin2Line/>
                      </button>
                    </div>
                    <div className='profiles'>
                      <h1>
                        nombre y apellido
                      </h1>
                      <button>
                        <BiEdit/>
                      </button>
                      <button>
                        <RiDeleteBin2Line/>
                      </button>
                    </div>
                </div>
              </div>
            </div>


          </div>
        
        </div>
      </section>
    </>
  )
}

export default Form