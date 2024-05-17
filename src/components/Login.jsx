import React, { useState } from 'react';
import appFirebase from '../credenciales';
import './login.css';
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)



const Login = () => {
  const [registrando, setRegistrando] = useState(false)
  const functAutenticacion = async(e) =>{
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    
    if (registrando){
      await createUserWithEmailAndPassword(auth, correo, contraseña)
    }else{
      await signInWithEmailAndPassword(auth, correo, contraseña)
      
    }
  }

  return (
    <>
    <br/><br/><br/>
      <div className='card'>
        <br />
        <h1>Eco_System</h1>
        <h4>Resiclamos con propósito</h4>
        <div className="cuerpo">
        <form onSubmit={functAutenticacion}>
          <input id='inputs' type="text"  name='email' placeholder='Ingresar email'/>
          <input id='inputs' type="password" name='password' placeholder='Ingresa la clave'/>

          <button className='btn'>{registrando ? 'Registrate' : 'Inicia Sesion'}</button>
        </form>
        <h5>{registrando ? 'Si ya tienes cuenta': '¿No tienes cuenta?' }<button onClick={()=> setRegistrando(!registrando)} className='btn'> {registrando ? 'Inicia sesion': 'Registrate'} </button></h5> 
        </div>
      </div>
    </>
  )
}

export default Login