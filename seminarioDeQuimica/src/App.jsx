import './App.css'
import Header from "./components/Header"
import Dinossauro from "./components/Dinossauro"
import VidaMarinha from "./components/VidaMarinha"
import Footer from "./components/FooterProps"
import Dino from "./assets/extinct-triceratops-dinosaur-with-natural-habitat.jpg"
import Marinha from "./assets/fantasy-shark-illustration.jpg"
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
        subtitle1="O mito:"
        subtitle2="Teoria do petróleo formado de organismos marinhos:"
        text1={
          <>
            O mito se baseia na ideia de que o petróleo se originou de restos de dinossauros sob condições específicas ao longo de milhões de anos
            (estima-se que as reservas de petróleo tenham entre 10 e 500 milhões de anos).
            <br /><br />
            "Por alguma estranha razão, a ideia de que o petróleo provém dos dinossauros permaneceu em muitas pessoas", afirma o professor de geologia
            Reidar Müller, da Universidade de Oslo, na Noruega.
            <br /><br />
            Mas qual a origem deste mito? De acordo com o professor Darío Solano, da Faculdade de Engenharia da Universidade Nacional Autônoma do México
            (Unam), "Pelo menos dentro da nossa comunidade, podemos identificar que muitas das rochas produtoras de hidrocarbonetos encontram-se
            nas camadas do Jurássico, que é uma era geológica que costuma ser associada aos dinossauros. Talvez esta relação tenha contribuído para
            reforçar a ideia de que esta é a sua origem".
          </>
        }
        text2={
          <>
            De acordo com o Serviço Geológico do Brasil (SGB), a teoria mais aceita sobre a origem do petróleo é a teoria orgânica, que sugere que
            ele se formou a partir da decomposição de microorganismos marinhos.
            <br /><br />
            Esses organismos, como plânctons e algas, foram depositados no fundo dos oceanos ao longo de milhões de anos, misturando-se com sedimentos
            finos.
            <br /><br />
            Com o tempo, o soterramento e a ação de bactérias transformaram essa matéria orgânica em querogênio. Sob altas temperaturas e pressões,
            o querogênio deu origem aos hidrocarbonetos, formando petróleo e gás natural.
            <br /><br />
            Esses compostos migraram por rochas permeáveis até ficarem aprisionados em reservatórios subterrâneos, onde são extraídos atualmente.
          </>
        }
      />


      <VidaMarinha
        img={Marinha}
        alt="Vida Marinha"
        subtitle1="Condições para a formação do petróleo"
        subtitle2="Teoria do petróleo a partir dos dinossauros"
        text1={
          <>
            Acúmulo de Matéria Orgânica
            <br />
            Ambiente Sedimentar e Cobertura
            <br />
            Temperatura e Pressão (A "Cozinha do Petróleo")
            <br />
            Transformação do Quérógeno em Hidrocarbonetos
            <br />
            Migração e Acúmulo em Reservatórios
          <br />
          Armadilhas Petrolíferas e Extração
          </>
        }
        text2={
          <>
            Embora a ideia dos dinossauros contribuindo para a formação do petróleo seja atraente do ponto de vista cultural, a realidade científica
            é que o petróleo é um recurso muito mais antigo, com raízes profundas na história geológica da Terra.
            <br /><br />
            <strong>Teoria orgânica:</strong>
            <br />
            O petróleo tem sua origem em pequenos seres vegetais e animais da orla marítima, que foram soterrados há milhões de anos. Pela ação de
            micro-organismos, da pressão, do calor e do tempo, essa matéria orgânica foi transformada em petróleo.
            <br /><br />
            <strong>Idade dos dinossauros:</strong> 250 a 60 milhões de anos atrás.
          </>
        }
      />

      <Fontes
        fonte1="Fonte 1"
        fonte2="Fonte 2"
        fonte3="Fonte 3"
        fonte4="Fonte 4"
        fonte5="Fonte 5"
        fonte6="Fonte 6"
        fonte7="Fonte 7"

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
