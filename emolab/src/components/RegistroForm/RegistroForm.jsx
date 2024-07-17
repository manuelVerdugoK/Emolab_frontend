import React, { useState } from 'react'
import './RegistroForm.css'

export default function RegistroForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const inpuNametHandler = (event) => {
        setName(event.target.value);
    };

    const inputEmailHandler = (event) => {
        setEmail(event.target.value);
    };

    const inputPasswordHandler = (event) => {
        setPassword(event.target.value);
    };

    const inputrepeatPasswordHandler = (event) => {
        setRepeatPassword(event.target.value);
    };

    const handleAllInputs = () =>{
        if (name.length <=5){
            alert("El campo 'Nombre' tiene un largo mínimo de 5 caracteres.");
        }
        if (email.length <=0){
            alert("Debe completar el campo 'Email' para registrase.")
        }
        if (password.length <=0 && repeatPassword.length<=0){
            alert("Debe completar el campo 'Password' para registrase.")
        }
        
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        handleAllInputs();


        // Validar que las contraseñas coincidan antes de enviar el formulario
        if (password !== repeatPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Construir el objeto de datos a enviar
        const formData = {
            name: name,
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
                <h1 className='form_title'>Registro de usuarios</h1>
            </div>

            <form className='form_registro' onSubmit={handleSubmit}>
                <label className='lbl'>Indique su primer nombre</label>
                <input className='pre_radius input_form' name='name' type='text' placeholder='Nombre de pila' onChange={inpuNametHandler} minLength={5}/>
                <label className='lbl' >Indique su correo electrónico</label>
                <input className='pre_radius input_form' name='email' type='email' placeholder='Correo electronico' onChange={inputEmailHandler} />
                <label className='lbl'>Indique su contrasñea</label>
                <input className='pre_radius input_form' name='first_password' type='password' placeholder='Contraseña' onChange={inputPasswordHandler} minLength={10}/>
                <label className='lbl'>Vuelva a indicar su contraseña</label>
                <input className='pre_radius input_form' name='second_password' type='password' placeholder='Contraseña' onChange={inputrepeatPasswordHandler} minLength={10}/>

                <button className='btn_form pre_radius' type='submit'>Registrarse</button>
            </form>
        </div>
    )
}