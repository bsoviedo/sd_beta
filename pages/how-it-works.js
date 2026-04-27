import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function HowItWorksPage() {
  const { t } = useTranslation("common");

  const steps = [
    { title: t("how.steps.0.title"), body: t("how.steps.0.body") },
    { title: t("how.steps.1.title"), body: t("how.steps.1.body") },
    { title: t("how.steps.2.title"), body: t("how.steps.2.body") },
    { title: t("how.steps.3.title"), body: t("how.steps.3.body") }
  ];

  return (
    <Layout title={t("meta.howTitle")} description={t("meta.howDescription")}>
      <PageHero title={t("how.hero.title")} description={t("how.hero.description")} />
      <section className="sd-section">
        <Container className="px-4 px-lg-5">
          <Row className="g-4">
            {steps.map((step, index) => (
              <Col md={6} key={step.title}>
                <article className="sd-step h-100">
                  <div className="sd-step-number">{index + 1}</div>
                  <h4 className="text-start mt-0">{step.title}</h4>
                  <p className="mb-0">{step.body}</p>
                </article>
              </Col>
            ))}
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
