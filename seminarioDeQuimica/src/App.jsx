import './App.css'
import Header from "./components/Header"
import Dinossauro from "./components/Dinossauro"
import VidaMarinha from "./components/VidaMarinha"
import Footer from "./components/FooterProps"
import Dino from "./assets/Dinossauro2.jpg"
import Marinha from "./assets/VidaMarinha.jpg"
import Fontes from "./components/Fontes"




function App() {


  return (
    <>
      <Header />
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
