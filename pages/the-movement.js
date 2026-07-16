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
          <h2 className="text-center sd-section-accent mb-5">{t("conservation.problemSection.headline")}</h2>
          <Row className="align-items-center justify-content-center g-5 mb-4">
            <Col lg={8}>
              <div className="sd-blog-content">
                {/*       <p className="sd-blog-text mb-3" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.7", color: "var(--sd-dark)" }}>
                  {t("conservation.problemSection.body1")}
                </p> */}
                {/*                 <p className="sd-blog-text mb-4" style={{ fontSize: "clamp(1.2rem, 2.1vw, 1.38rem)", lineHeight: "1.6" }}>{t("conservation.problemSection.body2")}</p>
 */}
              </div>
              {/*       </Col>
            <Col lg={6}> */}
              <div className="d-flex flex-column gap-3">
                <article className="sd-team-card p-4" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                  <h3 className="fw-bold mb-2" style={{ color: "var(--sd-primary)", fontSize: "clamp(1.25rem, 2.3vw, 1.45rem)" }}>{t("conservation.problemSection.gapTitle")}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)", lineHeight: "1.6" }}>{t("conservation.problemSection.gap")}</p>
                </article>
                <article className="sd-team-card p-4" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                  <h3 className="fw-bold mb-2" style={{ color: "var(--sd-primary)", fontSize: "clamp(1.25rem, 2.3vw, 1.45rem)" }}>{t("conservation.problemSection.strainTitle")}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)", lineHeight: "1.6" }}>{t("conservation.problemSection.strain")}</p>
                </article>
                {/*   <article className="sd-team-card p-4" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                  <h3 className="fw-bold mb-2" style={{ color: "var(--sd-primary)", fontSize: "clamp(1.25rem, 2.3vw, 1.45rem)" }}>{t("conservation.problemSection.solutionTitle")}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)", lineHeight: "1.6" }}>{t("conservation.problemSection.solution")}</p>
                </article> */}

                <p className="sd-blog-text fw-bold mb-0" style={{ color: "var(--sd-primary)", fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)" }}>
                  {t("conservation.problemSection.body3")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*       <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("conservation.offerSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-2">
              <div className="sd-blog-content">
                <div className="sd-blog-highlight mb-4 p-4" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)" }}>{t("conservation.offerSection.highlight")}</p>
                </div>
                <p className="sd-blog-text mb-4" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.6" }}>{t("conservation.offerSection.subtitle")}</p>
                <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "clamp(1.15rem, 2vw, 1.28rem)" }}>
                  {t("conservation.offerSection.footer")}
                </p>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="d-flex flex-column gap-3">
                <div className="sd-blog-metric p-3 text-center m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px", fontSize: "clamp(1.2rem, 2.1vw, 1.38rem)", fontWeight: "500" }}>{t("conservation.offerSection.metric1")}</div>
                <div className="sd-blog-metric p-3 text-center m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px", fontSize: "clamp(1.2rem, 2.1vw, 1.38rem)", fontWeight: "500" }}>{t("conservation.offerSection.metric2")}</div>
                <div className="sd-blog-metric p-3 text-center m-0" style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "10px", fontSize: "clamp(1.2rem, 2.1vw, 1.38rem)", fontWeight: "500" }}>{t("conservation.offerSection.metric3")}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("conservation.industrySection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-4" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)" }}>{t("conservation.industrySection.intro")}</p>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {[...Array(17)].map((_, i) => (
                    <div
                      key={i}
                      className="sd-blog-metric px-3 py-2 m-0"
                      style={{ background: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "8px", fontSize: "clamp(1.15rem, 2vw, 1.28rem)" }}
                    >
                      {t(`conservation.industrySection.ind${i + 1}`)}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="sd-blog-content">
                <p className="sd-blog-text text-muted mb-3" style={{ fontSize: "clamp(1.15rem, 2.1vw, 1.28rem)" }}>
                  {t("conservation.industrySection.bridge")}
                </p>
                <div className="sd-blog-highlight p-4 mb-4" style={{ borderRadius: "12px", background: "rgba(31,138,76,0.06)" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)" }}>{t("conservation.industrySection.highlight")}</p>
                </div>
                <div className="text-center mt-3">
                  <a href="mailto:damian@mandatum.co" className="w-100">
                    <button className="sd-cta-btn w-100">{t("conservation.industrySection.cta")}</button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("conservation.allocationSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-0" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.7" }}>{t("conservation.allocationSection.intro")}</p>
          </div>
          <Row className="g-4 justify-content-center">
            <Col md={6}>
              <article className="sd-team-card h-100 p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fw-bold mb-3" style={{ color: "var(--sd-primary)", fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)" }}>
                  {t("conservation.allocationSection.primary")}
                </h3>
                <p className="mb-2 fw-medium" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)" }}>
                  {t("conservation.allocationSection.primary1")}
                </p>
                <p className="mb-0 fw-medium" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)" }}>
                  {t("conservation.allocationSection.primary2")}
                </p>
              </article>
            </Col>
            <Col md={6}>
              <article className="sd-team-card h-100 p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.04)" }}>
                <h3 className="fw-bold mb-3" style={{ color: "var(--sd-accent)", fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)" }}>
                  {t("conservation.allocationSection.secondary")}
                </h3>
                <p className="mb-2 fw-medium" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)" }}>
                  {t("conservation.allocationSection.secondary1")}
                </p>
                <p className="mb-0 fw-medium" style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)" }}>
                  {t("conservation.allocationSection.secondary2")}
                </p>
              </article>
            </Col>
          </Row>
          <div className="sd-blog-content mx-auto text-center mt-4" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text text-muted mb-4" style={{ fontSize: "clamp(1.15rem, 2vw, 1.28rem)" }}>
              {t("conservation.allocationSection.footer")}
            </p>
            <a href="mailto:damian@mandatum.co">
              <button className="sd-cta-btn">{t("nav.contactUs", "Contact Us")}</button>
            </a>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("conservation.projectSection.headline")}</h2>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-3" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)" }}>{t("conservation.projectSection.intro")}</p>
                <p className="sd-blog-text mb-4" style={{ fontSize: "clamp(1.2rem, 2.1vw, 1.38rem)", lineHeight: "1.6" }}>
                  {t("conservation.projectSection.body")}
                </p>
                <p className="sd-blog-text mb-0 text-muted fw-semibold" style={{ fontSize: "clamp(1.15rem, 2.1vw, 1.28rem)", color: "var(--sd-primary)" }}>
                  {t("conservation.projectSection.partners")}
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="d-flex flex-column gap-3">
                <div className="sd-blog-highlight p-4 m-0" style={{ borderRadius: "12px", background: "rgba(31, 138, 76, 0.06)" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)", lineHeight: "1.5" }}>{t("conservation.projectSection.highlight")}</p>
                </div>
                <div className="text-center">
                  <a href="mailto:damian@mandatum.co" className="w-100">
                    <button className="sd-cta-btn w-100">{t("conservation.projectSection.cta")}</button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-4">{t("conservation.closingSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.7" }}>{t("conservation.closingSection.body1")}</p>
            <p className="sd-blog-text mb-3" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.7" }}>{t("conservation.closingSection.body2")}</p>
            <p className="sd-blog-text mb-3" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.7" }}>{t("conservation.closingSection.body3")}</p>
            <p className="sd-blog-text mb-4 text-muted" style={{ fontSize: "clamp(1.15rem, 2.1vw, 1.28rem)" }}>
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
