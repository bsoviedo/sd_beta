import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function ForMerchantsPage() {
  const { t } = useTranslation("common");

  const withoutItems = [
    t("how.mechanismSection.withoutItem1"),
    t("how.mechanismSection.withoutItem2"),
    t("how.mechanismSection.withoutItem3"),
    t("how.mechanismSection.withoutItem4")
  ];

  const withSDItems = [
    t("how.mechanismSection.withItem1"),
    t("how.mechanismSection.withItem2"),
    t("how.mechanismSection.withItem3"),
    t("how.mechanismSection.withItem4")
  ];

  const featureItems = [
    {
      title: t("how.featureSection.item1Title"),
      body: t("how.featureSection.item1Body")
    },
    {
      title: t("how.featureSection.item2Title"),
      body: t("how.featureSection.item2Body")
    },
    {
      title: t("how.featureSection.item3Title"),
      body: t("how.featureSection.item3Body")
    },
    {
      title: t("how.featureSection.item4Title"),
      body: t("how.featureSection.item4Body")
    },
    {
      title: t("how.featureSection.item5Title"),
      body: t("how.featureSection.item5Body")
    },
    {
      title: t("how.featureSection.item6Title"),
      body: t("how.featureSection.item6Body")
    }
  ];

  const industriesCopy = [
    {
      title: t("how.industriesSection.ind1Title"),
      body: t("how.industriesSection.ind1Body")
    },
    {
      title: t("how.industriesSection.ind2Title"),
      body: t("how.industriesSection.ind2Body")
    },
    {
      title: t("how.industriesSection.ind3Title"),
      body: t("how.industriesSection.ind3Body")
    }
  ];

  const startSteps = [
    {
      title: t("how.startStepsSection.step1Title"),
      body: t("how.startStepsSection.step1Body")
    },
    {
      title: t("how.startStepsSection.step2Title"),
      body: t("how.startStepsSection.step2Body")
    },
    {
      title: t("how.startStepsSection.step3Title"),
      body: t("how.startStepsSection.step3Body")
    }
  ];

  const betaStats = [
    t("home.betaSection.stat1"),
    t("home.betaSection.stat2"),
    t("home.betaSection.stat3")
  ];

  return (
    <Layout title={t("meta.howTitle")} description={t("meta.howDescription")}>
      <PageHero
        title={t("how.hero.titleExt")}
        description={t("how.hero.descriptionExt")}
        carouselSide="left"
      />

      <section className="sd-section sd-compact pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("how.problemSection.title")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="sd-blog-content">
                <p className="sd-text-muted mb-3" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: "1.7" }}>
                  {t("how.problemSection.body1")}
                </p>
                <p className="sd-text-muted mb-0" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: "1.7" }}>
                  {t("how.problemSection.body2")}
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="p-4 text-center" style={{ background: "rgba(31,138,76,0.05)", borderLeft: "4px solid var(--sd-primary)", borderRadius: "12px" }}>
                <p className="fw-bold mb-0" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", color: "var(--sd-primary)", lineHeight: "1.6" }}>
                  {t("how.problemSection.body3")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-compact pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("how.mechanismSection.headline")}</h2>
          <Row className="g-4">
            <Col md={6}>
              <article className="sd-comparison-card sd-card-compact h-100 p-4" style={{ borderRadius: "20px", background: "rgba(27,53,37,0.02)", border: "1px solid rgba(27,53,37,0.08)" }}>
                <h3 className="fs-4 fw-bold text-center mb-3" style={{ color: "var(--sd-dark)" }}>
                  {t("how.mechanismSection.withoutTitle")}
                </h3>
                <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
                  {withoutItems.map((item, idx) => (
                    <li key={idx} className="mb-2 p-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}>
                      ❌ {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Col>
            <Col md={6}>
              <article className="sd-comparison-card sd-card-compact h-100 p-4" style={{ borderRadius: "20px", background: "rgba(31, 138, 76, 0.04)", border: "1px solid rgba(31, 138, 76, 0.15)" }}>
                <h3 className="fs-4 fw-bold text-center mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("how.mechanismSection.withTitle")}
                </h3>
                <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
                  {withSDItems.map((item, idx) => (
                    <li key={idx} className="mb-2 p-2" style={{ borderBottom: "1px solid rgba(31,138,76,0.1)", fontSize: "clamp(1.05rem, 2vw, 1.25rem)", fontWeight: idx === 1 ? "600" : "normal" }}>
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Col>
          </Row>
          <Row className="g-4 mt-3 align-items-center">
            <Col lg={6}>
              <div className="sd-blog-highlight p-4 m-0" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
                <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: "1.6" }}>{t("how.mechanismSection.body")}</p>
              </div>
            </Col>
            <Col lg={6}>
              <blockquote className="sd-pull-quote sd-pull-quote-hero m-0 w-100">
                <p className="mb-0">&quot;{t("how.mechanismSection.quote")}&quot;</p>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("how.featureSection.title")}</h2>
          <Row className="g-4 sd-feature-grid">
            {featureItems.map((item, index) => (
              <Col md={6} key={item.title}>
                <article className="sd-feature-card sd-feature-card-hero h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="sd-feature-card-number">0{index + 1}</div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-compact pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("how.conservationStorySection.title")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="p-4 text-center d-flex flex-column justify-content-center" style={{ background: "rgba(31, 138, 76, 0.04)", borderRadius: "16px", minHeight: "180px", border: "1px solid rgba(31, 138, 76, 0.1)" }}>
                <span className="text-uppercase fw-bold text-muted d-block mb-2" style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)" }}>Beta Result</span>
                <h3 className="fw-extrabold text-primary mb-2" style={{ color: "var(--sd-primary)", fontWeight: "800", fontSize: "clamp(3.5rem, 5.5vw, 4.8rem)", lineHeight: "1" }}>32%</h3>
                <p className="fw-semibold mb-0" style={{ color: "var(--sd-dark)", fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}>Cart conversion rate uplift</p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="sd-blog-content">
                <p className="sd-text-muted mb-3" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: "1.7" }}>
                  {t("how.conservationStorySection.body1")}
                </p>
                <p className="sd-text-muted fw-semibold mb-0" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: "1.7", color: "var(--sd-primary)" }}>
                  {t("how.conservationStorySection.body2")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{t("how.industriesSection.title")}</h2>
          <Row className="g-4">
            {industriesCopy.map((item) => (
              <Col md={4} key={item.title}>
                <div className="sd-industry-item h-100 p-4" style={{ borderRadius: "16px", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                  <h3 style={{ color: "var(--sd-primary)", fontSize: "1.3rem" }}>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{t("how.startStepsSection.title")}</h2>
          <Row className="g-4 justify-content-center sd-step-list">
            {startSteps.map((step, index) => (
              <Col md={4} key={step.title}>
                <div className="sd-step-item h-100 d-flex flex-column justify-content-start p-4" style={{ borderRadius: "16px", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                  <div className="sd-step-header">
                    <div className="sd-step-number" style={{ background: "var(--sd-primary)", color: "#ffffff" }}>0{index + 1}</div>
                    <h3 style={{ fontSize: "1.25rem" }}>{step.title}</h3>
                  </div>
                  <p>{step.body}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/for-merchants">
              <button className="sd-cta-btn">{t("how.industriesSection.ctaBrand")}</button>
            </Link>
            <Link href="/conservation">
              <button className="sd-cta-btn sd-cta-secondary mt-3 ms-md-3">{t("how.industriesSection.ctaFaq")}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-last-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{t("how.betaStatsSection.title")}</h2>
          <Row className="g-4 justify-content-center">
            {betaStats.map((stat, idx) => (
              <Col md={4} key={idx}>
                <article className="sd-stat-card h-100 p-4 text-center d-flex flex-column justify-content-center" style={{ minHeight: "180px", borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.06)" }}>
                  <p className="mb-0 fw-semibold" style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "var(--sd-dark)" }}>{stat}</p>
                </article>
              </Col>
            ))}
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
