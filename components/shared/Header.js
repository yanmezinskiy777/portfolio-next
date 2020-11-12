import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Link from "next/link";

const NavbarCustomLink = (props) => {
  const { title, href } = props;
  return (
    <NavItem>
      <Link href={href}>
        <NavLink>{title}</NavLink>
      </Link>
    </NavItem>
  );
};


const AdminCustomLink = (props) => {
  const { title, href } = props;
  return (
      <Link href={href}>
        {title}
      </Link>
  );
};

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdmin, setIsOpenAdmin] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const LoginLink = () => (
    <a className="nav-link port-navbar-link pointer" href="/api/v1/login">
      Login
    </a>
  );

  const LoginOut = () => (
    <a className="nav-link port-navbar-link pointer" href="/api/v1/logout">
      Logout
    </a>
  );

  const AdminBar = () => (
        <Dropdown isOpen={isOpenAdmin} toggle={() => setIsOpenAdmin(prevState => !prevState)}>
        <DropdownToggle className="port-navbar-link dropdown-toggle-link" caret>
          Admin
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
             <AdminCustomLink title="Create portfolio" href="/portfolios/new" />
          </DropdownItem>
          <DropdownItem>
             <AdminCustomLink title="Editor" href="/blogs/editor" />
          </DropdownItem>
          <DropdownItem>
             <AdminCustomLink title="Dashboard" href="/dashboard" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      );
    
  

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        dark
        expand="md"
      >
        <Link href="/">
          <a className="navbar-brand port-bavbar-brand">Yan portfolio</a>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarCustomLink title="Home" href="/" />
            <NavbarCustomLink title="About" href="/about" />
            <NavbarCustomLink title="Portfolios" href="/portfolios" />
            <NavbarCustomLink title="Blogs" href="/blogs" />
            <NavbarCustomLink title="CV" href="/cv" />
            {/* <NavbarCustomLink title="secret" href="/secret" />
            <NavbarCustomLink title="admin" href="/onlyadmin" />
            <NavbarCustomLink title="adminssr" href="/onlyadminssr" /> */}
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {user && <AdminBar />}
                {user && <LoginOut />}
                {!user && <LoginLink />}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
