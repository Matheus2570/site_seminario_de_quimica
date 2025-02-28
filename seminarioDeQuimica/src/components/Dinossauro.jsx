import './Dinossauro.css'

function Header(props) {
  return (
    <>
      <div className="DinossauroContainer">
        <img src={props.img} className="DinossauroImagem" alt={props.alt} />
          <h1 className='DinossauroTitulo'>{props.title}</h1>
          <div className="DinossauroBlocos">
            <div className="DinossauroBloco1">
              <h3>{props.subtitle1}</h3>
              <p>{props.text1}</p>
            </div>
            <div className="DinossauroBloco2">
              <h3>{props.subtitle2}</h3>
              <p>{props.text2}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header