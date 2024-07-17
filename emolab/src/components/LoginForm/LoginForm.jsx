import React, { useState } from 'react'
import './LoginForm.css'

export default function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const inputEmailHandler = (event) => {
        setEmail(event.target.value);
    };

    const inputPasswordHandler = (event) => {
        setPassword(event.target.value);
    };


    const handleAllInputs = () =>{

        if (email.length <=0){
            alert("Debe completar el campo 'Email' para registrase.")
        }
        if (password.length <=0){
            alert("Debe completar el campo 'Password' para registrase.")
        }
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleAllInputs();

        // Construir el objeto de datos a enviar
        const formData = {
            email: email,
            password: password
        };

        // Aquí deberías llamar a tu API backend para enviar los datos
        try {
            const response = await fetch('URL_DE_TU_API', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error al registrar usuario');
            }

            // Manejar la respuesta del servidor si es necesario
            const data = await response.json();
            console.log('Usuario registrado:', data);

            // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
            // Aquí podrías mostrar un mensaje de error al usuario
        }
    };

    return (

        <div className='registro_box'>
            <div className='form_titlebox'>
                <h1 className='form_title'>Autenticación de usuario</h1>
            </div>

            <form className='form_registro' onSubmit={handleSubmit}>
               
                <label className='lbl' >Correo electrónico</label>
                <input className=' input_form' name='email' type='email' placeholder='correo@correo.com' onChange={inputEmailHandler} />
                <label className='lbl'>Contrasñea</label>
                <input className=' input_form' name='first_password' type='password'  onChange={inputPasswordHandler} minLength={10}/>

                <button className='btn_form pre_radius' type='submit'>Log In</button>
                <button className='btn_form pre_radius' type='submit'>Registrarse</button>
                <button className='btn_form pre_radius' type='submit'>Olvidé mi contraseña</button>
            </form>
        </div>
    )
}