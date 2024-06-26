import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  return (
    <section className="w-full mt-[24px] bg-white p-4" id="dúvidas">
      <h2 className="w-full text-center font-inter font-semibold text-2xl md:text-3xl text-gray-700 mt-5">
        Tire suas dúvidas
      </h2>
      <p className="font-inter text-center text-gray-600 text-base mt-2">
        Encontre respostas rápidas para as dúvidas mais comuns sobre a Ponto Já.
      </p>

      <div className="max-w-[600px] w-full mx-auto mt-8 mb-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="Como-funciona-a-plataforma?">
            <AccordionTrigger className="font-inter font-medium text-base text-gray-700 hover:no-underline">
              Como funciona a plataforma?
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-base text-gray-600">
              Somos uma plataforma que auxilia pequenos e médios negócios a criarem
              programas de fidelidade digital. Desenvolvemos nossa solução para substituir
              métodos tradicionais, como cartões impressos, que são caros e ineficientes.
              Oferecemos uma abordagem moderna para você e seu negócio fidelizarem
              clientes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="O-que-preciso-fazer-para-começar-na-plataforma?">
            <AccordionTrigger className="font-inter font-medium text-base text-gray-700 hover:no-underline">
              O que preciso fazer para começar na plataforma?
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-base text-gray-600">
              Crie sua conta usando seu nome, seu sobrenome e seu melhor e-mail. Feito
              isso, você já pode criar e gerenciar seu programa, cadastrar participantes,
              cadastrar pontos e fornecer recompensas aos seus clientes. Além disso, fique
              tranquilo que não exigimos nenhum método de pagamento no processo de
              cadastro da sua conta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Como-cadastrar-o-meu-programa-de-fidelidade?">
            <AccordionTrigger className="font-inter font-medium text-base text-gray-700 hover:no-underline">
              Como cadastrar o meu programa de fidelidade?
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-base text-gray-600">
              No seu primeiro acesso após criar a sua conta, você deverá cadastrar seu
              programa. Para isso, basta informar um nome, a taxa de pontos (valor em
              compras e/ou serviços para ganhar 1 ponto) e as recompensas do programa.
              Feito isso, você pode finalizar o cadastro que o seu programa de pontos será
              criado dentro da nossa plataforma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Como-cadastrar-pontos-aos-meus-clientes?">
            <AccordionTrigger className="font-inter font-medium text-base text-gray-700 hover:no-underline">
              Como cadastrar pontos aos meus clientes?
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-base text-gray-600">
              Na opção “Painel” há um botão chamado “Cadastrar pontos”. Ao clicar nele,
              abrirá um formulário para você informar o número de telefone do cliente e o
              valor de sua compra. Ao confirmar, os pontos são automaticamente fornecidos
              ao cliente, ou seja, já pontuou dentro do programa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Como-fornecer-recompensas-aos-clientes?">
            <AccordionTrigger className="font-inter font-medium text-base text-gray-700 hover:no-underline">
              Como fornecer recompensas aos clientes?
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-base text-gray-600">
              Na opção “Participantes”, selecione o cliente que irá receber uma
              recompensa. Ao selecionar, abrirá uma tela com informações do cliente e as
              recompensas do seu programa. Selecione a recompensa desejada, com base nos
              pontos acumulados do cliente, e confirme. Feito isso, os pontos necessários
              da recompensa serão automaticamente debitados dos pontos do cliente, e você
              já pode fornecer a recompensa.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
