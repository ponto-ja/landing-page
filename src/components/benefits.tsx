import { Gauge, Gem, PartyPopper, Rocket, TrendingUp, Users } from 'lucide-react';
import { BenefitCard } from './benefit-card';
import { CTAToWebsite } from './cta-to-website';

export const Benefits = () => {
  return (
    <section className="w-full mt-[80px] bg-violet-900 p-4" id="benefícios">
      <h2 className="w-full text-center font-inter font-semibold text-2xl md:text-3xl text-white mt-5">
        Benefícios para seu negócio
      </h2>

      <div className="w-fit grid grid-cols-3 items-start gap-y-5 mx-auto mt-8 max-[1200px]:grid-cols-2 max-[750px]:grid-cols-1 max-[750px]:gap-y-0">
        <BenefitCard
          icon={Gauge}
          title="Economia de Tempo e Dinheiro"
          description="Nossa plataforma ajuda seu negócio a economizar, eliminando a necessidade de
        cartões de fidelidade de papel, carimbos e impressões gráficas. Reduza despesas ao
        migrar para o digital e aumente sua lucratividade."
        />
        <BenefitCard
          icon={Rocket}
          title="Aumento de Vendas"
          description="Eleve a frequência e o valor das compras incentivando seus clientes a acumular pontos que podem ser trocados por recompensas."
        />
        <BenefitCard
          icon={Users}
          title="Retenção de Clientes"
          description="Desenvolva um programa de pontos que recompensa seus clientes por cada compra realizada. Proporcione benefícios atraentes em troca dos pontos acumulados e observe como clientes valorizados retornam continuamente."
        />
        <BenefitCard
          icon={PartyPopper}
          title="Propagação do Negócio"
          description="Com um programa de fidelidade, o poder da divulgação se potencializa. Clientes satisfeitos se transformam em seus principais divulgadores, recomendando sua marca para amigos e familiares."
        />
        <BenefitCard
          icon={TrendingUp}
          title="Maior Consumo"
          description="Programas de pontos incentivam um maior consumo, pois os clientes buscam acumular pontos rapidamente para acessar as recompensas oferecidas."
        />
        <BenefitCard
          icon={Gem}
          title="Fortalecimento do Negócio"
          description="Um programa de pontos eficiente evidencia o valor que você atribui aos seus clientes, reforçando sua reputação e imagem no mercado."
        />
      </div>

      <CTAToWebsite
        title="Quero fidelizar meus clientes"
        className="bg-[#FFFF] mb-5 mt-10 text-violet-900"
      />
    </section>
  );
};
