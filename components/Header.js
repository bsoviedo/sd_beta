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
        </Link>
        <Navbar.Toggle aria-controls="sd-navbar" />
        <Navbar.Collapse id="sd-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Link href="/" className="nav-link sd-nav-link">{t("nav.home")}</Link>
            <Link href="/about-us" className="nav-link sd-nav-link">{t("nav.aboutus")}</Link>
            <Link href="/for-merchants" className="nav-link sd-nav-link">{t("nav.merchants")}</Link>
            <Link href="/for-shoppers" className="nav-link sd-nav-link">{t("nav.shoppers")}</Link>
            <Link href="/the-movement" className="nav-link sd-nav-link">{t("nav.conservation")}</Link>
            <Link href="/impact" className="nav-link sd-nav-link">{t("nav.impact")}</Link>
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
            <Link href="https://apps.shopify.com/mandatum-app?locale=es&st_source=autocomplete&surface_detail=autocomplete_apps" target="_blank"
              rel="noopener noreferrer" className="ms-lg-3">
              <button className="sd-cta-btn">{t("nav.cta")}</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
