import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./themeToggler";
import MobileNav from "./mobileNav";
import MaxWidthWrapper from "./maxWidthWrapper";
import { CustomNavigationMenu } from "./navigationMenu";
import { Search, ShoppingCart, X } from "lucide-react";
const Navbar = async () => {
    return (
        <MaxWidthWrapper>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-2">
                    <Link href={"/"}>
                        <Image src={`/logo.png`} priority alt="logo" width={80} height={80} />
                    </Link>
                    <div className="hidden lg:block">
                        <CustomNavigationMenu />
                    </div>
                    <div className="items-center gap-x-6 flex">
                        <div className="items-center gap-x-5 hidden lg:flex">
                            <Button>Sign In</Button>
                            <Button variant="secondary">Sign Up</Button>
                        </div>
                        <div className="hidden lg:block">
                            <ThemeToggler />
                        </div>
                        <Search />
                        <ShoppingCart />
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};
export default Navbar;