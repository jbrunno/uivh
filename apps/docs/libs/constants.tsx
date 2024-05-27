import {GithubIcon} from "@/components/icons";

export const homeCards = [
  {
    title: "Storybook",
    description: "Playgorud para testar componentes da nossa documentação.",
    icon: <GithubIcon className="text-[#00ACEE]" size={32} />,
    href: "https://storybook.dev.vhsys.com.br/",
    isExternal: true,
  },
  {
    title: "Boilerplates",
    description: "Boilerplates para iniciar novos projetos.",
    icon: <GithubIcon className="text-[#7289DA]" size={32} />,
    href: "#",
    isExternal: true,
  },
  {
    title: "GitLab",
    description: "Repositório do nosso core de componentes.",
    icon: <GithubIcon className="text-[#333] dark:text-[#E7E7E7]" size={32} />,
    href: "https://git.vhsys.com.br/front/frontend-core",
    isExternal: true,
  },
];
