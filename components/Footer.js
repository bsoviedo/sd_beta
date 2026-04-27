import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="sd-footer mt-5">
      <Container fluid className="px-4 px-lg-5 py-5">
        <Row className="g-4 align-items-start">
          <Col lg={7}>
            <div className="d-flex flex-wrap gap-4">
              <Link href="/" className="sd-footer-link fw-semibold">{t("nav.home")}</Link>
              <Link href="/about" className="sd-footer-link fw-semibold">{t("nav.about")}</Link>
              <Link href="/how-it-works" className="sd-footer-link fw-semibold">{t("nav.how")}</Link>
              <Link href="/faq" className="sd-footer-link fw-semibold">{t("nav.faq")}</Link>
            </div>
            <p className="sd-footer-text mb-0 mt-4">{t("footer.copy1")}</p>
            <p className="sd-footer-text mb-0">{t("footer.copy2", { year: new Date().getFullYear() })}</p>
          </Col>
          <Col lg={5}>
            <div className="d-flex align-items-center justify-content-lg-end gap-3">
              <img src="/logos/Whale%20Top%20D%20Logo.png" alt="SD monogram" height="56" />
              <img src="/logos/Wordmark%20with%20TM.png" alt="Sustainable Discounts wordmark" height="38" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
