import Image from "next/image";

      
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="main-banner">
        <div className="main-top-bar padding-border-container">
          <div className="container flex items-center justify-between">
            <div className="menu-top-bar container flex justify-between">
              <a className="text-color-white menu-top-link" href="#">Graduação</a>
              <a className="text-color-white menu-top-link" href="#">Segunda Graduação</a>
              <a className="text-color-white menu-top-link" href="#">Pós Graduação</a>
              <a className="text-color-white menu-top-link" href="#">Disciplinas Isoladas</a>
              <a className="text-color-white menu-top-link" href="#">Cursos Livres</a>
              <a className="text-color-white menu-top-link" href="#">Bolsa de Estudo</a>
            </div>
            <div className="button-dark-mode text-color-white"><button>dark</button></div>
         </div>
        </div>
        <div className="second-bar-menu padding-border-container">
          <div className="container flex items-center justify-between">
            <div className="main-logo">logo-aqui</div>
            <div className="search-bar">
              <input className="input-search p-3" type="search" placeholder="Pesquise por um curso" />
            </div>
            <div className="second-menu">
              <a className="menu-top-link" href="#">Nossas Áreas</a>
              <a className="menu-top-link" href="#">Vidas Transformadas</a>
              <a className="menu-top-link" href="#">Blog</a>
              <a className="menu-top-link" href="#">Faq</a>
            </div>
            <div className="student">
              <button className="button-student">Já sou Aluno</button>
            </div>
          </div>
        </div>
        <div className="banners-title padding-border-container">
          <div className="container flex items-center justify-between p-14">
            <h1 className="title-banner">CONHEÇA A FACULDADE</h1>
          </div>
        </div>
      </div>
    </main>
  );
}