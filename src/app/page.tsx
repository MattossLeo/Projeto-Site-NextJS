import './style.css';
import Image from "next/image";
import { Krona_One} from "next/font/google";

const kronaOne = Krona_One({
  weight: ['400'],  
  subsets: ['latin']
});
      
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="main-banner">
        <div className="main-top-bar padding-border-container">
          <div className="container flex items-center justify-between">
            <div className="menu-top-bar container flex justify-between">
              <a className="text-color-white menu-link" href="#">Graduação</a>
              <a className="text-color-white menu-link" href="#">Segunda Graduação</a>
              <a className="text-color-white menu-link" href="#">Pós Graduação</a>
              <a className="text-color-white menu-link" href="#">Disciplinas Isoladas</a>
              <a className="text-color-white menu-link" href="#">Cursos Livres</a>
              <a className="text-color-white menu-link" href="#">Bolsa de Estudo</a>
            </div>
            <div className="button-dark-mode text-color-white"><button>dark</button></div>
         </div>
        </div>
        <div className="second-bar-menu padding-border-container">
          <div className="container flex items-center justify-between">
            <div className="main-logo">
            <Image
              src="/logo-unica.svg"
              alt="Logotipo"
              width={150} 
              height={150}
            />
            </div>
            <div className="search-bar">
              <input className="input-search p-3" type="search" placeholder="Pesquise por um curso" />
              <div className='magnifying-glass'>
              <Image
              className='magnifying-glass-img'
              src="/magnifying-glass.svg"
              alt="Logotipo"
              width={20} 
              height={20}
            />
              </div>
            </div>
            <div className="second-menu">
              <a className="text-color-white initial-pd menu-link" href="#">Nossas Áreas</a>
              <a className="text-color-white menu-link" href="#">Vidas Transformadas</a>
              <a className="text-color-white menu-link" href="#">Blog</a>
              <a className="text-color-white menu-link" href="#">FAQ</a>
            </div>
            <div className="student-button">
              <button className={kronaOne.className}>JÁ SOU ALUNO</button>
            </div>
          </div>
        </div>
        <div className="banners-title padding-border-container">
          <div className="title-banner- container flex flex-col p-14">
            <h1 className={kronaOne.className}>CONHEÇA A <br/>FACULDADE ÚNICA</h1>
            <p className='subtitle-banner'>Criando hoje o seu amanhã.</p>
          </div>
        </div>
      </div>
      <div className='tomorrow-today'>
        <div className='padding-border-container container flex flex-col items-center'>
          <p className='title-tomorrow-today'>CRIANDO HOJE, O SEU AMANHÃ!</p>
        </div>
      </div>
    </main>
  );
}