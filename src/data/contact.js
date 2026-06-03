import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Dados de contato reaproveitáveis (Contato + Footer).
export const EMAIL = "guilhermeeduardo2016@outlook.com";

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
