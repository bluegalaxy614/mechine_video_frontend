'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { useStore } from '@/store/store';

import { siteConfig } from '@/config/site';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { deleteSession } from '@/utils/utils';

export const Navbar = () => {
  const { user, setUser } = useStore((state) => state);
  const router = useRouter();
  return (
    <div>
      <NextUINavbar
        maxWidth="xl"
        position="static"
        className="!h-[90px] z-[1000] fixed shadow-md"
      >
        <div className="flex w-[1280px] mx-auto justify-center items-center">
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
              {siteConfig.userNavItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: 'foreground' }),
                      'data-[active=true]:text-primary data-[active=true]:font-medium',
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
            <NavbarItem className="hidden lg:flex md:flex">
              {user ? (
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button className="flex justify-center items-center rounded-full bg-[#F4F4F4] min-w-[190px] conten-fit h-[65px] p-1 hover:pointer pr-[10px]">
                      <Avatar
                        className="h-[57px] w-[57px] border-2 border-default-500 border-[#4291EF]"
                        src={user.avatar || '/profile/user.png'}
                      />
                      <span className="mx-auto text-[20px] text-[#1F2B3E]">
                        {user.name}
                      </span>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile">
                      <Link href="/profile">profile</Link>
                    </DropdownItem>
                    <DropdownItem key="payment">
                      <Link href="/payment">payment</Link>
                    </DropdownItem>
                    <DropdownItem key="account">
                      <Link href="/account">account setting</Link>
                    </DropdownItem>
                    <DropdownItem key="logout">
                      <div
                        className="flex justify-between items-center gap-2"
                        onClick={() => {
                          setUser(null);
                          deleteSession();
                          router.push('/login');
                        }}
                      >
                        ログアウト
                        <Image
                          width={39}
                          height={39}
                          src="/icons/icon-logout.png"
                          alt="logout"
                        />
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link href="/login">ログイン</Link>
              )}
            </NavbarItem>
          </NavbarContent>

          <NavbarContent
            className="lg:hidden md:hidden basis-1 pl-4"
            justify="end"
          >
            <NavbarMenuToggle className="w-[48px] h-[48px]" />
          </NavbarContent>

          <NavbarMenu>
            <div className="mx-4 mt-2 flex flex-col gap-2 mt-[30px]">
              {siteConfig.userNavItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    // color={
                    //   index === 2
                    //     ? 'primary'
                    //     : index === siteConfig.userNavItems.length - 1
                    //       ? 'danger'
                    //       : 'foreground'
                    // }
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
              <NavbarMenuItem>
                <Divider />
                <div
                  className="flex justify-start items-center gap-2"
                  onClick={() => {
                    setUser(null);
                    deleteSession();
                    router.push('/login');
                  }}
                >
                  ログアウト
                  <Image
                    width={39}
                    height={39}
                    src="/icons/icon-logout.png"
                    alt=""
                  />
                </div>
              </NavbarMenuItem>
            </div>
          </NavbarMenu>
        </div>
      </NextUINavbar>
    </div>
  );
};
