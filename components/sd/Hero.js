import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="sd-hero">
      <Container fluid className="px-0">
        <Row className="mx-0">
          <Col lg={6} className="sd-hero-media sd-hero-left px-3 px-md-4 px-lg-5">
            <div className="sd-hero-left-decor" aria-hidden="true">
              <span className="sd-leaf sd-leaf-top" />
              <span className="sd-leaf sd-leaf-bottom" />
              <span className="sd-blob sd-blob-mid" />
            </div>
            <div className="sd-nature-depth" aria-hidden="true">
              <span className="sd-canopy sd-canopy-left" />
              <span className="sd-hill sd-hill-left" />
              <span className="sd-birds sd-birds-left" />
              <span className="sd-vine sd-vine-left" />
              <span className="sd-leaf-cluster sd-leaf-cluster-left" />
              <span className="sd-forest-line sd-forest-line-left" />
            </div>
            <div className="sd-hero-card">
              <img
                className="sd-wordmark-hero"
                src="/logos/Wordmark%20with%20TM.png"
                alt="Sustainable Discounts wordmark"
              />
            </div>
          </Col>
          <Col lg={6} className="sd-hero-content sd-hero-right d-flex align-items-center">
            <div className="sd-nature-depth" aria-hidden="true">
              <span className="sd-canopy sd-canopy-right" />
              <span className="sd-hill sd-hill-right" />
              <span className="sd-birds sd-birds-right" />
              <span className="sd-vine sd-vine-right" />
              <span className="sd-leaf-cluster sd-leaf-cluster-right" />
              <span className="sd-forest-line sd-forest-line-right" />
            </div>
            <Container className="px-4 px-lg-5 py-5 py-lg-0">
              <h1>{t("home.hero.title")}</h1>
              <p className="mb-4">{t("home.hero.subtitle")}</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#how"><button className="sd-cta-btn">{t("home.hero.primaryCta")}</button></a>
                <a href="#newsletter"><Button className="sd-outline-btn">{t("home.hero.secondaryCta")}</Button></a>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
