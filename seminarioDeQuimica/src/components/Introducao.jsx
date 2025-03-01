import "./Introducao.css"


function Introducao(props) {
    return (
        <>
    <div className="IntroducaoConteiner">
        <div className="BlocoIntroducao">
            <h2>{props.introducao}</h2>
            <p>{props.texto}</p>
        </div>
    </div>

        </>
    )
}

export default Introducao       