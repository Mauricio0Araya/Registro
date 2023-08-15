import { useState } from 'react'
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";


const Registro = () => {
  const [alert, setAlert] = useState({ msg: "", color: "", })
  return (
    <>
      <div className="registro-card">
        <h1 className="cuenta">Crea Una Cuenta</h1>
        <hr />

        <div className="social-buttons">
          <SocialButton icon="fa-brands fa-facebook" />
          <SocialButton icon="fa-brands fa-github" />
          <SocialButton icon="fa-brands fa-linkedin" />
        </div>
        <div className="form">
          <Formulario setAlert={setAlert} />

        </div>

        <div className='alert'>
          {alert.msg && <Alert msg={alert.msg} color={alert.color} />}

        </div>
      </div>



    </>
  )
}

export default Registro;

