import LoginForm from '../components/LoginForm/LoginForm'
import './static/Login.css'

export default function Login() {
    return (
        <>
            <div className="reg_container">
                <div className="reg_page_box">
                    {/* 
                    <div className="reg_image">
                        <img src="Images/Formal.webp" alt="VR" className="image_img"/>
                    </div>
                    */}
                    <div className="reg_form">
                        <LoginForm />
                    </div>
                </div>
            </div>


        </>
    )
}