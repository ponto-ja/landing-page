'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { CTAToWebsite } from './cta-to-website';
import Mockup from '@/assets/images/mockup-pc.png';

export const Hero = () => {
  return (
    <section className="w-full mt-[80px] px-4 max-[767px]:mt-[50px]">
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

      <CTAToWebsite title="Criar programa de fidelidade grátis" className="mt-10 mb-8" />

      <Image
        src={Mockup.src}
        width={1280}
        height={100}
        alt="mockup"
        className="mx-auto max-[600px]:-mb-10"
      />

      {/* <p className="font-inter max-w-[740px] mx-auto text-center font-normal text-[18px] text-gray-500">
        Forneça pontos para as compras dos seus clientes para eles acumularem e trocarem
        por recompensas. Faça seus clientes se sentirem especiais com recompensas que eles
        adoram. Crie fidelidade com seus clientes que se converterá em lucros para seu
        negócio.{' '}
      </p> */}
    </section>
  );
};
