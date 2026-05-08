import Image from "next/image";
import { WhatsAppForm } from "@/components/WhatsAppForm";

const services = [
  {
    icon: "💻",
    title: "Computadores e notebooks",
    text: "Manutenção preventiva e corretiva para equipamentos pessoais e profissionais.",
  },
  {
    icon: "⚙️",
    title: "Formatação e sistemas",
    text: "Instalação de sistema operacional, drivers, programas essenciais e configuração inicial.",
  },
  {
    icon: "🛡️",
    title: "Vírus e lentidão",
    text: "Remoção de ameaças, limpeza lógica, otimização e recuperação básica de desempenho.",
  },
  {
    icon: "🔧",
    title: "Hardware e peças",
    text: "Diagnóstico de falhas, troca de componentes e orientação sobre peças compatíveis.",
  },
];

const benefits = [
  {
    title: "Atendimento rápido",
    text: "O contato vai direto para o WhatsApp com os dados essenciais para agilizar o atendimento.",
  },
  {
    title: "Diagnóstico técnico",
    text: "Você informa o dispositivo, o tipo de problema, a urgência e uma descrição clara do caso.",
  },
  {
    title: "Serviços focados no problema",
    text: "Manutenção, formatação, vírus, lentidão, hardware e outros serviços técnicos da NERTEC.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#34495f] font-black text-[#b3d3ef] shadow-lg">
              N
            </div>

            <div>
              <strong className="block text-lg leading-tight text-[#34495f]">
                NERTEC
              </strong>
              <span className="text-sm text-slate-500">
                Francisco Nertan Assistência Técnica
              </span>
            </div>
          </a>

          <a
            href="#diagnostico"
            className="hidden rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-600 sm:inline-flex"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24"
      >
        <div>
          <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#34495f]">
            Atendimento técnico direto pelo WhatsApp
          </span>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#34495f] md:text-6xl">
            Seu computador voltou a dar problema?{" "}
            <span className="text-[#28aae1]">A NERTEC resolve.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Manutenção, formatação, remoção de vírus, troca de peças e suporte
            técnico para deixar seu computador ou notebook funcionando com
            segurança, desempenho e estabilidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#diagnostico"
              className="rounded-full bg-green-500 px-6 py-4 font-bold text-white shadow-xl transition hover:bg-green-600"
            >
              Enviar problema pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-[#34495f] transition hover:bg-slate-100"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <strong className="block text-3xl text-[#34495f]">1</strong>
              <span className="text-sm text-slate-500">
                mensagem organizada
              </span>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <strong className="block text-3xl text-[#34495f]">8+</strong>
              <span className="text-sm text-slate-500">
                serviços técnicos
              </span>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <strong className="block text-3xl text-[#34495f]">100%</strong>
              <span className="text-sm text-slate-500">
                fluxo via WhatsApp
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-4 shadow-2xl">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[#34495f]">
            <Image
              src="/francisco-nertan.png"
              alt="Francisco Nertan, especialista em assistência técnica"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/95 p-5 shadow-xl">
              <strong className="block text-lg text-[#34495f]">
                Francisco Nertan
              </strong>
              <p className="mt-1 text-sm text-slate-600">
                Assistência técnica em hardware, software e otimização de
                desempenho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-[#34495f] md:text-5xl">
            Serviços para resolver o problema na origem.
          </h2>

          <p className="max-w-md text-slate-600">
            Aqui o foco está nos serviços técnicos da NERTEC e em encaminhar o
            problema direto para o WhatsApp.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-5 font-bold text-[#34495f]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-80 flex-col justify-between overflow-hidden rounded-[2rem] bg-[#34495f] p-8 text-white shadow-xl">
          <div>
            <div className="text-5xl font-black tracking-tight text-[#b3d3ef] md:text-7xl">
              NERTEC
            </div>
            <p className="mt-2 text-xl text-[#b3d3ef]">
              Assistência técnica em computadores e notebooks
            </p>
          </div>

          <p className="mt-10 max-w-md text-blue-100">
            Atendimento objetivo para organizar a solicitação e acelerar o
            diagnóstico do seu equipamento.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="font-bold text-[#34495f]">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="diagnostico" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-2xl md:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[1.5rem] bg-[#34495f] p-8 text-white">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Descreva o problema em menos de 1 minuto.
            </h2>

            <p className="mt-4 text-blue-100">
              O WhatsApp abrirá com uma mensagem profissional e organizada para
              Francisco Nertan.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-blue-50">
              <p>
                <strong>1.</strong> Preencha seus dados.
              </p>
              <p>
                <strong>2.</strong> Informe o tipo de dispositivo.
              </p>
              <p>
                <strong>3.</strong> Envie a mensagem pelo WhatsApp.
              </p>
            </div>
          </aside>

          <WhatsAppForm />
        </div>
      </section>

      <footer className="bg-[#34495f] px-5 py-8 text-blue-100">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 md:flex-row">
          <p>
            <strong className="text-[#b3d3ef]">
              NERTEC — Francisco Nertan Assistência Técnica.
            </strong>{" "}
            Tecnologia com diagnóstico claro e suporte confiável.
          </p>

          <p>Atendimento via WhatsApp.</p>
        </div>
      </footer>
    </main>
  );
}