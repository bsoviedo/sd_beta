import { Container, Row, Col } from "react-bootstrap";
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
          <h2 className="text-center sd-section-accent mb-4">{t("shoppers.sliderSection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
              <p className="sd-blog-text mb-0 fw-semibold">{t("shoppers.sliderSection.highlightText")}</p>
            </div>
            <p className="sd-blog-text mb-3">{t("shoppers.sliderSection.introText")}</p>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">{t("shoppers.sliderSection.metric1")}</div>
              <div className="sd-blog-metric">{t("shoppers.sliderSection.metric2")}</div>
              <div className="sd-blog-metric">{t("shoppers.sliderSection.metric3")}</div>
            </div>
            <p className="sd-blog-text mb-4" style={{ fontSize: "0.98rem" }}>
              {t("shoppers.sliderSection.sliderText")}
            </p>
            <div className="sd-blog-stat p-4" style={{ borderRadius: "12px", background: "rgba(31,138,76,0.03)", borderLeft: "4px solid var(--sd-primary)" }}>
              <p className="sd-blog-text mb-0">
                <strong>{t("shoppers.sliderSection.statHeadline")}</strong> {t("shoppers.sliderSection.statText")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("shoppers.planetAccountSection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3 fw-semibold">{t("shoppers.planetAccountSection.ctaText")}</p>
            <p className="sd-blog-text mb-4" style={{ fontSize: "0.95rem" }}>
              {t("shoppers.planetAccountSection.recordIntro")}
            </p>
            <div className="sd-blog-records mb-4">
              <div className="sd-blog-record">{t("shoppers.planetAccountSection.record1")}</div>
              <div className="sd-blog-record">{t("shoppers.planetAccountSection.record2")}</div>
              <div className="sd-blog-record">{t("shoppers.planetAccountSection.record3")}</div>
            </div>
            <p className="sd-blog-text mb-4 text-muted" style={{ fontSize: "0.95rem" }}>
              {t("shoppers.planetAccountSection.recordFooter")}
            </p>
            <div className="mt-4">
              <a href="https://myplanetaccount.com" target="_blank" rel="noreferrer">
                <button className="sd-cta-btn">{t("shoppers.planetAccountSection.ctaButton")}</button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("shoppers.partnersSection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-4">{t("shoppers.partnersSection.partnerIntro")}</p>
            <div className="sd-blog-partners mb-4">
              <div className="sd-blog-partner">{t("shoppers.partnersSection.partner1")}</div>
              <div className="sd-blog-partner">{t("shoppers.partnersSection.partner2")}</div>
            </div>
            <p className="sd-blog-text mb-4 text-muted" style={{ fontSize: "0.9rem" }}>
              {t("shoppers.partnersSection.partnerFooter")}
            </p>
          </div>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>{t("shoppers.partnersSection.quote")}</p>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-3">{t("shoppers.brandsSection.title")}</h2>
          <p className="sd-blog-text mb-4 text-muted" style={{ maxWidth: "760px", margin: "0 auto 2rem" }}>
            {t("shoppers.brandsSection.section5Desc")}
          </p>
          <div>
            <a href="/">
              <button className="sd-cta-btn">{t("shoppers.brandsSection.browseButton")}</button>
            </a>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("shoppers.storySection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-4 p-4 mx-auto text-center" style={{ maxWidth: "600px", borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
              <p className="sd-blog-text mb-2">
                <strong>{t("shoppers.storySection.defaultLabel")}</strong> {t("shoppers.storySection.defaultVal")}
              </p>
              <p className="sd-blog-text mb-2" style={{ fontSize: "1.5rem", color: "var(--sd-primary)" }}>↓</p>
              <p className="sd-blog-text mb-0">
                <strong>{t("shoppers.storySection.actualLabel")}</strong>{" "}
                <span style={{ fontSize: "1.25rem", color: "var(--sd-primary)", fontWeight: 700 }}>
                  {t("shoppers.storySection.actualVal")}
                </span>
              </p>
            </div>
            <p className="sd-blog-text mb-3 fw-semibold" style={{ fontSize: "0.95rem" }}>
              {t("shoppers.storySection.noteText")}
            </p>
            <p className="sd-blog-text">{t("shoppers.storySection.footerText")}</p>
          </div>
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
