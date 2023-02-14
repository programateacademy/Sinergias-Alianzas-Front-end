import React from 'react'
import "./Form.css"
import libro from "./img/Libro.png"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin2Line } from 'react-icons/ri';


const Form = () => {
  return (
    <>
      <div className='texttitle'><h1>Editar componente</h1></div>
      <section className='partForm'>
          

          <div className='pict'>
                <div className='pict_cont1'>

                  <div className='book'>
                    <img src={libro} alt="imagen libro" />
                  </div>


                  <div className='info'>

                      <label htmlFor="" className='info_label'>
                        <p>Primer apellido</p>
                        <input
                          type="text"
                          />
                      </label>
                      <label htmlFor="" className='info_label'>
                        <p>Segundo apellido</p>
                        <input
                          type="text"
                          />
                      </label>
                      <label htmlFor="" className='info_label'>
                        <p>Primer nombre</p>
                        <input
                          type="text"
                          />
                      </label>
                      <label htmlFor="" className='info_label'>
                        <p>Segundo nombre</p>
                        <input
                          type="text"
                          />
                      </label>
                  </div>
                </div>
                <div className='pict_cont2'>
                    <label htmlFor="" className='info_label2'>
                        <p>Correo</p>
                        <input
                            type="text"
                            />
                      </label>
                      <label htmlFor="" className='info_label2'>
                        <p>Contraseña</p>
                        <input
                            type="text"
                            />
                      </label>
                      
                      <button className='butadd'> Añadir</button>
                      
                </div>

              
              <div className='container_last'>
                  <h1>Perfiles agregados</h1> 
                

                <div className='container_last_table'>


                    <div className='profile'>
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
          
        
        
      </section>
    </>
  )
}

export default Form