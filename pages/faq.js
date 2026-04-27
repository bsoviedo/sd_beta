import { Accordion, Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function FAQPage() {
  const { t } = useTranslation("common");

  const faqs = [
    { q: t("faq.items.0.q"), a: t("faq.items.0.a") },
    { q: t("faq.items.1.q"), a: t("faq.items.1.a") },
    { q: t("faq.items.2.q"), a: t("faq.items.2.a") },
    { q: t("faq.items.3.q"), a: t("faq.items.3.a") }
  ];

  return (
    <Layout title={t("meta.faqTitle")} description={t("meta.faqDescription")}>
      <PageHero title={t("faq.hero.title")} description={t("faq.hero.description")} />
      <section className="sd-section">
        <Container className="px-4 px-lg-5">
          <Accordion defaultActiveKey="0" alwaysOpen>
            {faqs.map((item, index) => (
              <Accordion.Item eventKey={String(index)} key={item.q} className="mb-3 sd-card border-0">
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
