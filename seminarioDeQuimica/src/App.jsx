import './App.css'
import Header from "./components/Header"
import Dinossauro from "./components/Dinossauro"
import VidaMarinha from "./components/VidaMarinha"
import Footer from "./components/FooterProps"
import Dino from "./assets/Dinossauro2.jpg"
import Marinha from "./assets/VidaMarinha.jpg"
import Fontes from "./components/Fontes"
import Introducao from "./components/Introducao"




function App() {


  return (
    <>
      <Header />
      <Introducao
        introducao="Introdução:"
        texto="Esse é um texto gerado por IA para testar o tamanho do campo.
As batatas são um dos alimentos mais consumidos no mundo, sendo versáteis e presentes em diversas receitas. Originárias da América do Sul, elas foram levadas para a Europa pelos colonizadores e rapidamente se tornaram um dos principais alimentos da dieta global. Podem ser preparadas de várias formas, como fritas, assadas, cozidas ou em purê, agradando a diferentes paladares. Além disso, as batatas são ricas em carboidratos, fornecendo energia, e também contêm fibras, vitaminas e minerais essenciais para a saúde. Seja em um prato simples ou em uma receita mais elaborada, as batatas sempre são uma excelente opção."
      />
      <Dinossauro
        img={Dino}
        alt="Dinossauro"
        subtitle1="Parte Da Agatha"
        subtitle2="Parte Da Duarte"
        text1="Parte Da Agatha"
        text2="Parte Da Duarte"
      />
      <VidaMarinha
        img={Marinha}
        alt="Vida Marinha"
        subtitle1="Parte Da Matheus"
        subtitle2="Parte Da Guilherme"
        text1="Parte Da Matheus"
        text2="Parte Da Guilherme"
      />
      <Fontes
        fonte1="Fonte1"
        fonte2="Fonte2"
        fonte3="Fonte3"
        fonte4="Fonte4"
      />
      <Footer
        email="quimicatododia@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        meninos="Matheus e Guilherme"
        meninas="Agatha e Maria Duarte"
      />

    </>
  )
}

export default App
