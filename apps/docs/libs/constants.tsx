import {GithubIcon} from "@/components/icons";

export const communityAccounts = [
  {
    title: "Storybook",
    description: "For announcements, tips and general information.",
    icon: <GithubIcon className="text-[#00ACEE]" size={32} />,
    href: "#",
    isExternal: true,
  },
  {
    title: "Boilerplate",
    description: "To get involved in the community, ask questions and share tips.",
    icon: <GithubIcon className="text-[#7289DA]" size={32} />,
    href: "#",
    isExternal: true,
  },
  {
    title: "GitLab",
    description: "To report bugs, request features and contribute to the project.",
    icon: <GithubIcon className="text-[#333] dark:text-[#E7E7E7]" size={32} />,
    href: "https://git.vhsys.com.br/front/frontend-core",
    isExternal: true,
  },
];
