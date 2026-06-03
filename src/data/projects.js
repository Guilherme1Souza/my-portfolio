// Dados da seção de Projetos.
//
// Para usar uma imagem real:
//   1. Coloque o screenshot em src/images/ (ex.: projeto-1.png)
//   2. Importe no topo:        import proj1 from "@/images/projeto-1.png";
//   3. Aponte em `image`:       image: proj1
//
// Enquanto `image` for null, o ProjectCard mostra um placeholder estilizado.

/**
 * @typedef {Object} Project
 * @property {string} id Identificador único (usado como key React).
 * @property {string} title Nome do projeto.
 * @property {string} description Descrição curta do projeto.
 * @property {string[]} stack Tecnologias usadas.
 * @property {string} liveUrl URL do projeto no ar.
 * @property {import("next/image").StaticImageData | null} image Screenshot importado, ou null para placeholder.
 * @property {string} imageAlt Texto alternativo da imagem.
 */

/** @type {Project[]} */
export const projects = [
  {
    id: "projeto-1",
    title: "Projeto Um",
    description:
      "Descrição curta do projeto: o que ele faz, o problema que resolve e qual foi o seu papel no desenvolvimento.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    image: null,
    imageAlt: "Screenshot do Projeto Um",
  },
  {
    id: "projeto-2",
    title: "Projeto Dois",
    description:
      "Descrição curta do projeto: o que ele faz, o problema que resolve e qual foi o seu papel no desenvolvimento.",
    stack: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://example.com",
    image: null,
    imageAlt: "Screenshot do Projeto Dois",
  },
  {
    id: "projeto-3",
    title: "Projeto Três",
    description:
      "Descrição curta do projeto: o que ele faz, o problema que resolve e qual foi o seu papel no desenvolvimento.",
    stack: ["Next.js", "GraphQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    image: null,
    imageAlt: "Screenshot do Projeto Três",
  },
];
