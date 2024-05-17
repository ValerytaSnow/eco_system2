import React from 'react'
import './home.css'
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);


const  Home = ({correoUsuario}) => {
  return (
    <div>
        <h2>BIENVENIDO {correoUsuario} <button className='btnhome' onClick={()=>signOut(auth)}>Salir </button>
 </h2>
    </div>
  )
}

export default Home