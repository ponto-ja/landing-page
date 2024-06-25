'use client';

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const websiteBaseURL = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

export const Hero = () => {
  return (
    <section className="w-full mt-[80px] max-[767px]:mt-[50px]">
      <h2 className="font-inter text-4xl min-[420px]:text-3xl sm:text-5xl md:text-8xl text-center font-black text-violet-900 mb-16">
        Clientes felizes <span className="text-[#d41d4c]">aumentam</span>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            'suas vendas',
            1000,
            'seu faturamento',
            1000,
            'sua retenção',
            1000,
            'seus ganhos',
            1000,
            'seu negócio',
            1000,
          ]}
          speed={65}
          cursor={true}
          className="font-inter text-4xl min-[420px]:text-3xl sm:text-5xl md:text-8xl text-center font-black text-[#25BFBF] block"
          repeat={Infinity}
        />
      </h2>

      <p className="font-inter w-full text-center font-bold text-xl text-gray-700">
        Seu negócio com um <span className="text-violet-900">programa de fidelidade</span>{' '}
        em menos de <span className="text-violet-900">2 minutos</span>
      </p>

      <p className="font-inter max-w-[740px] mx-auto px-2 text-center font-normal text-[18px] text-gray-500 mt-8">
        Forneça pontos para as compras dos seus clientes para eles acumularem e trocarem
        por recompensas. Faça seus clientes se sentirem especiais com recompensas que eles
        adoram. Crie fidelidade com seus clientes que se converterá em lucros para seu
        negócio.{' '}
      </p>

      <Link
        href={websiteBaseURL.concat('/dono-de-negocio/criar-conta')}
        className="bg-violet-900 text-white font-inter font-normal text-base rounded-md py-2 px-3 hover:opacity-80 transition-opacity duration-300 mx-auto block w-fit mt-12"
        target="_blank"
        rel="no-referrer">
        Criar programa de fidelidade grátis
      </Link>
    </section>
  );
};
