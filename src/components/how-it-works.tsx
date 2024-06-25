import { HowItWorksStep } from './how-it-works-step';

export const HowItWorks = () => {
  return (
    <section className="w-full mt-[24px] bg-white p-4" id="como-funciona?">
      <h2 className="w-full text-center font-inter font-semibold text-2xl md:text-3xl text-gray-700 mt-5">
        Como funciona?
      </h2>

      <div className="w-fit grid grid-cols-3 items-start mx-auto mt-8 max-[1200px]:grid-cols-2 max-[750px]:grid-cols-1 max-[750px]:gap-y-7">
        <HowItWorksStep
          title="1. Crie o Programa"
          description="Crie seu programa de pontos em menos de 2 minutos na nossa plataforma."
        />
        <HowItWorksStep
          title="2. Cadastre os Pontos"
          description="Registre facilmente os pontos da compra dos clientes com apenas o número de telefone e o valor da compra."
        />
        <HowItWorksStep
          title="3. Recompense"
          description="Recompense os clientes em troca dos pontos acumulados por eles. Faça seus clientes se sentirem especiais."
        />
      </div>
    </section>
  );
};
