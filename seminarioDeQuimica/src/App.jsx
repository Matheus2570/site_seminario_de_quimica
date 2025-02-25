import './App.css'
import Header from "./components/Header"
import Dinossauro from "./components/Dinossauro"
import VidaMarinha from "./components/VidaMarinha"
import Footer from "./components/FooterProps"
import Dino from "./assets/Dinossauro2.jpg"
import Marinha from "./assets/VidaMarinha.jpg"




function App() {


  return (
    <>
     <Header/>  
     <Dinossauro
        img={Dino}
        alt="Dinossauro"
        title="Petroleo Atraves dos Dinossauros:"
        subtitle1="Parte Da Agatha"
        subtitle2="Parte Da Duarte"
        text1="Parte Da Agatha"
        text2="Parte Da Duarte"
      />
      <VidaMarinha
       img={Marinha}
        alt="Vida Marinha"
        title="Petroleo Atraves da Vida Marinha:"
        subtitle1="Parte Da Matheus"
        subtitle2="Parte Da Guilherme"
        text1="Parte Da Matheus"
        text2="Parte Da Guilherme"
      />

<Footer
        email="quimicatododia@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        autor="Quimica Todo Dia 👌"
      />
    </>
  )
}

export default App
