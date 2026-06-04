import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function ConservationPage() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.faqTitle")} description={t("meta.faqDescription")}>
      <PageHero
        title={t("conservation.hero.title")}
        description={t("conservation.hero.description")}
        carouselSide="right"
      />

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("conservation.problemSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              {t("conservation.problemSection.body1")}
            </p>
            <p className="sd-blog-text mb-4">{t("conservation.problemSection.body2")}</p>
            <p className="sd-blog-text fw-bold" style={{ color: "var(--sd-primary)" }}>
              {t("conservation.problemSection.body3")}
            </p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <article className="sd-team-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("conservation.problemSection.gapTitle")}
                </h3>
                <p className="small text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {t("conservation.problemSection.gap")}
                </p>
              </article>
            </Col>
            <Col md={4}>
              <article className="sd-team-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("conservation.problemSection.strainTitle")}
                </h3>
                <p className="small text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {t("conservation.problemSection.strain")}
                </p>
              </article>
            </Col>
            <Col md={4}>
              <article className="sd-team-card h-100 p-4 text-center d-flex flex-column justify-content-start" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("conservation.problemSection.solutionTitle")}
                </h3>
                <p className="small text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {t("conservation.problemSection.solution")}
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("conservation.offerSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
              <p className="sd-blog-text mb-0 fw-semibold">{t("conservation.offerSection.highlight")}</p>
            </div>
            <p className="sd-blog-text mb-4">{t("conservation.offerSection.subtitle")}</p>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">{t("conservation.offerSection.metric1")}</div>
              <div className="sd-blog-metric">{t("conservation.offerSection.metric2")}</div>
              <div className="sd-blog-metric">{t("conservation.offerSection.metric3")}</div>
            </div>
            <p className="sd-blog-text mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
              {t("conservation.offerSection.footer")}
            </p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("conservation.industrySection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3">{t("conservation.industrySection.intro")}</p>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">{t("conservation.industrySection.ind1")}</div>
              <div className="sd-blog-metric">{t("conservation.industrySection.ind2")}</div>
              <div className="sd-blog-metric">{t("conservation.industrySection.ind3")}</div>
              <div className="sd-blog-metric">{t("conservation.industrySection.ind4")}</div>
            </div>
            <p className="sd-blog-text mb-3 text-muted" style={{ fontSize: "0.95rem" }}>
              {t("conservation.industrySection.bridge")}
            </p>
            <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31,138,76,0.06)" }}>
              <p className="sd-blog-text mb-0 fw-semibold">{t("conservation.industrySection.highlight")}</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="mailto:damian@mandatum.co">
              <button className="sd-cta-btn">{t("conservation.industrySection.cta")}</button>
            </a>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("conservation.allocationSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-0">{t("conservation.allocationSection.intro")}</p>
          </div>
          <Row className="g-4 justify-content-center">
            <Col md={6}>
              <article className="sd-team-card h-100 p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-primary)" }}>
                  {t("conservation.allocationSection.primary")}
                </h3>
                <p className="mb-2 fw-medium" style={{ fontSize: "0.95rem" }}>
                  {t("conservation.allocationSection.primary1")}
                </p>
                <p className="mb-0 fw-medium" style={{ fontSize: "0.95rem" }}>
                  {t("conservation.allocationSection.primary2")}
                </p>
              </article>
            </Col>
            <Col md={6}>
              <article className="sd-team-card h-100 p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--sd-accent)" }}>
                  {t("conservation.allocationSection.secondary")}
                </h3>
                <p className="mb-2 fw-medium" style={{ fontSize: "0.95rem" }}>
                  {t("conservation.allocationSection.secondary1")}
                </p>
                <p className="mb-0 fw-medium" style={{ fontSize: "0.95rem" }}>
                  {t("conservation.allocationSection.secondary2")}
                </p>
              </article>
            </Col>
          </Row>
          <div className="sd-blog-content mx-auto text-center mt-4" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text text-muted" style={{ fontSize: "0.95rem" }}>
              {t("conservation.allocationSection.footer")}
            </p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("conservation.projectSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-4">{t("conservation.projectSection.intro")}</p>
            <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
              <p className="sd-blog-text mb-0 fw-semibold">{t("conservation.projectSection.highlight")}</p>
            </div>
            <p className="sd-blog-text mb-3" style={{ fontSize: "0.98rem" }}>
              {t("conservation.projectSection.body")}
            </p>
            <p className="sd-blog-text mb-0 text-muted fw-semibold" style={{ fontSize: "0.95rem" }}>
              {t("conservation.projectSection.partners")}
            </p>
          </div>
          <div className="text-center mt-4">
            <a href="mailto:damian@mandatum.co">
              <button className="sd-cta-btn">{t("conservation.projectSection.cta")}</button>
            </a>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-4">{t("conservation.closingSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3">{t("conservation.closingSection.body1")}</p>
            <p className="sd-blog-text mb-3">{t("conservation.closingSection.body2")}</p>
            <p className="sd-blog-text mb-3">{t("conservation.closingSection.body3")}</p>
            <p className="sd-blog-text mb-4 text-muted" style={{ fontSize: "0.95rem" }}>
              {t("conservation.closingSection.footer")}
            </p>
          </div>
          <div className="mt-4">
            <a href="mailto:damian@mandatum.co">
              <button className="sd-cta-btn">{t("conservation.closingSection.cta")}</button>
            </a>
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
