import "./Fontes.css";

function Fontes(props) {
  return (
    <>
      <div className="FontesConteiner">
        <div className="BlocoFontes">
          <ul>
            <li><a href="https://www.dgeg.gov.pt/pt/areas-setoriais/geologia/petroleo-armazenamento-de-co2/geologia-do-petroleo/breve-enquadramento" target="_blank" rel="noopener noreferrer">{props.fonte1}</a></li>
            <li><a href="https://www.sgb.gov.br/petroleo#:~:text=Origem,e%20pela%20a%C3%A7%C3%A3o%20de%20bact%C3%A9rias." target="_blank" rel="noopener noreferrer">{props.fonte2}</a></li>
            <li><a href="https://olhardigital.com.br/2023/09/22/ciencia-e-espaco/dinossauros-nao-tem-a-ver-com-a-origem-do-petroleo" target="_blank" rel="noopener noreferrer">{props.fonte3}</a></li>
            <li><a href="https://g1.globo.com/mundo/noticia/2023/05/26/qual-e-a-origem-do-petroleo-spoiler-nao-vem-dos-dinossauros.ghtml" target="_blank" rel="noopener noreferrer">{props.fonte4}</a></li>
            <li><a href="https://www.greelane.com/pt/ci%C3%AAncia-tecnologia-matem%C3%A1tica/animais-e-natureza/does-oil-come-from-dinosaurs-1092003" target="_blank" rel="noopener noreferrer">{props.fonte5}</a></li>
            <li><a href="https://brasilescola.uol.com.br/geografia/petroleo.htm" target="_blank" rel="noopener noreferrer">{props.fonte6}</a></li>
            <li><a href="https://www.bbc.com/portuguese/articles/cnk0e0yydelo" target="_blank" rel="noopener noreferrer">{props.fonte7}</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Fontes;
