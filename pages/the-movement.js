import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function TheMovementPage() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.aboutTitle")} description={t("meta.aboutDescription")}>
      <PageHero
        title={t("about.hero.titleExt")}
        description={t("about.hero.descriptionExt")}
        carouselSide="right"
      />

      <section className="sd-section sd-blog-section">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("about.originSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-4" style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--sd-dark)" }}>
                  {t("about.originSection.body1")}
                </p>
                <p className="sd-blog-text mb-0 fw-medium" style={{ fontSize: "1.1rem", color: "var(--sd-primary)" }}>
                  {t("about.originSection.body2")}
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <blockquote className="sd-pull-quote sd-pull-quote-hero m-0 w-100">
                <p className="mb-3">&quot;{t("about.originSection.quote")}&quot;</p>
                <footer className="sd-quote-author">{t("about.originSection.author")}</footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("about.problemSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-2">
              <div className="sd-blog-highlight p-4" style={{ background: "rgba(31, 138, 76, 0.06)", borderRadius: "12px", borderLeft: "4px solid var(--sd-primary)" }}>
                <p className="sd-blog-text mb-3 fw-semibold" style={{ fontSize: "1.05rem" }}>✓ {t("about.problemSection.bullet1")}</p>
                <p className="sd-blog-text mb-3 fw-semibold" style={{ fontSize: "1.05rem" }}>✓ {t("about.problemSection.bullet2")}</p>
                <p className="sd-blog-text fw-semibold" style={{ fontSize: "1.05rem" }}>✓ {t("about.problemSection.bullet3")}</p>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="sd-blog-content">
                <p className="sd-blog-text fw-semibold mb-0" style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "var(--sd-primary)" }}>
                  {t("about.problemSection.body2")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("about.insightSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  {t("about.insightSection.body1")}
                </p>
                <div className="sd-blog-highlight p-4 mb-4" style={{ background: "rgba(31, 138, 76, 0.06)", borderRadius: "12px" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ color: "var(--sd-primary)" }}>{t("about.insightSection.body3")}</p>
                </div>
                <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                  {t("about.insightSection.body2")}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-column gap-3">
                <div className="sd-blog-metrics flex-column align-items-stretch gap-3 w-100">
                  <div className="sd-blog-metric text-center p-3 w-100 m-0" style={{ background: "rgba(31, 138, 76, 0.04)", border: "1px solid rgba(31, 138, 76, 0.12)", borderRadius: "12px", color: "var(--sd-primary)", fontWeight: "bold" }}>
                    {t("about.insightSection.metric1")}
                  </div>
                  <div className="sd-blog-metric text-center p-3 w-100 m-0" style={{ background: "rgba(31, 138, 76, 0.04)", border: "1px solid rgba(31, 138, 76, 0.12)", borderRadius: "12px", color: "var(--sd-primary)", fontWeight: "bold" }}>
                    {t("about.insightSection.metric2")}
                  </div>
                  <div className="sd-blog-metric text-center p-3 w-100 m-0" style={{ background: "rgba(31, 138, 76, 0.04)", border: "1px solid rgba(31, 138, 76, 0.12)", borderRadius: "12px", color: "var(--sd-primary)", fontWeight: "bold" }}>
                    {t("about.insightSection.metric3")}
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link href="/for-merchants" className="w-100">
                    <button className="sd-cta-btn w-100">{t("about.insightSection.link")}</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("about.solutionSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-2">
              <div className="sd-blog-content">
                <div className="sd-blog-point p-4 mb-3" style={{ background: "rgba(31, 138, 76, 0.05)", borderLeft: "4px solid var(--sd-primary)", borderRadius: "8px" }}>
                  <p className="sd-blog-text fw-medium mb-0" style={{ fontSize: "1.05rem" }}>{t("about.solutionSection.body")}</p>
                </div>
                <p className="sd-blog-text text-muted fst-italic mt-3" style={{ fontSize: "0.95rem" }}>
                  {t("about.solutionSection.footer")}
                </p>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="d-flex flex-column gap-3">
                <div className="sd-blog-metric p-3 text-center m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.04)", borderRadius: "10px" }}>{t("about.solutionSection.shopper")}</div>
                <div className="sd-blog-metric p-3 text-center m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.04)", borderRadius: "10px" }}>{t("about.solutionSection.brand")}</div>
                <div className="sd-blog-metric p-3 text-center m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.04)", borderRadius: "10px" }}>{t("about.solutionSection.nature")}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("about.visionSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="sd-blog-content">
                <div className="p-4 mb-4" style={{ background: "rgba(31, 138, 76, 0.03)", borderRadius: "12px", border: "1px solid rgba(31, 138, 76, 0.08)" }}>
                  <span className="text-uppercase fw-bold text-muted small d-block mb-1">{t("about.visionSection.goalLabel")}</span>
                  <h3 className="h4 fw-bold mb-0" style={{ color: "var(--sd-primary)" }}>{t("about.visionSection.goalValue")}</h3>
                </div>
                <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                  {t("about.visionSection.footer")}
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                <Col md={6} lg={4}>
                  <div className="sd-faq-criterion h-100 text-center p-3 d-flex flex-column justify-content-center" style={{ minHeight: "130px", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "12px", background: "white" }}>
                    <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.05rem", fontWeight: "bold" }}>
                      {t("about.visionSection.engineTitle")}
                    </h4>
                    <p className="sd-blog-metric-text mb-0 fw-semibold" style={{ fontSize: "0.9rem" }}>
                      {t("about.visionSection.engineBody")}
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="sd-faq-criterion h-100 text-center p-3 d-flex flex-column justify-content-center" style={{ minHeight: "130px", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "12px", background: "white" }}>
                    <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.05rem", fontWeight: "bold" }}>
                      {t("about.visionSection.opportunityTitle")}
                    </h4>
                    <p className="sd-blog-metric-text mb-0 fw-semibold" style={{ fontSize: "0.9rem" }}>
                      {t("about.visionSection.opportunityBody")}
                    </p>
                  </div>
                </Col>
                <Col md={12} lg={4}>
                  <div className="sd-faq-criterion h-100 text-center p-3 d-flex flex-column justify-content-center" style={{ minHeight: "130px", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "12px", background: "white" }}>
                    <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.05rem", fontWeight: "bold" }}>
                      {t("about.visionSection.impactTitle")}
                    </h4>
                    <p className="sd-blog-metric-text mb-0 fw-semibold" style={{ fontSize: "0.9rem" }}>
                      {t("about.visionSection.impactBody")}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-4">{t("about.validatorsSection.cta")}</h2>
          <Row className="g-3 justify-content-center">
            <Col xs="auto">
              <Link href="/for-merchants">
                <button className="sd-cta-btn">{t("nav.merchants")}</button>
              </Link>
            </Col>
            <Col xs="auto">
              <Link href="/conservation">
                <button className="sd-cta-btn sd-cta-secondary">{t("nav.movement")}</button>
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
