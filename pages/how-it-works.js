import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function HowItWorksPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const isSpanish = locale === "es";

  const steps = isSpanish
    ? [
        {
          title: "Los comerciantes usan descuentos existentes",
          body: "Mandatum convierte cualquier descuento existente en un Sustainable Discount sin cambiar la configuracion actual de tu tienda.",
          image: "/img/for-merchants/how_bg_graphic_step1.svg",
          side: "left"
        },
        {
          title: "Elige tus productos",
          body: "Los comerciantes definen que productos muestran la opcion de contribucion para que compradores puedan elegir.",
          image: "/img/for-merchants/how_bg_graphic_step2.svg",
          side: "right"
        },
        {
          title: "Compradores eligen descuento o contribucion",
          body: "Los clientes usan Mandatum para elegir entre un descuento en el producto o una contribucion que el comerciante hace al medio ambiente.",
          image: "/img/for-merchants/how_bg_graphic_step3-es.svg",
          side: "left"
        },
        {
          title: "El checkout no cambia",
          body: "Los articulos anadidos al carrito con Mandatum se integran perfectamente con tu checkout existente y las contribuciones van automaticamente a proyectos verificados.",
          image: "/img/for-merchants/how_bg_graphic_step4.svg",
          side: "right"
        },
        {
          title: "Rastrea tu impacto",
          body: "Haz seguimiento transparente del impacto climatico de tus contribuciones y compartelo facilmente con tu comunidad.",
          image: "/img/for-merchants/how_bg_graphic_step5.svg",
          side: "left"
        }
      ]
    : [
        {
          title: "Merchants Use Existing Discounts",
          body: "Mandatum turns any existing discount into a Sustainable Discounts™.",
          image: "/img/for-merchants/how_bg_graphic_step1.svg",
          side: "left"
        },
        {
          title: "Choose Your Products",
          body: "Automatically embed a banner on any product page that shows shoppers your potential contribution.",
          image: "/img/for-merchants/how_bg_graphic_step2.svg",
          side: "right"
        },
        {
          title: "Choose Discount vs. Contribution",
          body: "Shoppers use Mandatum to choose between a discount on the product or a contribution the merchant make to the environment.",
          image: "/img/for-merchants/how_bg_graphic_step3-en.svg",
          side: "left"
        },
        {
          title: "Checkout as Usual",
          body: "Items added to the cart using Mandatum integrate seamlessly with your existing checkout and your contributions are automatically made to our verified environmental partner projects.",
          image: "/img/for-merchants/how_bg_graphic_step4.svg",
          side: "right"
        },
        {
          title: "Track Your Impact",
          body: "Transparently track your contributions' climate impact and easily share it with your community.",
          image: "/img/for-merchants/how_bg_graphic_step5.svg",
          side: "left"
        }
      ];

  const ctaCopy = isSpanish
    ? { title: "Comienza hoy, es gratis.", button: "Agregar a tu tienda Shopify", sub: "Instalacion gratuita, sin contrato" }
    : { title: "Get started today for free.", button: "Add to your Shopify Store", sub: "Free to install, no contract required" };

  const partners = [
    { name: "TERRASOS", img: "/img/partners/projects-bioverse-ffffff.svg" },
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
    <Layout title={t("meta.howTitle")} description={t("meta.howDescription")}>
      <PageHero title={t("how.hero.title")} description={t("how.hero.description")} carouselSide="left" />

      {steps.map((step, i) => {
        const imgCol = (
          <Col className="px-0" xs={12} lg={7}>
            <img className="sd-hiw-step-img" src={step.image} alt={step.title} />
          </Col>
        );
        const textCol = (
          <Col xs={12} lg={5} className="d-flex align-items-center">
            <div className="sd-hiw-step-text">
              <h3 className="sd-hiw-step-title">{step.title}</h3>
              <p className="mb-0">{step.body}</p>
            </div>
          </Col>
        );
        return (
          <section className="sd-hiw-step-row" key={step.title}>
            <Container fluid className="px-0">
              <Row className="g-0 align-items-center">
                {step.side === "left" ? <>{imgCol}{textCol}</> : <>{textCol}{imgCol}</>}
              </Row>
            </Container>
          </section>
        );
      })}

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

      <section className="sd-hiw-cta">
        <Container className="text-center px-4">
          <hr className="sd-hiw-cta-hr" />
          <h5 className="sd-hiw-cta-title">{ctaCopy.title}</h5>
          <p className="sd-hiw-cta-sub">— {ctaCopy.sub}</p>
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
