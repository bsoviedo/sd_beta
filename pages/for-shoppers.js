import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function ShoppersPage() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.blogTitle")} description={t("meta.blogDescription")}>
      <PageHero
        title={t("shoppers.hero.title")}
        description={t("shoppers.hero.description")}
        carouselSide="left"
      />

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("shoppers.pointsSection.title")}</h2>
          <Row className="g-4">
            <Col md={4}>
              <article className="sd-team-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("shoppers.pointsSection.point1Headline")}
                </h3>
                <p className="small text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {t("shoppers.pointsSection.point1Text")}
                </p>
              </article>
            </Col>
            <Col md={4}>
              <article className="sd-team-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("shoppers.pointsSection.point2Headline")}
                </h3>
                <p className="small text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {t("shoppers.pointsSection.point2Text")}
                </p>
              </article>
            </Col>
            <Col md={4}>
              <article className="sd-team-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("shoppers.pointsSection.point3Headline")}
                </h3>
                <p className="small text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {t("shoppers.pointsSection.point3Text")}
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("shoppers.sliderSection.title")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="sd-blog-content">
                <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "1.05rem" }}>{t("shoppers.sliderSection.highlightText")}</p>
                </div>
                <p className="sd-blog-text mb-3" style={{ fontSize: "1.05rem" }}>{t("shoppers.sliderSection.introText")}</p>
                <p className="sd-blog-text mb-0" style={{ fontSize: "0.98rem", lineHeight: "1.7" }}>
                  {t("shoppers.sliderSection.sliderText")}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-column gap-3">
                <div className="sd-blog-metrics flex-column align-items-stretch gap-2 w-100">
                  <div className="sd-blog-metric text-center p-3 w-100 m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px" }}>{t("shoppers.sliderSection.metric1")}</div>
                  <div className="sd-blog-metric text-center p-3 w-100 m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px" }}>{t("shoppers.sliderSection.metric2")}</div>
                  <div className="sd-blog-metric text-center p-3 w-100 m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px" }}>{t("shoppers.sliderSection.metric3")}</div>
                </div>
                <div className="sd-blog-stat p-4 m-0" style={{ borderRadius: "12px", background: "rgba(31,138,76,0.03)", borderLeft: "4px solid var(--sd-primary)" }}>
                  <p className="sd-blog-text mb-0" style={{ fontSize: "0.95rem" }}>
                    <strong>{t("shoppers.sliderSection.statHeadline")}</strong> {t("shoppers.sliderSection.statText")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("shoppers.planetAccountSection.title")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-3 fw-semibold" style={{ fontSize: "1.1rem", color: "var(--sd-primary)" }}>{t("shoppers.planetAccountSection.ctaText")}</p>
                <p className="sd-blog-text mb-4" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  {t("shoppers.planetAccountSection.recordIntro")}
                </p>
                <p className="sd-blog-text mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                  {t("shoppers.planetAccountSection.recordFooter")}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-column gap-3">
                <div className="sd-blog-records flex-column align-items-stretch gap-2 w-100">
                  <div className="sd-blog-record text-center p-3 w-100 m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px", fontWeight: "bold" }}>{t("shoppers.planetAccountSection.record1")}</div>
                  <div className="sd-blog-record text-center p-3 w-100 m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px", fontWeight: "bold" }}>{t("shoppers.planetAccountSection.record2")}</div>
                  <div className="sd-blog-record text-center p-3 w-100 m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px", fontWeight: "bold" }}>{t("shoppers.planetAccountSection.record3")}</div>
                </div>
                <div className="text-center mt-3">
                  <a href="https://myplanetaccount.com" target="_blank" rel="noreferrer" className="w-100">
                    <button className="sd-cta-btn w-100">{t("shoppers.planetAccountSection.ctaButton")}</button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("shoppers.partnersSection.title")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-4" style={{ fontSize: "1.05rem" }}>{t("shoppers.partnersSection.partnerIntro")}</p>
                <div className="sd-blog-partners mb-4 align-items-center justify-content-start gap-3">
                  <div className="sd-blog-partner d-flex align-items-center justify-content-center m-0" style={{ background: "var(--sd-primary)", padding: "0.5rem 1.5rem", borderRadius: "8px" }}>
                    <a href="https://www.panthera.org/" target="_blank" rel="noreferrer">
                      <img src="/img/logos/logo-main-white.svg" alt="Panthera logo" style={{ height: "28px", objectFit: "contain" }} />
                    </a>
                  </div>
                  <div className="sd-blog-partner d-flex align-items-center justify-content-center m-0" style={{ background: "#ffffff", padding: "0.5rem 1.5rem", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px" }}>
                    <a href="https://www.terrasos.co/" target="_blank" rel="noreferrer">
                      <img src="/img/logos/Log_Ter_NyA_Hor.png" alt="Terrasos logo" style={{ height: "28px", objectFit: "contain" }} />
                    </a>
                  </div>
                </div>
                <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                  {t("shoppers.partnersSection.partnerFooter")}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <blockquote className="sd-pull-quote sd-pull-quote-hero m-0 w-100">
                <p className="mb-0">"{t("shoppers.partnersSection.quote")}"</p>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-3">{t("shoppers.brandsSection.title")}</h2>
          <p className="sd-blog-text mb-4 text-muted" style={{ maxWidth: "760px", margin: "0 auto 2rem" }}>
            {t("shoppers.brandsSection.section5Desc")}
          </p>
          <div>
            <Link href="/">
              <button className="sd-cta-btn">{t("shoppers.brandsSection.browseButton")}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("shoppers.storySection.title")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="sd-blog-highlight p-4 text-center" style={{ borderRadius: "16px", background: "rgba(31, 138, 76, 0.06)", border: "1px solid rgba(31,138,76,0.12)" }}>
                <p className="sd-blog-text mb-2">
                  <strong>{t("shoppers.storySection.defaultLabel")}</strong> <span style={{ color: "var(--sd-dark)", fontWeight: "bold" }}>{t("shoppers.storySection.defaultVal")}</span>
                </p>
                <p className="sd-blog-text mb-2" style={{ fontSize: "1.2rem", color: "var(--sd-primary)", fontWeight: "bold" }}>↓</p>
                <p className="sd-blog-text mb-0">
                  <strong>{t("shoppers.storySection.actualLabel")}</strong>{" "}
                  <span style={{ fontSize: "1.3rem", color: "var(--sd-primary)", fontWeight: 800 }}>
                    {t("shoppers.storySection.actualVal")}
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-3 fw-semibold" style={{ fontSize: "1rem", color: "var(--sd-primary)" }}>
                  {t("shoppers.storySection.noteText")}
                </p>
                <p className="sd-blog-text mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                  {t("shoppers.storySection.footerText")}
                </p>
              </div>
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
