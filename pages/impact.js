import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function ImpactPage() {
  const { t, i18n } = useTranslation("common");
  const isEs = i18n.language?.startsWith("es");

  const counters = [
    { label: t("impact.countersSection.card1Label"), value: "33" },
    { label: t("impact.countersSection.card2Label"), value: "8,731" },
    { label: t("impact.countersSection.card3Label"), value: "+1300" },
    { label: t("impact.countersSection.card4Label"), value: "$570" },
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
    { title: t("impact.sdgsSection.sdg1Title"), body: t("impact.sdgsSection.sdg1Body"), logo: isEs ? "/img/logos/sdg1_es.png" : "/img/logos/sdg1.svg", color: "#E5243B" },
    { title: t("impact.sdgsSection.sdg2Title"), body: t("impact.sdgsSection.sdg2Body"), logo: isEs ? "/img/logos/sdg2_es.png" : "/img/logos/sdg2.svg", color: "#DDA63A" },
    { title: t("impact.sdgsSection.sdg3Title"), body: t("impact.sdgsSection.sdg3Body"), logo: isEs ? "/img/logos/sdg3_es.png" : "/img/logos/sdg3.svg", color: "#4C9F38" },
    { title: t("impact.sdgsSection.sdg6Title"), body: t("impact.sdgsSection.sdg6Body"), logo: isEs ? "/img/logos/sdg6_es.png" : "/img/logos/sdg6.svg", color: "#26BDE2" },
    { title: t("impact.sdgsSection.sdg8Title"), body: t("impact.sdgsSection.sdg8Body"), logo: isEs ? "/img/logos/sdg8_es.png" : "/img/logos/sdg8.svg", color: "#A21942" },
    { title: t("impact.sdgsSection.sdg13Title"), body: t("impact.sdgsSection.sdg13Body"), logo: isEs ? "/img/logos/sdg13_es.png" : "/img/logos/sdg13.svg", color: "#3F7E44" },
    { title: t("impact.sdgsSection.sdg14Title"), body: t("impact.sdgsSection.sdg14Body"), logo: isEs ? "/img/logos/sdg14_es.png" : "/img/logos/sdg14.svg", color: "#0A97D9" },
    { title: t("impact.sdgsSection.sdg15Title"), body: t("impact.sdgsSection.sdg15Body"), logo: isEs ? "/img/logos/sdg15_es.png" : "/img/logos/sdg15.svg", color: "#56C02B" }
  ];

  const partners = [
    {
      name: t("impact.partnersSection.partner1Name"),
      detail: t("impact.partnersSection.partner1Detail"),
      logo: "/img/logos/Log_Ter_NyA_Hor.png",
      web: "https://www.terrasos.co/"
    },
    {
      name: t("impact.partnersSection.partner2Name"),
      detail: t("impact.partnersSection.partner2Detail"),
      logo: "/img/logos/logo-main-white.svg",
      web: "https://www.panthera.org/"
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
          <Row className="g-4 justify-content-center">
            {sdgs.map((item) => (
              <Col sm={6} md={4} lg={3} key={item.title}>
                <article className="sd-sdg-hover-card">
                  <div className="sdg-logo-wrapper">
                    <img src={item.logo} alt={item.title} className="sdg-logo-img" />
                  </div>
                  <div className="sdg-hover-overlay" style={{ backgroundColor: item.color + "F2" }}>
                    <h3 className="sdg-overlay-title">{item.title}</h3>
                    <p className="sdg-overlay-body">{item.body}</p>
                  </div>
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
                    <a href={partner.web} target="_blank" rel="noreferrer">
                      <div className="mb-3 d-flex align-items-center justify-content-center" style={{
                        height: "140px",
                        width: "250px",
                        background: partner.logo.includes("white") ? "var(--sd-primary)" : "transparent",
                        borderRadius: "8px",
                        padding: "8px 16px"
                      }}>
                        <img src={partner.logo} alt={`${partner.name} logo`} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                      </div>
                    </a>
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

      <style>{`
        .sd-sdg-hover-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          background: #ffffff;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .sd-sdg-hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
        }
        .sdg-logo-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .sdg-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .sd-sdg-hover-card:hover .sdg-logo-wrapper {
          filter: blur(5px) brightness(0.3);
          transform: scale(1.08);
        }
        .sdg-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #ffffff;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .sd-sdg-hover-card:hover .sdg-hover-overlay {
          opacity: 1;
        }
        .sdg-overlay-title {
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.3;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          padding-bottom: 0.5rem;
          width: 100%;
        }
        .sdg-overlay-body {
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          font-weight: 500;
        }
        @media (max-width: 575px) {
          .sdg-hover-overlay {
            padding: 0.75rem;
          }
          .sdg-overlay-title {
            font-size: 0.85rem;
            margin-bottom: 0.35rem;
            padding-bottom: 0.35rem;
          }
          .sdg-overlay-body {
            font-size: 0.75rem;
            line-height: 1.35;
          }
        }
      `}</style>
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
