import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.aboutTitle")} description={t("meta.aboutDescription")}>
      <PageHero title={t("about.hero.title")} description={t("about.hero.description")} />
      <section className="sd-section">
        <Container className="px-4 px-lg-5">
          <Row className="g-4">
            <Col lg={6}>
              <article className="sd-card p-4 h-100">
                <h3>{t("about.vision.title")}</h3>
                <p>{t("about.vision.body")}</p>
              </article>
            </Col>
            <Col lg={6}>
              <article className="sd-card p-4 h-100">
                <h3>{t("about.model.title")}</h3>
                <p>{t("about.model.body")}</p>
              </article>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <article className="sd-step">
                <h3>{t("about.impact.title")}</h3>
                <p>{t("about.impact.body")}</p>
              </article>
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
