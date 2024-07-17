import './Banner.css';

export default function Banner() {
    return (
        <>
            <div className="banner_box">
                
                <div className="banner_image">
                    <img src="Images/openai.png" className="image_image" alt="OpenAI"/>
                </div>

                <div className="banner_text">
                    <h1>Texto Título</h1>
                    <p>Texto Parrafo</p>
                </div>
            </div>
        </>
    )
}