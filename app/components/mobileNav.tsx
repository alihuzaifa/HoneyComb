"use client"
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ThemeToggler from "./themeToggler";
import { usePathname } from "next/navigation";
const MobileNav = () => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side={"left"}>
                <div className="flex flex-col justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-8">
                        <Link href={"/"}>
                            <Image src={`/logo.png`} priority alt="logo" width={54} height={54} />
                        </Link>
                        <div className="flex flex-col gap-y-6 justify-center items-center">
                            <Link href="/" legacyBehavior passHref className={`${pathname === "/" && "bg-accent/50"}`}>
                                Home
                            </Link>
                            <Link href="/" legacyBehavior passHref className={`${pathname === "/about" && "bg-accent/50"}`}>
                                About
                            </Link>
                            <Link href="/" legacyBehavior passHref className={`${pathname === "/faq" && "bg-accent/50"}`}>
                                FAQs
                            </Link>
                            <Link href="/" legacyBehavior passHref className={`${pathname === "/shop" && "bg-accent/50"}`}>
                                Shop
                            </Link>
                            <Link href="/" legacyBehavior passHref className={`${pathname === "/contact" && "bg-accent/50"}`}>
                                Contact
                            </Link>
                        </div>
                        <div className="lg:hidden block">
                            <ThemeToggler />
                        </div>
                        <Button className="lg:hidden block">
                            Sign in
                        </Button>
                        <Button className="lg:hidden block">
                            Sign up
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNav;