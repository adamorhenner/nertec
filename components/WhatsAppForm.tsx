"use client";

import { FormEvent, useState } from "react";

type FormDataState = {
  nome: string;
  telefone: string;
  dispositivo: string;
  problema: string;
  urgencia: string;
  horario: string;
  descricao: string;
};

export function WhatsAppForm() {
  const [formData, setFormData] = useState<FormDataState>({
    nome: "",
    telefone: "",
    dispositivo: "",
    problema: "",
    urgencia: "",
    horario: "Qualquer horário",
    descricao: "",
  });

  const [error, setError] = useState("");

  function updateField(field: keyof FormDataState, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredFields: Array<keyof FormDataState> = [
      "nome",
      "telefone",
      "dispositivo",
      "problema",
      "urgencia",
      "descricao",
    ];

    const hasEmptyField = requiredFields.some(
      (field) => !formData[field].trim()
    );

    if (hasEmptyField) {
      setError("Preencha todos os campos obrigatórios antes de enviar.");
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    if (!whatsappNumber) {
      setError("Número do WhatsApp não configurado no arquivo .env.local.");
      return;
    }

    const message = `
Olá, Francisco Nertan! Gostaria de solicitar um atendimento técnico.

*Dados do cliente*
Nome: ${formData.nome}
Telefone: ${formData.telefone}

*Informações do dispositivo*
Tipo de dispositivo: ${formData.dispositivo}
Tipo de problema: ${formData.problema}
Urgência: ${formData.urgencia}
Melhor horário para contato: ${formData.horario}

*Descrição do problema*
${formData.descricao}

Aguardo orientação sobre o diagnóstico e o próximo passo.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <Input
        label="Nome *"
        value={formData.nome}
        onChange={(value) => updateField("nome", value)}
        placeholder="Digite seu nome"
      />

      <Input
        label="Telefone *"
        value={formData.telefone}
        onChange={(value) => updateField("telefone", value)}
        placeholder="(00) 00000-0000"
      />

      <Select
        label="Tipo de dispositivo *"
        value={formData.dispositivo}
        onChange={(value) => updateField("dispositivo", value)}
        options={["Computador", "Notebook", "Celular", "Impressora", "Outro"]}
      />

      <Select
        label="Tipo de problema *"
        value={formData.problema}
        onChange={(value) => updateField("problema", value)}
        options={[
          "Hardware",
          "Software",
          "Lentidão",
          "Vírus",
          "Formatação",
          "Peça danificada",
          "Instalação de programas",
          "Outro",
        ]}
      />

      <Select
        label="Urgência *"
        value={formData.urgencia}
        onChange={(value) => updateField("urgencia", value)}
        options={[
          "Baixa — posso aguardar",
          "Média — preciso resolver em breve",
          "Alta — preciso de atendimento rápido",
          "Urgente — equipamento essencial parado",
        ]}
      />

      <Select
        label="Melhor horário"
        value={formData.horario}
        onChange={(value) => updateField("horario", value)}
        options={["Qualquer horário", "Manhã", "Tarde", "Noite"]}
      />

      <label className="grid gap-2 md:col-span-2">
        <span className="font-bold text-[#34495f]">
          Descrição do problema *
        </span>
        <textarea
          value={formData.descricao}
          onChange={(event) => updateField("descricao", event.target.value)}
          placeholder="Ex.: notebook liga, mas trava; apareceu tela azul; preciso formatar; computador está muito lento..."
          className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#28aae1] focus:ring-4 focus:ring-blue-100"
        />
      </label>

      {error && (
        <p className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-600 md:col-span-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="rounded-full bg-green-500 px-6 py-4 font-bold text-white shadow-xl transition hover:bg-green-600 md:col-span-2"
      >
        Enviar problema pelo WhatsApp
      </button>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-bold text-[#34495f]">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#28aae1] focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="grid min-w-0 gap-2">
      <span className="font-bold text-[#34495f]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-0 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#28aae1] focus:ring-4 focus:ring-blue-100"
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}