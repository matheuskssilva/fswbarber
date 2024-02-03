"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Calendar,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  SheetContent,
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

const Header = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  const handleSignInClick = () => signIn("goog");

  return (
    <Card>
      <CardContent className="flex p-5 justify-between flex-row items-center">
        <Image src="/Logo.png" alt="Fsw Barber" width={120} height={22} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex justify-between items-center px-5 py-6">
                <div className="flex items-center gap-3 ">
                  <Avatar>
                    <AvatarImage
                      src={data?.user.image ?? ""}
                      alt={data?.user.name ?? ""}
                    />
                  </Avatar>

                  <h2 className="font-bold capitalize">{data.user.name}</h2>
                </div>

                <Button variant="secondary" size="icon">
                  <LogOutIcon onClick={handleLogoutClick} />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col px-5 py-6 gap-3">
                <div className="flex items-center gap-2 ">
                  <UserIcon size={32} />
                  <h2 className="font-bold">Olá, Faça seu Login!</h2>
                </div>
                <Button
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={handleSignInClick}
                >
                  <LogInIcon className="mr-2" size={18} />
                  Fazer Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon className="mr-2" size={18} />
                  Início
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/bookings">
                    <Calendar className="mr-2" size={18} />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
