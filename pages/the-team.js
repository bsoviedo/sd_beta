import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function TheTeamPage() {
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
    <Layout title={t("meta.teamTitle")} description={t("meta.teamDescription")}>
      <PageHero
        title={t("about.philosophySection.title")}
        description={t("meta.teamDescription")}
        carouselSide="left"
      />

      <section className="sd-section sd-blog-section">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-5">{t("about.philosophySection.headline")}</h2>
          <Row className="align-items-center g-5 mb-5">
            <Col lg={6}>
              <div className="sd-blog-highlight p-4" style={{ background: "rgba(31, 138, 76, 0.05)", borderLeft: "4px solid var(--sd-primary)", borderRadius: "12px" }}>
                <p className="sd-blog-text mb-0 fw-semibold" style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--sd-primary)" }}>
                  {t("about.philosophySection.body1")}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="sd-blog-content">
                <p className="sd-blog-text mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
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
