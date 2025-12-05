"use client";

import React from "react";
import MainLayout from "../MainLayout/page";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowDownTrayIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <MainLayout>
      <header className="w-full flex  items-center bg-bege">
        <NavigationMenu.Root className="hidden md:flex w-full max-w-5xl justify-between items-center">
          <NavigationMenu.List className="flex items-center gap-10">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#sobre"
                className="text-title text-md hover:text-textSecondary transition"
              >
                Sobre
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#servicos"
                className="text-title text-md hover:text-textSecondary transition"
              >
                Serviços
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#portfolio"
                className="text-title text-md hover:text-textSecondary transition"
              >
                Portfólio
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#contato"
                className="text-title text-md hover:text-textSecondary transition"
              >
                Contato
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <button className="w-36 h-9 bg-title rounded-2xl flex items-center justify-center hover:opacity-90 transition cursor-pointer">
            <span className="text-bege text-md font-medium">Download CV</span>
            <ArrowDownTrayIcon className="h-5 w-5 ml-2 text-bege" />
          </button>
        </NavigationMenu.Root>
        <MobileNav />
      </header>
    </MainLayout>
  );
};

export default NavBar;

const MobileNav = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="md:hidden text-title">
        <Bars3Icon className="h-8 w-8" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content
          className="
            fixed left-0 top-0 h-full w-[260px] 
            bg-bege shadow-xl p-6 flex flex-col gap-6
            animate-slideIn
          "
        >
          <button className="text-title text-2xl self-start justify-start">
            <Dialog.Close className="text-title">
              <XMarkIcon className="h-8 w-8" />
            </Dialog.Close>
          </button>
          <nav className="flex flex-col gap-5 mt-4">
            <a
              href="#sobre"
              className="text-title text-lg hover:text-textSecondary"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-title text-lg hover:text-textSecondary"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-title text-lg hover:text-textSecondary"
            >
              Portfólio
            </a>
            <a
              href="#contato"
              className="text-title text-lg hover:text-textSecondary"
            >
              Contato
            </a>
          </nav>
          <button className="w-full h-10 mt-4 bg-title rounded-xl flex items-center justify-center hover:opacity-90 transition">
            <span className="text-bege text-sm font-medium">Download CV</span>
            <ArrowDownTrayIcon className="h-5 w-5 ml-2 text-bege" />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
