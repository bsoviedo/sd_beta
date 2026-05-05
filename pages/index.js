import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import Hero from "components/sd/Hero";
import Benefits from "components/sd/Benefits";

export default function HomePage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const isSpanish = locale === "es";

  const merchantCopy = isSpanish
    ? {
        title: "La manera mas rentable de salvar el planeta",
        items: [
          {
            icon: "globe",
            title: "Genera impacto climatico",
            body: "Demuestrale a tus clientes como tu marca impacta positivamente el cambio climatico. Mandatum permite a tus compradores elegir cuanto donar a causas que estan transformando la proteccion del medio ambiente y reporta ese impacto de forma ordenada."
          },
          {
            icon: "rocket",
            title: "Aumenta la conversion",
            body: "44% de los consumidores prefieren comprar con marcas que tienen un claro compromiso con la sostenibilidad. Convierte tu compromiso con el clima y la biodiversidad en clientes leales con flujos probados de optimizacion."
          },
          {
            icon: "chart",
            title: "Aumenta el trafico directo",
            body: "Las tiendas que usan Mandatum son promovidas automaticamente en nuestra comunidad de compradores conscientes, generando trafico gratuito y de alta intencion hacia tu tienda."
          }
        ],
        ctaTitle: "Comienza ya, es gratis.",
        ctaButton: "Agrega tu tienda Shopify",
        ctaSubtitle: "La instalacion es gratis y no requiere contrato."
      }
    : {
        title: "The most profitable way to save the planet",
        items: [
          {
            icon: "globe",
            title: "Make Climate Impact",
            body: "Show customers the climate positive brand they want you to be. Mandatum lets your shoppers choose how much you donate to transformational environmental causes and transparently tracks your impact."
          },
          {
            icon: "rocket",
            title: "Boost Site Conversion",
            body: "44% of consumers prefer to buy from brands that have a clear commitment to sustainability. Turn your climate and biodiversity commitment into loyal customers with tested conversion flows."
          },
          {
            icon: "chart",
            title: "Increase Direct Traffic",
            body: "Mandatum merchants are promoted to our community of eco conscious shoppers, driving free, high intent traffic to your store while reducing dependence on costly marketplaces."
          }
        ],
        ctaTitle: "Get started today for free.",
        ctaButton: "Add to your Shopify Store",
        ctaSubtitle: "Free to install, no contract required"
      };
  const partners = [
    { name: "TERRASOS", img: "/img/partners/Log_Ter_NyA_Hor.png" },
    { name: "Fundacion Omacha", img: "/img/partners/projects-omacha-ffffff.svg" },
    { name: "Rainforest Foundation US", img: "/img/partners/projects-rainforest-ffffff.svg" },
    { name: "BIOVERSE", img: "/img/partners/projects-bioverse-ffffff.svg" }
  ];
  const partnersCopy = isSpanish
    ? {
        title: "Tus contribuciones climaticas trabajando al maximo",
        description:
          "Nos hemos aliado con proyectos ambientales de alta calidad para asegurar que tus contribuciones generen impacto transformacional.",
        partners
      }
    : {
        title: "Your Climate Contributions Hard At Work",
        description:
          "We've partnered with the world's best environmental projects that are generating transformational outcomes to ensure your contributions have maximum impact.",
        partners
      };

  return (
    <Layout title={t("meta.homeTitle")} description={t("meta.homeDescription")}>
      <Hero />
      <Benefits />
      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="sd-section-title text-center mx-auto">{merchantCopy.title}</h2>
          <Row className="g-4 mt-4 align-items-stretch">
            {merchantCopy.items.map((item) => (
              <Col lg={4} key={item.title}>
                <article className="sd-merchant-card h-100">
                  <div className={`sd-merchant-icon sd-merchant-icon-${item.icon}`} aria-hidden="true" />
                  <h3 className="sd-merchant-card-title">{item.title}</h3>
                  <p className="mb-0">{item.body}</p>
                </article>
              </Col>
            ))}
          </Row>
          <div className="sd-home-cta-block text-center">
            <h3>{merchantCopy.ctaTitle}</h3>
            <Link href="/how-it-works">
              <button className="sd-cta-btn sd-home-cta-btn">{merchantCopy.ctaButton}</button>
            </Link>
            <p className="mb-0">{merchantCopy.ctaSubtitle}</p>
          </div>
        </Container>
      </section>
      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <div className="sd-impact-block text-center">
            <div className="sd-impact-sprout" aria-hidden="true">🌱</div>
            <h2 className="sd-impact-title">{partnersCopy.title}</h2>
            <p className="sd-impact-description mx-auto">{partnersCopy.description}</p>
            <div className="sd-impact-partners">
              {partnersCopy.partners.map((p) => (
                <div className="sd-impact-partner" key={p.name}>
                  <img src={p.img} alt={p.name} className="sd-impact-partner-img" />
                </div>
              ))}
            </div>
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
