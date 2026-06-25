import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function TheMovementPage() {
  const { t } = useTranslation("common");

  const authorParts = t("about.originSection.author") ? t("about.originSection.author").split(",") : [];
  const authorName = authorParts[0]?.trim() || "";
  const authorTitle = authorParts.slice(1).join(",").trim() || "";
  const authorInitials = authorName ? authorName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() : "SD";

  return (
    <Layout title={t("meta.aboutTitle")} description={t("meta.aboutDescription")}>
      <PageHero
        title={t("about.hero.titleExt")}
        description={t("about.hero.descriptionExt")}
        carouselSide="right"
      />

      <div className="sd-movement-page">
        {/* 1. Origin Section (Editorial Style & Glass Quote Card) */}
        <section className="sd-section sd-blog-section">
          <Container className="px-4 px-lg-5">
            <h2 className="sd-section-accent">{t("about.originSection.headline")}</h2>
            <Row className="align-items-stretch g-5 mt-2">
              <Col lg={7} className="d-flex align-items-center">
                <div className="sd-origin-editorial sd-blog-content">
                  <p className="sd-editorial-lead mb-4">
                    {t("about.originSection.body1")}
                  </p>
                  <p className="sd-blog-text mb-0 fw-medium" style={{ fontSize: "1.1rem", color: "var(--sd-primary)" }}>
                    {t("about.originSection.body2")}
                  </p>
                </div>
              </Col>
              <Col lg={5}>
                <div className="sd-origin-quote-card h-100 d-flex flex-column justify-content-between">
                  <p className="sd-quote-text">&quot;{t("about.originSection.quote")}&quot;</p>
                  <div className="sd-quote-author-wrapper">
                    <div className="sd-quote-avatar">
                      {authorInitials}
                    </div>
                    <div className="sd-quote-author-info">
                      <h4 className="sd-author-name">{authorName}</h4>
                      <p className="sd-author-title">{authorTitle}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 2. Problem Section (Resource Cards & Missing Link Card) */}
        <section className="sd-section sd-blog-section pt-0">
          <Container className="px-4 px-lg-5">
            <h2 className="sd-section-accent">{t("about.problemSection.headline")}</h2>
            <Row className="g-4 mt-2">
              <Col md={4}>
                <div className="sd-resource-card">
                  <div className="sd-resource-icon">📋</div>
                  <h3>{t("about.problemSection.bullet1").split(".")[0]}</h3>
                  <p>{t("about.problemSection.bullet1")}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="sd-resource-card">
                  <div className="sd-resource-icon">🔬</div>
                  <h3>{t("about.problemSection.bullet2").split(".")[0]}</h3>
                  <p>{t("about.problemSection.bullet2")}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="sd-resource-card">
                  <div className="sd-resource-icon">🛡️</div>
                  <h3>{t("about.problemSection.bullet3").split(".")[0]}</h3>
                  <p>{t("about.problemSection.bullet3")}</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12}>
                <div className="sd-missing-link-card">
                  <span className="sd-missing-kicker">La Pieza Faltante</span>
                  <h3 className="sd-missing-headline">
                    {t("about.problemSection.body2")}
                  </h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 3. Insight Section (Dashboard Layout) */}
        <section className="sd-section sd-blog-section pt-0">
          <Container className="px-4 px-lg-5">
            <h2 className="sd-section-accent">{t("about.insightSection.headline")}</h2>
            <Row className="align-items-center g-5 mt-2">
              <Col lg={6}>
                <div className="sd-blog-content">
                  <p className="sd-blog-text mb-4" style={{ fontSize: "1.15rem", lineHeight: "1.8" }}>
                    {t("about.insightSection.body1")}
                  </p>
                  <div className="sd-insight-highlight-card">
                    <p className="sd-highlight-text">{t("about.insightSection.body3")}</p>
                  </div>
                  <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                    {t("about.insightSection.body2")}
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="d-flex flex-column gap-3">
                  <div className="sd-insight-metric-card">
                    <div className="sd-metric-value">40%</div>
                    <div className="sd-metric-label">{t("about.insightSection.metric1")}</div>
                    <p className="sd-metric-sub">{t("about.insightSection.metric2")}</p>
                  </div>
                  <div className="sd-insight-metric-card" style={{ borderLeft: "5px solid var(--sd-accent)" }}>
                    <div className="sd-metric-value" style={{ color: "var(--sd-accent)" }}>🌍</div>
                    <div className="sd-metric-label">{t("about.insightSection.metric3")}</div>
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

        {/* 4. Solution Section (Triple Win Grid) */}
        <section className="sd-section sd-blog-section pt-0">
          <Container className="px-4 px-lg-5">
            <h2 className="sd-section-accent">{t("about.solutionSection.headline")}</h2>
            <Row className="g-4 mt-2">
              <Col lg={4}>
                <div className="sd-triple-win-card">
                  <div className="sd-triple-win-icon">🛒</div>
                  <h3>Compradores</h3>
                  <p>{t("about.solutionSection.shopper").replace("✓", "").trim()}</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="sd-triple-win-card">
                  <div className="sd-triple-win-icon">💼</div>
                  <h3>Marcas</h3>
                  <p>{t("about.solutionSection.brand").replace("✓", "").trim()}</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="sd-triple-win-card">
                  <div className="sd-triple-win-icon">🌱</div>
                  <h3>Naturaleza</h3>
                  <p>{t("about.solutionSection.nature").replace("✓", "").trim()}</p>
                </div>
              </Col>
            </Row>
            <div className="sd-solution-footer-note">
              <p className="mb-0">
                <strong>{t("about.solutionSection.body")}</strong> — {t("about.solutionSection.footer")}
              </p>
            </div>
          </Container>
        </section>

        {/* 5. Vision Section (Target Box & Pipeline Grid) */}
        <section className="sd-section sd-blog-section pt-0">
          <Container className="px-4 px-lg-5">
            <h2 className="sd-section-accent">{t("about.visionSection.headline")}</h2>
            <div className="sd-vision-target-card mt-2">
              <span className="sd-target-kicker">{t("about.visionSection.goalLabel")}</span>
              <h3 className="sd-target-number">{t("about.visionSection.goalValue")}</h3>
              <p className="sd-target-footer">{t("about.visionSection.footer")}</p>
            </div>
            
            <Row className="g-4 justify-content-center">
              <Col md={4}>
                <div className="sd-vision-pipe-card">
                  <div className="sd-pipe-title">{t("about.visionSection.engineTitle")}</div>
                  <p className="sd-pipe-value">{t("about.visionSection.engineBody")}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="sd-vision-pipe-card">
                  <div className="sd-pipe-title">{t("about.visionSection.opportunityTitle")}</div>
                  <p className="sd-pipe-value">{t("about.visionSection.opportunityBody")}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="sd-vision-pipe-card">
                  <div className="sd-pipe-title">{t("about.visionSection.impactTitle")}</div>
                  <p className="sd-pipe-value">{t("about.visionSection.impactBody")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 6. CTA Section */}
        <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
          <Container className="px-4 px-lg-5 text-center">
            <h2 className="sd-section-accent mb-4">
              {t("about.validatorsSection.cta")}
            </h2>
            <Row className="g-3 justify-content-center mt-2">
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
      </div>
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
