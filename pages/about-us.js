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

  const teamMembers = [
    {
      name: "Damian Estrada",
      role: t("about.team.role.damian"),
      href: "https://linkedin.com/in/damian-a-estrada"
    },
    {
      name: "Jeisson Prieto",
      role: t("about.team.role.jeisson"),
      href: "https://linkedin.com/in/jeisson-prieto"
    },
    {
      name: "Brayan Oviedo",
      role: t("about.team.role.brayan"),
      href: "https://www.linkedin.com/in/brayan-oviedo-yate-478072136/"
    },
    {
      name: "Dylan Price",
      role: t("about.team.role.dylan"),
      href: "https://www.linkedin.com/in/dylan-price-387a99199/"
    },
    {
      name: "Adrian Gross",
      role: t("about.team.role.adrian"),
      href: "https://www.linkedin.com/in/adrian-gross"
    },
    {
      name: "Claudia Estrada",
      role: t("about.team.role.claudia"),
      href: "https://www.linkedin.com/in/claudia-maria-estrada-zuluaga-b43578184/"
    }
  ];

  const validators = [
    { title: t("about.validatorsSection.item1Title"), desc: t("about.validatorsSection.item1Desc") },
    { title: t("about.validatorsSection.item2Title"), desc: t("about.validatorsSection.item2Desc") },
    { title: t("about.validatorsSection.item3Title"), desc: t("about.validatorsSection.item3Desc") },
    { title: t("about.validatorsSection.item4Title"), desc: t("about.validatorsSection.item4Desc") }
  ];


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
                  <span className="sd-missing-kicker">{t("about.problemSection.subtitle1")}</span>
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
                  {/*     <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                    {t("about.insightSection.body2")}
                  </p> */}
                </div>
              </Col>
              <Col lg={6}>
                <div className="d-flex flex-column gap-3">
                  <div className="sd-insight-metric-card">
                    <div className="sd-metric-value">40%</div>
                    <div className="sd-metric-label">{t("about.insightSection.metric1")}</div>
                    <p className="sd-metric-sub">{t("about.insightSection.metric2")}</p>
                  </div>
                  {/*   <div className="sd-insight-metric-card" style={{ borderLeft: "5px solid var(--sd-accent)" }}>
                    <div className="sd-metric-value" style={{ color: "var(--sd-accent)" }}>🌍</div>
                    <div className="sd-metric-label">{t("about.insightSection.metric3")}</div>
                  </div> */}
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
        {/*    <section className="sd-section sd-blog-section pt-0">
          <Container className="px-4 px-lg-5">
            <h2 className="sd-section-accent">{t("about.solutionSection.headline")}</h2>
            <Row className="g-4 mt-2">
              <Col lg={4}>
                <div className="sd-triple-win-card">
                  <div className="sd-triple-win-icon">🛒</div>
                  <h3>{t("about.solutionSection.shopperTitle")}</h3>
                  <p>{t("about.solutionSection.shopper").replace("✓", "").trim()}</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="sd-triple-win-card">
                  <div className="sd-triple-win-icon">💼</div>
                  <h3>{t("about.solutionSection.brandTitle")}</h3>
                  <p>{t("about.solutionSection.brand").replace("✓", "").trim()}</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="sd-triple-win-card">
                  <div className="sd-triple-win-icon">🌱</div>
                  <h3>{t("about.solutionSection.natureTitle")}</h3>
                  <p>{t("about.solutionSection.nature").replace("✓", "").trim()}</p>
                </div>
              </Col>
            </Row>
            <div className="sd-solution-footer-note">
              <p className="mb-0">
                <strong>{t("about.solutionSection.body")}</strong> {t("about.solutionSection.footer")}
              </p>
            </div>
          </Container>
        </section> */}

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


        <section className="sd-section sd-blog-section">
          <Container className="px-4 px-lg-5">
            <h2 className="text-center sd-section-accent mb-5">{t("about.philosophySection.headline")}</h2>
            <Row className="align-items-center g-5 mb-5">
              <Col lg={6}>
                <div className="sd-blog-highlight p-4" style={{ background: "rgba(31, 138, 76, 0.05)", borderLeft: "4px solid var(--sd-primary)", borderRadius: "12px" }}>
                  <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.55rem)", lineHeight: "1.7", color: "var(--sd-primary)" }}>
                    {t("about.philosophySection.body1")}
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="sd-blog-content">
                  <p className="sd-blog-text mb-0" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: "1.7" }}>
                    {t("about.philosophySection.body2")}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center">
              {teamMembers.map((member) => (
                <Col md={6} lg={4} key={member.name}>
                  <article className="sd-team-card h-100 text-center p-4">
                    <h3>{member.name}</h3>
                    <p className="mb-3" style={{ fontSize: "clamp(1.15rem, 2vw, 1.35rem)", color: "rgba(28, 56, 39, 0.75)" }}>{member.role}</p>
                    {member.href ? (
                      <a href={member.href} target="_blank" rel="noreferrer" className="sd-link sd-link-inline" style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}>
                        linkedin.com/in/{member.href.split("/").pop()}
                      </a>
                    ) : (
                      <p className="text-muted mb-0" style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}>{t("about.team.noLinkedin")}</p>
                    )}
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
          <Container className="px-4 px-lg-5 text-center">
            <h2 className="sd-section-accent mb-4">{t("about.validatorsSection.title")}</h2>
            <Row className="g-4 justify-content-center mt-2">
              {validators.map((val) => (
                <Col md={6} lg={3} key={val.title}>
                  <article className="sd-team-card h-100 text-center p-4" style={{ borderRadius: "16px", background: "#ffffff", boxShadow: "0 10px 24px rgba(35,59,45,0.06)" }}>
                    <h3 className="mb-2" style={{ fontSize: "clamp(1.25rem, 2.3vw, 1.45rem)", color: "var(--sd-primary)", lineHeight: "1.2", minHeight: "3.4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>{val.title}</h3>
                    <p className="text-muted mb-0" style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", lineHeight: "1.5" }}>{val.desc}</p>
                  </article>
                </Col>
              ))}
            </Row>
            <div className="mt-5">
              <a href="mailto:damian@mandatum.co">
                <button className="sd-cta-btn">{t("about.validatorsSection.cta")}</button>
              </a>
            </div>
          </Container>
        </section>

        {/* 6. CTA Section */}
        {/*  <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
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
        </section> */}




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