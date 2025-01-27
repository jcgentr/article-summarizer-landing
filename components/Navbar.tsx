import Image from "next/image";
import Link from "next/link";
import gistrLogo from "../app/images/icon-32.png";
import { Button } from "./ui/button";

export default async function NavBar() {
  return (
    <nav className="w-full border-b">
      <div className="flex h-16 items-center justify-between mx-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h2 className="flex items-center">
              <Image
                src={gistrLogo}
                className="mr-1 flex-shrink-0"
                alt="Gistr Logo"
                width="32"
                height="32"
              />
              <span className="text-2xl font-bold">Gistr</span>
            </h2>
          </Link>

          <div className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild>
            <Link href="https://app.getgistr.com/signup">Sign up</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://app.getgistr.com/login">Log in</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
