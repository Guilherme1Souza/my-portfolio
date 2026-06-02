// Dados da seção de Depoimentos (Testemunhas).
//
// Para usar foto real:
//   1. Coloque a imagem em src/images/ (ex.: depoimento-1.jpg)
//   2. Importe no topo:  import avatar1 from "@/images/depoimento-1.jpg";
//   3. Aponte em `avatar`: avatar: avatar1
//
// Enquanto `avatar` for null, mostramos um círculo com as iniciais do nome.

export const testimonials = [
  {
    id: "depoimento-1",
    quote:
      "Profissional dedicado e atento aos detalhes. Entregou as interfaces com qualidade, sempre preocupado com performance e experiência do usuário.",
    name: "Nome Sobrenome",
    role: "Tech Lead",
    company: "Empresa",
    avatar: null,
  },
  {
    id: "depoimento-2",
    quote:
      "Trabalhar com o Guilherme foi ótimo: comunicação clara, código organizado e muita proatividade para resolver problemas do início ao fim.",
    name: "Nome Sobrenome",
    role: "Product Manager",
    company: "Empresa",
    avatar: null,
  },
  {
    id: "depoimento-3",
    quote:
      "Evoluiu rápido e assumiu responsabilidades importantes no front-end. Confiável, colaborativo e com forte senso de UX.",
    name: "Nome Sobrenome",
    role: "Desenvolvedor Sênior",
    company: "Empresa",
    avatar: null,
  },
];
