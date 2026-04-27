import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import Hero from "components/sd/Hero";
import Benefits from "components/sd/Benefits";
import Newsletter from "components/sd/Newsletter";

export default function HomePage() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.homeTitle")} description={t("meta.homeDescription")}>
      <Hero />
      <Benefits />
      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <Row className="g-4 align-items-stretch">
            <Col lg={6}>
              <div className="sd-step h-100">
                <h3>{t("home.featureLeft.title")}</h3>
                <p>{t("home.featureLeft.body")}</p>
                <Link href="/about">
                  <button className="sd-outline-btn">{t("home.featureLeft.cta")}</button>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="sd-step h-100" style={{ background: "linear-gradient(145deg, #130a3f, #251463)", color: "#fff" }}>
                <h3>{t("home.featureRight.title")}</h3>
                <p>{t("home.featureRight.body")}</p>
                <Link href="/how-it-works">
                  <button className="sd-cta-btn">{t("home.featureRight.cta")}</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
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
