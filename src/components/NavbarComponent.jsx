import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logoImg from '../assets/logoBrand.png';
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

export default function NavbarComponent() {
    return (
        <Navbar fluid rounded>
            <Link to='/'>
                <NavbarBrand>
                    <img src={logoImg} className="mr-3 h-6 sm:h-15" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">XenoAether</span>
                </NavbarBrand>
            </Link>
            <div className="flex md:order-2">
                <Link to="/Cart">
                    <IoIosCart className="text-4xl me-2 pt-1 text-white" />
                </Link>
                <Button>Get started</Button>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <Link to="/">
                    <NavbarLink href="#" active>Home</NavbarLink>
                </Link>
                <Link to="/Pricing">
                    <NavbarLink href="#">Pricing</NavbarLink>
                </Link>
                <Link to="/AllGames">
                    <NavbarLink href="#">All Games</NavbarLink>
                </Link>
            </NavbarCollapse>
        </Navbar>
    )
}