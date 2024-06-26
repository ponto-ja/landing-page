import { Check, Zap } from 'lucide-react';
import { CTAToWebsite } from './cta-to-website';

export const Plans = () => {
  return (
    <section className="w-full mt-[24px] bg-violet-900 p-4" id="preços">
      <h2 className="w-full text-center font-inter font-semibold text-2xl md:text-3xl text-white mt-5">
        Nossos planos
      </h2>
      <p className="font-inter text-center text-white text-base mt-2">
        Sem multas ou tempo mínimo. Cancele a qualquer momento.
      </p>

      <div className="w-fit grid grid-cols-3 items-start gap-5 mx-auto mt-10 mb-5 max-[980px]:grid-cols-1">
        <div className="max-w-[460px] w-full p-4 flex flex-col bg-white rounded-md">
          <p className="font-inter font-bold text-2xl text-gray-700">Gratuito</p>
          <p className="font-inter font-bold text-4xl text-gray-600 mt-2 mb-4 line-through">
            R$ 59,90
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Período gratuito de 1 mês.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Criação e gerenciamento de um programa de pontos.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Sem limite para cadastro de pontos.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Sem limite de participantes no programa.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Acesso ao nosso suporte.
              </span>
            </li>
          </ul>
          <CTAToWebsite title="Criar conta grátis" className="mt-6 w-full text-center" />
        </div>

        <div className="max-w-[460px] w-full p-4 flex flex-col bg-white rounded-md relative">
          <span className="absolute right-4 top-4 bg-[#d38c08] py-[6px] p-2 rounded-md text-white font-inter font-medium flex items-center gap-1 animate-bounce shadow-md shadow-gray-400">
            <Zap size={20} strokeWidth={2.2} />
            Mais popular
          </span>

          <p className="font-inter font-bold text-2xl text-gray-700">Anual</p>
          <p className="font-inter font-bold text-4xl text-gray-600 mt-2 mb-4 max-[1430px]:mb-0">
            R$ 49,90<span className="text-gray-500 font-semibold text-sm">/mês</span>
            <span className="font-semibold text-sm text-[#d41d4c] max-[1430px]:hidden">
              {' '}
              *Desconto de R$ 120,00 ao ano*
            </span>
          </p>
          <p className="font-semibold text-sm text-[#d41d4c] hidden max-[1430px]:block mb-3">
            *Desconto de R$ 120,00 ao ano*
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Assinatura com duração de 1 ano.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Criação e gerenciamento de um programa de pontos.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Sem limite para cadastro de pontos.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Sem limite de participantes no programa.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Acesso ao nosso suporte.
              </span>
            </li>
          </ul>
          <CTAToWebsite title="Escolher plano" className="mt-6 w-full text-center" />
        </div>

        <div className="max-w-[460px] w-full p-4 flex flex-col bg-white rounded-md">
          <p className="font-inter font-bold text-2xl text-gray-700">Mensal</p>
          <p className="font-inter font-bold text-4xl text-gray-600 mt-2 mb-4">
            R$ 59,90
            <span className="font-semibold text-sm text-gray-500">/mês</span>
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Assinatura com duração de 1 mês.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Criação e gerenciamento de um programa de pontos.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Sem limite para cadastro de pontos.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Sem limite de participantes no programa.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check color="#4c1d95" strokeWidth={3} size={22} />
              <span className="font-inter text-sm text-gray-600">
                Acesso ao nosso suporte.
              </span>
            </li>
          </ul>
          <CTAToWebsite title="Escolher plano" className="mt-6 w-full text-center" />
        </div>
      </div>
    </section>
  );
};
