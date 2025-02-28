import "./Fontes.css";

function Fontes(props) {
  return (
    <>
      <div className="FontesConteiner">
        <div className="BlocoFontes">
          <ul>
            <li><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">{props.fonte1}</a></li>
            <li><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">{props.fonte2}</a></li>
            <li><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">{props.fonte3}</a></li>
            <li><a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">{props.fonte4}</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Fontes;
