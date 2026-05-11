import { Container, Card } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";

export default function PrivacyPolicy() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.privacyTitle")} description={t("meta.privacyDescription")}>
      <section className="sd-section" style={{ paddingTop: "6rem" }}>
        <Container className="px-4 px-lg-5 pb-5">
          <Card className="sd-card border-0">
            <Card.Body className="py-5 px-4 px-lg-5" style={{ fontSize: "15px", lineHeight: "1.7" }}>

              <h2 className="mb-1" style={{ color: "var(--sd-primary)" }}>Privacy Policy</h2>
              <p className="text-muted mb-4" style={{ fontSize: "13px" }}>Last updated: October 1, 2018</p>

              <h5 className="mt-2 mb-2" style={{ color: "var(--sd-primary)" }}>1. Information Provided by You</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                Sustainable Discounts™ strives to collect as little information from you as possible. The information we do collect is as follows:
                <ul className="mt-2">
                  <li>Email Address</li>
                  <li>Password</li>
                  <li>Username</li>
                </ul>
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>2. Information Collected Automatically</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                Sustainable Discounts™ uses cookies to collect and analyze information on site performance and usage, in order to further enhance and customize content and advertisements.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>Customer Service</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                Estratra considers itself to be a Customer Service Based Corporation.<br />
                For any questions or concerns regarding these terms or any aspects of Mandatum, please contact us at{" "}
                <a href="mailto:support@mandatum.co" style={{ color: "var(--sd-primary)" }}>support@mandatum.co</a>.
              </p>

              <p className="text-center fw-bold mt-4">
                Sustainable Discounts™ is a Florida Limited Liability Company with a current Certificate of Good Standing.
              </p>

            </Card.Body>
          </Card>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
