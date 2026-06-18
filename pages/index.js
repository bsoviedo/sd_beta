import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import Hero from "components/sd/Hero";
import Benefits from "components/sd/Benefits";

export default function HomePage() {
  const { t } = useTranslation("common");

  const audienceCards = [
    {
      title: t("home.audiencesSection.card1.title"),
      headline: t("home.audiencesSection.card1.headline"),
      body: t("home.audiencesSection.card1.body"),
      foot: t("home.audiencesSection.card1.foot"),
      href: "/for-merchants",
      cta: t("home.audiencesSection.card1.cta")
    },
    {
      title: t("home.audiencesSection.card2.title"),
      headline: t("home.audiencesSection.card2.headline"),
      body: t("home.audiencesSection.card2.body"),
      foot: t("home.audiencesSection.card2.foot"),
      href: "/for-shoppers",
      cta: t("home.audiencesSection.card2.cta")
    },
    {
      title: t("home.audiencesSection.card3.title"),
      headline: t("home.audiencesSection.card3.headline"),
      body: t("home.audiencesSection.card3.body"),
      foot: t("home.audiencesSection.card3.foot"),
      href: "/conservation",
      cta: t("home.audiencesSection.card3.cta")
    }
  ];

  const proofItems = [
    t("home.proofItems.item1", "Earthshot Prize 2025 - Nominated"),
    t("home.proofItems.item2", "GEF and World Bank - Currently in due diligence"),
    t("home.proofItems.item3", "Change100 Winner 2026 - Top Impact Startup to Watch"),
    t("home.proofItems.item4", "Cornell University Life Changing Labs - Accelerator Winner, Summer 2024"),
    t("home.proofItems.item5", "Panthera - Partnership agreed in principle"),
    t("home.proofItems.item6", "Terrasos - Active partnership, biodiversity credits live")
  ];

  return (
    <Layout title={t("meta.homeTitle")} description={t("meta.homeDescription")}>
      <Hero />
      <Benefits />

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="sd-section-title text-center mb-3">{t("home.ideaSection.headline")}</h2>
          <p className="sd-home-copy text-center mx-auto mb-2" style={{ maxWidth: "780px" }}>
            {t("home.ideaSection.body1")}
          </p>
          <p className="sd-home-copy text-center mx-auto mb-5 fw-bold" style={{ maxWidth: "780px", color: "var(--sd-primary)" }}>
            {t("home.ideaSection.body2")}
          </p>
          <Row className="g-4 justify-content-center">
            {[t("home.ideaSection.step1"), t("home.ideaSection.step2"), t("home.ideaSection.step3")].map((item, index) => (
              <Col md={4} key={index}>
                <article className="sd-step-card h-100">
                  <h3 className="sd-step-number" style={{ color: "#ffffff" }}>
                    {t("home.ideaSection.stepLabel", "Step")} {index + 1}
                  </h3>
                  <p className="mb-0">{item}</p>
                </article>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/for-merchants">
              <button className="sd-cta-btn">{t("home.ideaSection.linkText")}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="sd-section-title text-center mb-5">{t("home.audiencesSection.title")}</h2>
          <Row className="g-4">
            {audienceCards.map((card) => (
              <Col md={4} key={card.title}>
                <article className="sd-audience-card h-100 d-flex flex-column justify-content-between p-4" style={{ background: "#ffffff", borderRadius: "16px", boxShadow: "0 10px 24px rgba(35,59,45,0.06)" }}>
                  <div>
                    <h3 className="mb-2" style={{ fontSize: "1.5rem" }}>{card.title}</h3>
                    <h4 className="fs-6 fw-bold mb-3" style={{ color: "var(--sd-accent)" }}>{card.headline}</h4>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "rgba(28,56,39,0.8)" }}>{card.body}</p>
                  </div>
                  <div>
                    <p className="fw-semibold text-muted small mt-2 mb-3">{card.foot}</p>
                    <Link href={card.href}>
                      <button className="sd-link-btn w-100 mt-2">{card.cta}</button>
                    </Link>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <div className="sd-proof-strip text-center">
            <h2 className="sd-section-title text-center">{t("home.audiencesSection.validatedLabel")}</h2>
            <ul className="sd-proof-items list-unstyled d-flex flex-wrap justify-content-center gap-3 mx-auto" style={{ maxWidth: "980px" }}>
              {proofItems.map((item) => (
                <li className="sd-proof-item p-3" key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="sd-section pt-0 sd-beta-block">
        <Container className="px-4 px-lg-5">
          <h2 className="sd-section-title text-center mb-4">{t("home.betaSection.label")}</h2>
          <p className="sd-section-label text-center mb-2">{t("home.betaSection.headline")}</p>
          <Row className="g-4 justify-content-center">
            {[t("home.betaSection.stat1"), t("home.betaSection.stat2"), t("home.betaSection.stat3")].map((stat, index) => (
              <Col md={6} lg={4} key={index}>
                <article className="sd-stat-card sd-stat-card-highlight h-100 d-flex align-items-center justify-content-center text-center">
                  <div>
                    <p className="sd-stat-card-text mb-4">{stat}</p>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
          <p className="text-center mt-4 mx-auto sd-beta-description" style={{ maxWidth: "720px" }}>
            {t("home.betaSection.body")}
          </p>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-title mb-4">{t("home.closingSection.headline")}</h2>
          <Row className="g-3 justify-content-center">
            <Col md={4}>
              <Link href="/for-merchants">
                <button className="sd-cta-btn w-100">{t("home.closingSection.merchant")}</button>
              </Link>
            </Col>
            <Col md={4}>
              <Link href="/conservation">
                <button className="sd-cta-btn w-100">{t("home.closingSection.nonShopify")}</button>
              </Link>
            </Col>
            <Col md={4}>
              <Link href="/the-team">
                <button className="sd-cta-btn w-100">{t("home.closingSection.movement")}</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
