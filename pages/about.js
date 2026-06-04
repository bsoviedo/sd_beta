import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function AboutPage() {
  const { t } = useTranslation("common");

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
      href: ""
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

      <section className="sd-section sd-blog-section">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("about.originSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
              {t("about.originSection.body1")}
            </p>
            <p className="sd-blog-text mb-4 fw-medium" style={{ color: "var(--sd-primary)" }}>
              {t("about.originSection.body2")}
            </p>
          </div>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>{t("about.originSection.quote")}</p>
            <footer className="sd-quote-author">{t("about.originSection.author")}</footer>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("about.problemSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-4 p-4" style={{ background: "rgba(31, 138, 76, 0.06)", borderRadius: "12px", borderLeft: "4px solid var(--sd-primary)" }}>
              <p className="sd-blog-text mb-2 fw-semibold">✓ {t("about.problemSection.bullet1")}</p>
              <p className="sd-blog-text mb-2 fw-semibold">✓ {t("about.problemSection.bullet2")}</p>
              <p className="sd-blog-text fw-semibold">✓ {t("about.problemSection.bullet3")}</p>
            </div>
            <p className="sd-blog-text fw-bold text-center" style={{ fontSize: "1.15rem", color: "var(--sd-primary)" }}>
              {t("about.problemSection.body2")}
            </p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("about.insightSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3">{t("about.insightSection.body1")}</p>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">{t("about.insightSection.metric1")}</div>
              <div className="sd-blog-metric">{t("about.insightSection.metric2")}</div>
              <div className="sd-blog-metric">{t("about.insightSection.metric3")}</div>
            </div>
            <div className="sd-blog-highlight p-4 mb-3" style={{ background: "rgba(31, 138, 76, 0.06)", borderRadius: "12px" }}>
              <p className="sd-blog-text mb-0 fw-semibold">{t("about.insightSection.body3")}</p>
            </div>
            <p className="sd-blog-text text-muted mb-0" style={{ fontSize: "0.95rem" }}>
              {t("about.insightSection.body2")}
            </p>
          </div>
          <div className="text-center mt-4">
            <Link href="/how-it-works">
              <button className="sd-cta-btn">{t("about.insightSection.link")}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("about.solutionSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-point p-4 mb-4" style={{ background: "rgba(31, 138, 76, 0.05)", borderLeft: "4px solid var(--sd-primary)", borderRadius: "8px" }}>
              <p className="sd-blog-text fw-medium">{t("about.solutionSection.body")}</p>
            </div>
            <div className="sd-blog-metrics mt-4 mb-4">
              <div className="sd-blog-metric">{t("about.solutionSection.shopper")}</div>
              <div className="sd-blog-metric">{t("about.solutionSection.brand")}</div>
              <div className="sd-blog-metric">{t("about.solutionSection.nature")}</div>
            </div>
            <p className="sd-blog-text text-muted fst-italic mt-3" style={{ fontSize: "0.95rem" }}>
              {t("about.solutionSection.footer")}
            </p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("about.visionSection.headline")}</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-4">
              <strong>{t("about.visionSection.goalLabel")}</strong> {t("about.visionSection.goalValue")}
            </p>
            <div className="sd-faq-criteria mb-4">
              <div className="sd-faq-criterion">
                <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.1rem" }}>
                  {t("about.visionSection.engineTitle")}
                </h4>
                <p className="sd-blog-metric-text mb-0 fw-semibold">
                  {t("about.visionSection.engineBody")}
                </p>
              </div>
              <div className="sd-faq-criterion">
                <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.1rem" }}>
                  {t("about.visionSection.opportunityTitle")}
                </h4>
                <p className="sd-blog-metric-text mb-0 fw-semibold">
                  {t("about.visionSection.opportunityBody")}
                </p>
              </div>
              <div className="sd-faq-criterion">
                <h4 className="mb-2" style={{ color: "var(--sd-primary)", fontSize: "1.1rem" }}>
                  {t("about.visionSection.impactTitle")}
                </h4>
                <p className="sd-blog-metric-text mb-0 fw-semibold">
                  {t("about.visionSection.impactBody")}
                </p>
              </div>
            </div>
            <p className="sd-blog-text text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              {t("about.visionSection.footer")}
            </p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0" id="team">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{t("about.philosophySection.title")}</h2>
          <div className="sd-blog-content mx-auto text-center mb-5" style={{ maxWidth: "760px" }}>
            <p className="sd-blog-text mb-2 fw-bold" style={{ color: "var(--sd-primary)", fontSize: "1.1rem" }}>
              {t("about.philosophySection.body1")}
            </p>
            <p className="sd-blog-text">{t("about.philosophySection.body2")}</p>
          </div>
          <Row className="g-4 justify-content-center">
            {teamMembers.map((member) => (
              <Col md={6} lg={4} key={member.name}>
                <article className="sd-team-card h-100 text-center p-4">
                  <h3>{member.name}</h3>
                  <p className="mb-3">{member.role}</p>
                  {member.href ? (
                    <a href={member.href} target="_blank" rel="noreferrer" className="sd-link sd-link-inline">
                      linkedin.com/in/{member.href.split("/").pop()}
                    </a>
                  ) : (
                    <p className="text-muted mb-0">{t("about.team.noLinkedin")}</p>
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
                  <h3 className="mb-2" style={{ fontSize: "1.15rem", color: "var(--sd-primary)" }}>{val.title}</h3>
                  <p className="small text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{val.desc}</p>
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
