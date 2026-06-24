import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="sd-footer mt-5">
      <Container fluid className="px-4 px-lg-5 py-5">
        <Row className="g-4 align-items-start">

          <Col xs={6} lg={3}>
            <nav className="d-flex flex-column gap-2">
              <Link href="/" className="sd-footer-link fw-semibold">{t("nav.home")}</Link>
              <Link href="/the-movement" className="sd-footer-link fw-semibold">{t("nav.movement")}</Link>
              <Link href="/for-merchants" className="sd-footer-link fw-semibold">{t("nav.merchants")}</Link>
              <Link href="/for-shoppers" className="sd-footer-link fw-semibold">{t("nav.shoppers")}</Link>
              <Link href="/conservation" className="sd-footer-link fw-semibold">{t("nav.conservation")}</Link>
            </nav>
          </Col>

          <Col xs={6} lg={3}>
            <nav className="d-flex flex-column gap-2">
              <Link href="/the-team" className="sd-footer-link fw-semibold">{t("nav.team")}</Link>
              <Link href="/impact" className="sd-footer-link fw-semibold">{t("nav.impact")}</Link>
              <Link href="/faq" className="sd-footer-link fw-semibold">FAQ</Link>
              <Link href="/blog" className="sd-footer-link fw-semibold">Blog</Link>
              <Link href="/terms-of-service" className="sd-footer-link fw-semibold">{t("footer.terms")}</Link>
            </nav>
          </Col>

          <Col lg={6}>
            <div className="d-flex flex-column align-items-lg-end">
              <p className="sd-footer-text fw-semibold mb-2">{t("footer.followUs")}</p>
              <div className="d-flex gap-3 mb-4">
                <a href="https://www.facebook.com/mymandatum" target="_blank" rel="noreferrer" className="sd-footer-link">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.instagram.com/mymandatum/" target="_blank" rel="noreferrer" className="sd-footer-link">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com/mymandatum" target="_blank" rel="noreferrer" className="sd-footer-link">
                  <FaTwitter size={24} />
                </a>
              </div>
              <div className="d-flex align-items-center gap-2 mb-3">
                <img src="/logos/Whale%20Top%20D%20Logo.png" alt="Mandatum monogram" height="44" />
                <img src="/logos/Wordmark%20with%20TM.png" alt="Mandatum wordmark" height="30" />
              </div>
              <p className="sd-footer-subtext mb-1">{t("footer.tagline")}</p>
              <p className="sd-footer-subtext mb-2">{t("footer.copy2", { year: new Date().getFullYear() })}</p>
              <div className="d-flex gap-3">
                <Link href="/privacy-policy" className="sd-footer-link sd-footer-subtext">{t("footer.privacy")}</Link>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
