import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/fullyship.png'

import Illustration from '../images/footer-illustration.svg';

function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <img className="max-w-none" src={Illustration} width="1940" height="381" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            
            
            <Link className="block" to="/" aria-label="Cruip">
               <img src={logo} />
            </Link>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Esenciales</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Pagos
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Presupuesto y análisis 
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Open banking
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Bolsillos
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Suscripciones
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Compañía</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                 Sobre nosotros
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Diversidad e inclusión
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                 Código de conducta
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                 Estados financieros
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Lifestyle</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                 Productos internacionales
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                 Cambio de divisas
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Lounge & Smart delay
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                 Envíanos un email
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="pb-4 md:pb-8">
          <div className="text-xs text-slate-500">
            Si desea obtener más información sobre la entidad de la que recibe servicios, haga clic{' '}
            <a className="font-medium underline hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
              aqui
            </a>{' '}
            Si tiene alguna otra pregunta, comuníquese con nosotros a través del chat en la aplicación. 
            Custom Bank es un banco establecido en la República de Irlanda. Custom Bank tiene licencia del Banco Central Europeo 
            y está regulado por el Banco de Irlanda. Cusom Bank proporciona servicios de crédito, pago, 
            cuenta corriente y cuenta de depósito a la vista.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
