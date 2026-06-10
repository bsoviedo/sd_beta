import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function OurImpactPage() {
  const { t } = useTranslation("common");

  const counters = [
    { label: t("impact.countersSection.card1Label"), value: "12,340" },
    { label: t("impact.countersSection.card2Label"), value: "8,920" },
    { label: t("impact.countersSection.card3Label"), value: "1,280" },
    { label: t("impact.countersSection.card4Label"), value: "$2.1M" },
    { label: t("impact.countersSection.card5Label"), value: "10" },
    { label: t("impact.countersSection.card6Label"), value: "60,000+" }
  ];

  const betaStats = [
    t("impact.betaSection.stat1"),
    t("impact.betaSection.stat2"),
    t("impact.betaSection.stat3"),
    t("impact.betaSection.stat4")
  ];

  const validationItems = [
    { title: t("impact.validationSection.item1Title"), desc: t("impact.validationSection.item1Desc") },
    { title: t("impact.validationSection.item2Title"), desc: t("impact.validationSection.item2Desc") },
    { title: t("impact.validationSection.item3Title"), desc: t("impact.validationSection.item3Desc") },
    { title: t("impact.validationSection.item4Title"), desc: t("impact.validationSection.item4Desc") }
  ];

  const sdgs = [
    { title: t("impact.sdgsSection.sdg1Title"), body: t("impact.sdgsSection.sdg1Body") },
    { title: t("impact.sdgsSection.sdg2Title"), body: t("impact.sdgsSection.sdg2Body") },
    { title: t("impact.sdgsSection.sdg3Title"), body: t("impact.sdgsSection.sdg3Body") },
    { title: t("impact.sdgsSection.sdg6Title"), body: t("impact.sdgsSection.sdg6Body") },
    { title: t("impact.sdgsSection.sdg8Title"), body: t("impact.sdgsSection.sdg8Body") },
    { title: t("impact.sdgsSection.sdg13Title"), body: t("impact.sdgsSection.sdg13Body") },
    { title: t("impact.sdgsSection.sdg14Title"), body: t("impact.sdgsSection.sdg14Body") },
    { title: t("impact.sdgsSection.sdg15Title"), body: t("impact.sdgsSection.sdg15Body") }
  ];

  const partners = [
    {
      name: t("impact.partnersSection.partner1Name"),
      detail: t("impact.partnersSection.partner1Detail"),
      logo: "/img/logos/Log_Ter_NyA_Hor.png"
    },
    {
      name: t("impact.partnersSection.partner2Name"),
      detail: t("impact.partnersSection.partner2Detail"),
      logo: "/img/logos/logo-main-white.svg"
    }
  ];

  return (
    <Layout title={t("meta.impactTitle")} description={t("meta.impactDescription")}>
      <PageHero
        title={t("impact.hero.title")}
        description={t("impact.hero.description")}
        carouselSide="right"
      />

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <p className="text-muted mb-4">
            {t("impact.countersSection.lastUpdated")} {t("impact.countersSection.date")}
          </p>
          <Row className="g-4 justify-content-center">
            {counters.map((counter) => (
              <Col md={4} key={counter.label}>
                <article className="sd-counter-card h-100" style={{ borderRadius: "18px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)", padding: "2.5rem 1.5rem" }}>
                  <h3 style={{ fontSize: "3rem", fontWeight: "800", color: "var(--sd-primary)", marginBottom: "0.5rem" }}>{counter.value}</h3>
                  <p className="mb-0 text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>{counter.label}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("impact.betaSection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text" style={{ fontSize: "1.1rem" }}>
              {t("impact.betaSection.intro")}
            </p>
          </div>
          <Row className="g-4 justify-content-center">
            {betaStats.map((stat, idx) => (
              <Col md={6} key={idx}>
                <article className="sd-stat-card h-100 p-4 text-center d-flex align-items-center justify-content-center" style={{ minHeight: "130px", borderRadius: "16px" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ color: "var(--sd-dark)" }}>{stat}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("impact.validationSection.title")}</h2>
          <Row className="g-4 justify-content-center">
            {validationItems.map((val) => (
              <Col md={6} lg={3} key={val.title}>
                <article className="sd-team-card h-100 text-center p-4" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.06)" }}>
                  <h3 className="mb-2" style={{ fontSize: "1.15rem", color: "var(--sd-primary)" }}>{val.title}</h3>
                  <p className="small text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{val.desc}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("impact.sdgsSection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center mb-5" style={{ maxWidth: "760px" }}>
            <p className="sd-blog-text text-muted" style={{ fontSize: "1rem" }}>
              {t("impact.sdgsSection.desc")}
            </p>
          </div>
          <Row className="g-4">
            {sdgs.map((item) => (
              <Col md={6} lg={3} key={item.title}>
                <article className="sd-sdg-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <h3 className="mb-2" style={{ fontSize: "1rem", color: "var(--sd-primary)" }}>{item.title}</h3>
                  <p className="small text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{item.body}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("impact.partnersSection.title")}</h2>
          <Row className="g-4 justify-content-center">
            {partners.map((partner) => (
              <Col md={6} key={partner.name}>
                <article className="sd-partner-card h-100 p-4 text-center d-flex flex-column align-items-center justify-content-center" style={{ borderRadius: "16px", background: "rgba(31,138,76,0.03)" }}>
                  {partner.logo ? (
                    <div className="mb-3 d-flex align-items-center justify-content-center" style={{
                      height: "140px",
                      width: "250px",
                      background: partner.logo.includes("white") ? "var(--sd-primary)" : "transparent",
                      borderRadius: "8px",
                      padding: "8px 16px"
                    }}>
                      <img src={partner.logo} alt={`${partner.name} logo`} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    </div>
                  ) : (
                    <h3 style={{ color: "var(--sd-primary)" }} className="mb-3">{partner.name}</h3>
                  )}
                  <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.95rem" }}>{partner.detail}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("impact.scaleSection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-faq-criteria mb-4">
              <div className="sd-faq-criterion">
                <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.1rem" }}>{t("impact.scaleSection.metric1")}</h4>
                <p className="sd-blog-metric-text mb-0 fw-semibold">{t("impact.scaleSection.val1")}</p>
              </div>
              <div className="sd-faq-criterion">
                <h4 className="mb-2" style={{ color: "var(--sd-accent)", fontSize: "1.1rem" }}>{t("impact.scaleSection.metric2")}</h4>
                <p className="sd-blog-metric-text mb-0 fw-semibold">{t("impact.scaleSection.val2")}</p>
              </div>
              <div className="sd-faq-criterion">
                <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.1rem" }}>{t("impact.scaleSection.metric3")}</h4>
                <p className="sd-blog-metric-text mb-0 fw-semibold">{t("impact.scaleSection.val3")}</p>
              </div>
            </div>
            <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
              <p className="sd-blog-text mb-0 fw-bold">{t("impact.scaleSection.highlight")}</p>
            </div>
          </div>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>{t("impact.scaleSection.footer")}</p>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-4">{t("impact.transparencySection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">{t("impact.transparencySection.metric1")}</div>
              <div className="sd-blog-metric">{t("impact.transparencySection.metric2")}</div>
              <div className="sd-blog-metric">{t("impact.transparencySection.metric3")}</div>
            </div>
            <p className="sd-blog-text mb-3" style={{ fontSize: "1rem" }}>{t("impact.transparencySection.body1")}</p>
            <p className="sd-blog-text mb-4 text-muted" style={{ fontSize: "0.95rem" }}>{t("impact.transparencySection.body2")}</p>
          </div>
          <a href="mailto:damian@mandatum.co">
            <button className="sd-cta-btn mt-3">{t("impact.transparencySection.ctaButton")}</button>
          </a>
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
