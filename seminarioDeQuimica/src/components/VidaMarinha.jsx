import './VidaMarinha.css'

function Header(props) {
  return (
    <>
      <div className="VidaMarinhaContainer">
        <img src={props.img} className="VidaMarinhaImagem" alt={props.alt} />
        <div className="VidaMarinhaCabecalho">
          <h1 className='VidaMarinhaTitulo'>{props.title}</h1>
          <div className="VidaMarinhaBlocos">
            <div className="VidaMarinhaBloco1">
              <h3>{props.subtitle1}</h3>
              <p>{props.text1}</p>
            </div>
            <div className="VidaMarinhaBloco2">
              <h3>{props.subtitle2}</h3>
              <p>{props.text2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header