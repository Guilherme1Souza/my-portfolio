import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Dados de contato reaproveitáveis (Contato + Footer).
export const EMAIL = "guilhermeeduardo2016@outlook.com";

/**
 * @typedef {Object} Social
 * @property {string} key Identificador único (usado como key React).
 * @property {string} label Rótulo acessível (aria-label).
 * @property {string} href URL de destino (http(s) ou mailto).
 * @property {import("react").ComponentType<{ className?: string }>} Icon Ícone do react-icons.
 */

/** @type {Social[]} */
export const socials = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Guilherme1Souza",
    Icon: FaGithub,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guilhermeeduardo/",
    Icon: FaLinkedin,
  },
  {
    key: "email",
    label: "E-mail",
    href: `mailto:${EMAIL}`,
    Icon: FaEnvelope,
  },
];
