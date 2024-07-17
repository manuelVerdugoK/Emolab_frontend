import RegistroForm from "../components/RegistroForm/RegistroForm"
import './static/Registro.css'

export default function Registro() {
    return (
        <>
            <div className="reg_container">
                <div className="reg_page_box">
                    <div className="reg_form">
                        <RegistroForm />
                    </div>
                </div>
            </div>


        </>
    )
}