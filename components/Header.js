import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "next-i18next";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 45);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (locale) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="light"
      className={`sd-topnav ${isScrolled ? "scrolled" : ""}`}
    >
      <Container fluid className="px-3 px-md-4">
        <Link href="/" className="d-flex align-items-center gap-2">
          <img src="/logos/Whale%20Top%20D%20Logo.png" alt="Mandatum logo" height="52" />
          <span className="sd-brand-text d-none d-md-inline">Mandatum</span>
        </Link>
        <Navbar.Toggle aria-controls="sd-navbar" />
        <Navbar.Collapse id="sd-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Link href="/" className="nav-link sd-nav-link">{t("nav.home")}</Link>
            <Link href="/about" className="nav-link sd-nav-link">{t("nav.about")}</Link>
            <Link href="/how-it-works" className="nav-link sd-nav-link">{t("nav.how")}</Link>
            <Link href="/faq" className="nav-link sd-nav-link">{t("nav.faq")}</Link>
            <div className="d-flex align-items-center gap-2 ms-lg-3 my-2 my-lg-0">
              <Button
                variant={router.locale === "en" ? "secondary" : "outline-secondary"}
                size="sm"
                onClick={() => switchLocale("en")}
              >
                EN
              </Button>
              <Button
                variant={router.locale === "es" ? "secondary" : "outline-secondary"}
                size="sm"
                onClick={() => switchLocale("es")}
              >
                ES
              </Button>
            </div>
            <Link href="/how-it-works" className="ms-lg-3">
              <button className="sd-cta-btn">{t("nav.cta")}</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
