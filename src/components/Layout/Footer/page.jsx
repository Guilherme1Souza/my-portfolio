import { socials } from "@/data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-verde-escuro text-white/70">
      <div className="w-[90%] max-w-[1440px] mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-white font-bold tracking-wide">Guilherme Souza</p>
          <p className="text-white/50 text-sm">Desenvolvedor Front-end</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ key, label, href, Icon }) => {
            const isMail = href.startsWith("mailto:");
            return (
              <a
                key={key}
                href={href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noreferrer"}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 transition-colors duration-200 hover:border-verde hover:text-verde focus:outline-none focus:ring-2 focus:ring-verde/40"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="w-[90%] max-w-[1440px] mx-auto py-5 text-center sm:text-left">
          <p className="text-white/40 text-xs tracking-wide">
            © {year} Guilherme Souza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
