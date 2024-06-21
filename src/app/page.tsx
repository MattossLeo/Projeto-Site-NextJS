import './style.css';
import ThemeSwitch from './components/ThemeSwitch';
import Image from "next/image";
import { Krona_One} from "next/font/google";
import React from 'react';
import { useEffect, useState } from 'react';

import enterprise from '../..public/enterprise.webp';
import courses from '../..public/courses.webp';
import stages from '../..public/stages.webp';
import teachers from '../..public/teachers.webp';

const slide: any[] =[courses, enterprise, stages, teachers]

const kronaOne = Krona_One({
  weight: ['400'],  
  subsets: ['latin']
});
      
export default function Home() {

  return (
    <main className="min-h-screen">
      <section className="main-banner">
        <div className="main-top-bar padding-border-container">
          <div className="flex items-center justify-between">
            <div className="menu-desk menu-top-bar flex justify-between">
              <a className="text-color-white menu-link" href="#">Graduação</a>
              <a className="text-color-white menu-link" href="#">Segunda Graduação</a>
              <a className="text-color-white menu-link" href="#">Pós Graduação</a>
              <a className="text-color-white menu-link" href="#">Disciplinas Isoladas</a>
              <a className="text-color-white menu-link" href="#">Cursos Livres</a>
              <a className="text-color-white menu-link" href="#">Bolsa de Estudo</a>
            </div>
            <div className='menu-mobile'>
              <div className='click-arrow'>
                <Image
                src="/white-arrow.svg"
                alt="Logotipo"
                width={20} 
                height={20}
                />
                <div className='menu-mob menu-top-mob flex bg-zinc-100 dark:bg-black text-black dark:text-zinc-100'>
                  <a className="text-color-white menu-link" href="#">Graduação</a>
                  <a className="text-color-white menu-link" href="#">Segunda Graduação</a>
                  <a className="text-color-white menu-link" href="#">Pós Graduação</a>
                  <a className="text-color-white menu-link" href="#">Disciplinas Isoladas</a>
                  <a className="text-color-white menu-link" href="#">Cursos Livres</a>
                  <a className="text-color-white menu-link" href="#">Bolsa de Estudo</a>
                </div>
              </div>
            </div>
            <div className="main-logo logo-mob">
            <Image
              src="/logo-unica.svg"
              alt="Logotipo"
              width={150} 
              height={150}
            />
            </div>
            <div className="button-dark-mode text-color-white"><button className='dark:text-foreground'><ThemeSwitch></ThemeSwitch></button></div>
         </div>
        </div>
        <div className=" second-bar-menu padding-border-container">
          <div className="flex items-center justify-between">
            <div className="main-logo logo-desk">
            <Image
              src="/logo-unica.svg"
              alt="Logotipo"
              width={150} 
              height={150}
            />
            </div>
            <div className='click-buger'>
            <Image
                src="/buger-menu.svg"
                alt="Logotipo"
                width={40} 
                height={40}
                />
                <div className="second-menu-mob flex bg-zinc-100 dark:bg-black text-black dark:text-zinc-100">
                  <a className="text-color-white menu-link" href="#">Nossas Áreas</a>
                  <a className="text-color-white menu-link" href="#">Vidas Transformadas</a>
                  <a className="text-color-white menu-link" href="#">Blog</a>
                  <a className="text-color-white menu-link" href="#">FAQ</a>
                </div>
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
            <div className="second-menu menu-desk">
              <a className="text-color-white initial-pd menu-link" href="#">Nossas Áreas</a>
              <a className="text-color-white menu-link" href="#">Vidas Transformadas</a>
              <a className="text-color-white menu-link" href="#">Blog</a>
              <a className="text-color-white menu-link" href="#">FAQ</a>
            </div>
            <div className="student-button menu-desk">
              <button className={kronaOne.className}>JÁ SOU ALUNO</button>
            </div>
          </div>
        </div>
        <div className="banners-title padding-border-container">
          <div className="title-banner- flex flex-col">
            <h1 className={kronaOne.className}>CONHEÇA A <br/>FACULDADE ÚNICA</h1>
            <p className='subtitle-banner'>Criando hoje o seu amanhã.</p>
          </div>
        </div>
      </section>
      <section className='tomorrow-today'>
        <div className='tomorrw-today-content padding-border-container'>
          <div className='flex flex-col items-center'>
            <p className='title-tomorrow-today'>CRIANDO HOJE, O SEU AMANHÃ!</p>
          </div>
        </div>
      </section>
      <section className='perfect-for-you bg-zinc-100 dark:bg-black'>
        <div className='main-perfect-for-you padding-border-container'>
          <div className='titles-content flex flex-col items-center justify-center'>
            <h2 className="title-for-you text-black dark:text-zinc-100">Perfeita para você!</h2>
          </div>
          <div className='history-for-you-main'>
          <p className='history-for-you text-black dark:text-zinc-100'>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
          </div>
          <div className='main-content-cards flex items-center justify-between'>
          <div className='main-cards-for-you'>
            <div className="card-for-you bg-zinc-100 dark:bg-black text-black dark:text-zinc-100">
            <Image
              className='certifier-img'
              src="/certifier-img.svg"
              alt="Logotipo"
              width={60} 
              height={60}
            />
            <p className='text-card-history-for-you'>+ de 489 mil Alunos <br/>certificados</p>
            </div>
          </div> 
          <div className='main-cards-for-you'>
            <div className="card-for-you bg-zinc-100 dark:bg-black text-black dark:text-zinc-100">
            <Image
              className='map-img'
              src="/map-img.svg"
              alt="Logotipo"
              width={60} 
              height={60}
            />
            <p className='text-card-history-for-you'>+ de 250 Polos em <br/>todo Brasil</p>
            </div>
          </div> 
          <div className='main-cards-for-you'>
            <div className="card-for-you bg-zinc-100 dark:bg-black text-black dark:text-zinc-100">
            <Image
              className='pc-img'
              src="/pc-img.svg"
              alt="Logotipo"
              width={60} 
              height={60}
            />
            <p className='text-card-history-for-you'>+ de 900 cursos em <br/>diversas modalidades <br/>de ensino</p>
            </div>
          </div>  
          </div>
             

        </div>
      </section>
      <section className='build-tomorrow bg-zinc-100 dark:bg-black'>
        <div className='main-build-tomorrow padding-border-container flex justify-between'>
          <div className="main-content-build">
            <div className='main-title-build'>
              <h2 className='title-build-tomorrow text-black dark:text-zinc-100'>Construa seu amanhã <br/>conosco</h2>
            </div>
            <div className='main-text-build'>
              <p className='text-build text-black dark:text-zinc-100'>Com foco em inovação e qualidade, seja nos cursos <br/>presenciais ou online, utilizamos as mais modernas <br/>tecnologias para uma comunicação mais eficiente <br/>e eficaz entre professor e aluno, destinados à <br/>formação de profissionais qualificados, capazes de <br/>transformar a realidade socioeconômica do país.</p>
            </div>
          </div>
          <div className='main-img-build'>
            <Image
                src="/buid-tomorrow-img.webp"
                alt="Logotipo"
                width={582} 
                height={330}
             />
          </div>
        </div>
      </section>
      <section className='open-doors bg-zinc-100 dark:bg-black'>
        <div className="open-doors-containers padding-border-container">
          <div className="open-doors-titles">
            <h2 className='title-open-doors text-black dark:text-zinc-100'>Abra novas portas para o seu futuro</h2>
          </div>
          <div className="slick-open-doors">
          </div>
        </div>
      </section>
    </main>
  );
}