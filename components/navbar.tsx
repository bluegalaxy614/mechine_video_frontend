'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";

export const Navbar = () => {

  return (
    <div>
      <NextUINavbar
        maxWidth="xl"
        position="static"
        className="!h-[90px] z-[1000] fixed shadow-md"
      >
        <div className="flex w-[1440px] mx-auto justify-center items-center">
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                {/* <Logo /> */}
                <p className="font-bold text-[40px] text-[#4291ef]">LOGO</p>
              </NextLink>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
            <ul className="hidden lg:flex md:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
            {/* <div className="flex items-center rounded-full bg-[#F4F4F4] w-[194px] h-[65px] p-1 hover:pointer">
                      <Avatar
                        className="h-[57px] w-[57px] border-2 border-default-500 border-[#4291EF]"
                        src="/profile/3.png"
                      />
                      <span className="mx-auto text-[20px] text-[#1F2B3E]">
                        高橋 文哉
                      </span>
                    </div> */}
            <NavbarItem className="hidden lg:flex md:flex">
              <div>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button className="flex items-center rounded-full bg-[#F4F4F4] w-[194px] h-[65px] p-1 hover:pointer">
                      <Avatar
                        className="h-[57px] w-[57px] border-2 border-default-500 border-[#4291EF]"
                        src="/profile/3.png"
                      />
                      <span className="mx-auto text-[20px] text-[#1F2B3E]">
                        高橋 文哉
                      </span>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                      My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics">
                      Analytics
                    </DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="lg:hidden md:hidden basis-1 pl-4" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>

          <NavbarMenu>
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={
                      index === 2
                        ? "primary"
                        : index === siteConfig.navMenuItems.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    href="#"
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        </div>
      </NextUINavbar>
    </div>

  );
};
