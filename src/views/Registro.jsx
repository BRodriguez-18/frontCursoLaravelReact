import {createRef, useState} from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../Components/Alerta';
import clienteAxios from '../config/axios'

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores]=useState([])

    const handleSubmit = async e => {
      e.preventDefault();

      const datos = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value
      }

      // registro(datos, setErrores)

      try{
          const {data} = await clienteAxios.post('/api/registro', datos)
          console.log(data.token)
      } catch (error){
        setErrores(Object.values(error.response.data.errors))
      }
    }

    return (
      <>
      <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
      <p> Crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form 
          onSubmit={handleSubmit}
          noValidate
        >
          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

          <div className="mb-4">
            <label 
            className="text-slate-800"
            htmlFor="name">
                nombre
            </label>
            <input 
            type="text" 
            id="name"
            className="mt-2 w-full p-3 bg-gray-50"
            name="name"
            placeholder="Tu nombre"
            ref={nameRef}
            />
          </div>
          
          <div className="mb-4">
            <label 
            className="text-slate-800"
            htmlFor="email">
                email
            </label>
            <input 
            type="text" 
            id="email"
            className="mt-2 w-full p-3 bg-gray-50"
            name="email"
            placeholder="Tu correo"
            ref={emailRef}
            />
          </div>

          <div className="mb-4">
            <label 
            className="text-slate-800"
            htmlFor="Password">
                Password
            </label>
            <input 
            type="password" 
            id="Password"
            className="mt-2 w-full p-3 bg-gray-50"
            name="Password"
            placeholder="Tu Password"
            ref={passwordRef}
            />
          </div>

          <div className="mb-4">
            <label 
            className="text-slate-800"
            htmlFor="password_confirmation">
                Confirmar Password
            </label>
            <input 
            type="password" 
            id="password_confirmation"
            className="mt-2 w-full p-3 bg-gray-50"
            name="password_confirmation"
            placeholder="Confirmar Password"
            ref={passwordConfirmationRef}
            />
          </div>
          <input type="submit"
          value="Crear Cuenta"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/login">
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </nav>
      </>
      )
  }
  