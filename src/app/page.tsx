import './style.css';
import ThemeSwitch from './components/ThemeSwitch';
import Image from "next/image";
import { Krona_One} from "next/font/google";

const kronaOne = Krona_One({
  weight: ['400'],  
  subsets: ['latin']
});
      
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="main-banner">
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
            <div className="button-dark-mode text-color-white"><button className='dark:text-foreground'><ThemeSwitch></ThemeSwitch></button></div>
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
              <input className="input-search p-3 bg-zinc-100 dark:bg-zinc-100" type="search" placeholder="Pesquise por um curso" />
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
      </section>
      <section className='tomorrow-today'>
        <div className='tomorrw-today-content padding-border-container'>
          <div className='container flex flex-col items-center'>
            <p className='title-tomorrow-today'>CRIANDO HOJE, O SEU AMANHÃ!</p>
          </div>
        </div>
      </section>
      <section className='perfect-for-you bg-zinc-100 dark:bg-black'>
        <div className='main-perfect-for-you padding-border-container'>
          <div className='titles-content flex flex-col items-center justify-center'>
            <h2 className="title-for-you text-black dark:text-zinc-100">Perfeita para você!</h2>
            <p className='history-for-you  text-black dark:text-zinc-100'>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
          </div>
        </div>
      </section>
    </main>
  );
}