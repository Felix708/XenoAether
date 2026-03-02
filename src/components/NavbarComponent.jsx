import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logoImg from '../assets/logoBrand.png';
import { Link } from "react-router-dom";

export default function NavbarComponent() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
                <img src={logoImg} className="mr-3 h-6 sm:h-15" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">XenoAether</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Button>Get started</Button>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <Link to="/">
                    <NavbarLink href="#" active>Home</NavbarLink>
                </Link>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <Link to="/AllGames">
                    <NavbarLink href="#">All Games</NavbarLink>
                </Link>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}