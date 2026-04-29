import { Accordion, Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function FAQPage() {
  const { t } = useTranslation("common");
  const faqItems = t("faq.items", { returnObjects: true });

  const faqs = Array.isArray(faqItems) ? faqItems : [];

  return (
    <Layout title={t("meta.faqTitle")} description={t("meta.faqDescription")}>
      <PageHero title={t("faq.hero.title")} description={t("faq.hero.description")} carouselSide="right" />
      <section className="sd-section">
        <Container className="px-4 px-lg-5">
          <Accordion>
            {faqs.map((item, index) => (
              <Accordion.Item eventKey={String(index)} key={`${item.q}-${index}`} className="mb-3 sd-card border-0">
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body>{item.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
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
