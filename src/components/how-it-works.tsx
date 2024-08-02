'use client';

import { CTAToWebsite } from './cta-to-website';

export const HowItWorks = () => {
  return (
    <section className="w-full mt-[24px] bg-white p-4" id="como-funciona?">
      <h2 className="w-full text-center font-inter font-semibold text-2xl md:text-3xl text-gray-700 mt-5 max-[840px]:mt-2">
        Como funciona?
      </h2>
      <p className="font-inter text-center text-gray-700 text-base mt-1 mb-10">
        Com passos simples e rápidos você já consegue usar a plataforma.
      </p>

      <div className="flex flex-row gap-[48px] justify-center max-[840px]:flex-col-reverse max-[840px]:items-center max-[840px]:gap-[18px]">
        <div className="w-[40%] rounded-[4px] max-[1105px]:w-[60%] max-[840px]:w-full border-[1px] border-gray-300 overflow-hidden">
          <div
            className="wistia_embed wistia_async_uaq6ik8cww playerColor=4c1d95 autoPlay=true videoFoam=true settingsControl=false playbar=false playButton=false muted=false controlsVisibleOnLoad=false volumeControl=false smallPlayButton=false playlistLoop=true"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="mt-8 max-[840px]:mt-0">
          <p className="font-inter font-bold text-gray-600 text-xl max-[840px]:text-[18px]">
            1. Crie a sua Conta
          </p>
          <p className="max-w-[400px] w-full text-left font-inter font-normal text-base text-gray-500 max-[840px]:max-w-full">
            Cadastre o seu negócio dentro da plataforma de forma rápida, sem precisar de
            muitos dados.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-[48px] justify-center mt-[96px] max-[840px]:flex-col-reverse max-[840px]:items-center max-[840px]:gap-[18px] max-[840px]:mt-[20px]">
        <div className="w-[40%] rounded-[4px] max-[1105px]:w-[60%] max-[840px]:w-full border-[1px] border-gray-300 overflow-hidden">
          <div
            className="wistia_embed wistia_async_x3qd99mt64 playerColor=4c1d95 autoPlay=true videoFoam=true settingsControl=false playbar=false playButton=false muted=false controlsVisibleOnLoad=false volumeControl=false smallPlayButton=false playlistLoop=true"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="mt-8 max-[840px]:mt-4">
          <p className="font-inter font-bold text-gray-600 text-xl max-[840px]:text-[18px]">
            2. Cadastre o seu Programa
          </p>
          <p className="max-w-[400px] w-full text-left font-inter font-normal text-base text-gray-500 max-[840px]:max-w-full">
            Crie seu programa de pontos em menos de 2 minutos na nossa plataforma.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[48px] justify-center mt-[96px] max-[840px]:flex-col-reverse max-[840px]:items-center max-[840px]:gap-[18px] max-[840px]:mt-[20px]">
        <div className="w-[40%] rounded-[4px] max-[1105px]:w-[60%] max-[840px]:w-full border-[1px] border-gray-300 overflow-hidden">
          <div
            className="wistia_embed wistia_async_v8uhq38lmv playerColor=4c1d95 autoPlay=true videoFoam=true settingsControl=false playbar=false playButton=false muted=false controlsVisibleOnLoad=false volumeControl=false smallPlayButton=false playlistLoop=true"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="mt-8 max-[840px]:mt-4">
          <p className="font-inter font-bold text-gray-600 text-xl max-[840px]:text-[18px]">
            3. Cadastre os Pontos
          </p>
          <p className="max-w-[400px] w-full text-left font-inter font-normal text-base text-gray-500 max-[840px]:max-w-full">
            Registre facilmente os pontos da compra dos clientes com apenas o número de
            telefone e o valor da compra.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-[48px] justify-center mt-[96px] max-[840px]:flex-col-reverse max-[840px]:items-center max-[840px]:gap-[18px] max-[840px]:mt-[20px]">
        <div className="w-[40%] rounded-[4px] max-[1105px]:w-[60%] max-[840px]:w-full border-[1px] border-gray-300 overflow-hidden">
          <div
            className="wistia_embed wistia_async_kpy4hlpe99 playerColor=4c1d95 autoPlay=true videoFoam=true settingsControl=false playbar=false playButton=false muted=false controlsVisibleOnLoad=false volumeControl=false smallPlayButton=false playlistLoop=true"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="mt-8 max-[840px]:mt-4">
          <p className="font-inter font-bold text-gray-600 text-xl max-[840px]:text-[18px]">
            4. Recompense
          </p>
          <p className="max-w-[400px] w-full text-left font-inter font-normal text-base text-gray-500 max-[840px]:max-w-full">
            Recompense os clientes em troca dos pontos acumulados por eles. Faça seus
            clientes se sentirem especiais
          </p>
        </div>
      </div>

      <CTAToWebsite
        title="Quero usar no meu negócio"
        className="bg-[#4c1d95] mb-5 mt-[50px]"
      />
    </section>
  );
};
