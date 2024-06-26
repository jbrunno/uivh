"use client";

import {useRef, useState, FC, ReactNode, Key} from "react";
import {
  link,
  Navbar as VhsysUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Link,
  Button,
  Kbd,
} from "@vhsys-ui/react";
import {dataFocusVisibleClasses} from "@vhsys-ui/theme";
import {isAppleDevice} from "@react-aria/utils";
import {clsx} from "@vhsys-ui/shared-utils";
import NextLink from "next/link";
import {usePathname} from "next/navigation";
import {includes} from "lodash";
import {useEffect} from "react";
import {usePress} from "@react-aria/interactions";
import {useFocusRing} from "@react-aria/focus";

import {currentVersion} from "@/utils/version";
import {Route} from "@/libs/docs/page";
import {LargeLogo, SmallLogo, ThemeSwitch} from "@/components";
import {GithubIcon, SearchLinearIcon} from "@/components/icons";
import {useIsMounted} from "@/hooks/use-is-mounted";
import {DocsSidebar} from "@/components/docs/sidebar";
import {useCmdkStore} from "@/components/cmdk";
import {trackEvent} from "@/utils/va";

export interface NavbarProps {
  routes: Route[];
  mobileRoutes?: Route[];
  tag?: string;
  slug?: string;
  children?: ReactNode;
}

export const Navbar: FC<NavbarProps> = ({children, routes, mobileRoutes = [], slug, tag}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const [commandKey, setCommandKey] = useState<"ctrl" | "command">("command");

  const ref = useRef<HTMLElement>(null);
  const isMounted = useIsMounted();

  const pathname = usePathname();

  const cmdkStore = useCmdkStore();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    setCommandKey(isAppleDevice() ? "command" : "ctrl");
  }, []);

  const handleOpenCmdk = () => {
    cmdkStore.onOpen();
    trackEvent("Navbar - Search", {
      name: "navbar - search",
      action: "press",
      category: "cmdk",
    });
  };

  const {pressProps} = usePress({
    onPress: handleOpenCmdk,
  });
  const {focusProps, isFocusVisible} = useFocusRing();

  const docsPaths = ["/docs/guide/introduction", "/docs/guide/installation"];

  const searchButton = (
    <Button
      aria-label="Quick search"
      className="text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
      endContent={
        <Kbd className="hidden py-0.5 px-2 lg:inline-block" keys={commandKey}>
          K
        </Kbd>
      }
      startContent={
        <SearchLinearIcon
          className="text-base text-default-400 pointer-events-none flex-shrink-0"
          size={18}
          strokeWidth={2}
        />
      }
      onPress={handleOpenCmdk}
    >
      Pesquisa rápida...
    </Button>
  );

  if (pathname.includes("/examples")) {
    return null;
  }

  const navLinkClasses = clsx(link({color: "foreground"}), "data-[active=true]:text-primary");

  const handleVersionChange = (key: Key) => {
    if (key === "v1") {
      const newWindow = window.open("https://v1.vhsys.com.br", "_blank", "noopener,noreferrer");

      if (newWindow) newWindow.opener = null;
    }
  };

  const handlePressNavbarItem = (name: string, url: string) => {
    trackEvent("NavbarItem", {
      name,
      action: "press",
      category: "navbar",
      data: url,
    });
  };

  return (
    <VhsysUINavbar
      ref={ref}
      className={clsx({
        "z-[100001]": isMenuOpen,
      })}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            aria-label="Home"
            className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
            href="/"
            onClick={() => handlePressNavbarItem("Home", "/")}
          >
            <SmallLogo className="w-6 h-6 md:hidden" />
            <LargeLogo className="h-5 md:h-6" />
          </NextLink>
          {ref.current ? <p>v{currentVersion}</p> : <div className="w-[74px]" />}
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start items-center">
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(docsPaths, pathname)}
              href="/docs/guide/installation"
              onClick={() => handlePressNavbarItem("Docs", "/docs/guide/installation")}
            >
              Documentação
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="flex w-full gap-2 sm:hidden" justify="end">
        <NavbarItem className="flex h-full items-center">
          <Link
            isExternal
            aria-label="Github"
            className="p-1"
            href="https://git.vhsys.com.br/front/frontend-core"
            onClick={() =>
              handlePressNavbarItem("Gitlab", "https://git.vhsys.com.br/front/frontend-core")
            }
          >
            <GithubIcon className="text-default-600 dark:text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex h-full items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="flex h-full items-center">
          <button
            className={clsx(
              "transition-opacity p-1 hover:opacity-80 rounded-full cursor-pointer outline-none",
              // focus ring
              ...dataFocusVisibleClasses,
            )}
            data-focus-visible={isFocusVisible}
            {...focusProps}
            {...pressProps}
          >
            <SearchLinearIcon className="mt-px text-default-600 dark:text-default-500" size={20} />
          </button>
        </NavbarItem>
        <NavbarItem className="w-10 h-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-full h-full pt-1"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchButton}</NavbarItem>
        <NavbarItem className="hidden md:flex" />
        {ref.current ? <p>v{currentVersion}</p> : <div className="w-[74px]" />}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden sm:flex lg:hidden ml-4"
        />
      </NavbarContent>

      <NavbarMenu>
        <DocsSidebar className="mt-4" routes={[...mobileRoutes, ...routes]} slug={slug} tag={tag} />
        {children}
      </NavbarMenu>
    </VhsysUINavbar>
  );
};
