import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logoImg from '../assets/logoBrand.png';

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
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">All Platforms</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}