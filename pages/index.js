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

  const ideaCopy = isSpanish
    ? {
        label: "El comercio incluye costos.",
        headline: "Una oportunidad en cada compra.",
        body:
          "El comercio incluye costos. A veces solo necesitas el producto. Hasta el 40% de lo que pagas en un marketplace va para su infraestructura. No para tu producto.",
        step1: "Commerce generates a hidden cost. Up to 40% of what you pay goes to marketplace infrastructure.",
        step2: "SD makes that cost visible and creates a real choice.",
        step3: "Shopper saves. Brand earns more. Nature gets funded. Automatically.",
        linkText: "See the full mechanism"
      }
    : {
        label: "Commerce includes costs.",
        headline: "An opportunity in every purchase.",
        body:
          "Commerce features costs. Sometimes all you need is the product. Up to 40% of what you pay on a major marketplace goes to its infrastructure. Not your product.",
        step1: "Step 1: Commerce generates a hidden cost. Up to 40% of what you pay goes to marketplace infrastructure.",
        step2: "Step 2: SD makes that cost visible and creates a real choice.",
        step3: "Step 3: Shopper saves. Brand earns more. Nature gets funded. Automatically.",
        linkText: "See the full mechanism"
      };

  const audienceCards = isSpanish
    ? [
        {
          title: "Para marcas",
          body: "Recupera control de precios, mejora ganancias. Ofrece un descuento real en tu canal directo. Gana una historia de conservacion que ningun marketplace puede reproducir.",
          foot: "Gratis para instalar. Sin contrato.",
          href: "/how-it-works",
          cta: "How SD works for your brand"
        },
        {
          title: "Para compradores",
          body: "El mismo producto. Precio mas bajo. Una contribucion de conservacion verificada incluida. Tu decides cuanto de tu descuento va para ti y cuanto paga al planeta.",
          foot: "Encuentra marcas SD y crea tu cuenta planeta.",
          href: "/blog",
          cta: "Find SD brands"
        },
        {
          title: "Para el movimiento",
          body: "Cientificos, conservacionistas, activistas, periodistas, fundadores, celebridades y expertos del sector. Si crees que el comercio puede proteger la naturaleza, aqui hay un lugar para ti.",
          foot: "Únete al movimiento.",
          href: "/faq",
          cta: "Join the movement"
        }
      ]
    : [
        {
          title: "For brands",
          body: "Recover pricing control, improve profits. Offer shoppers a real discount on your direct channel. Earn a conservation story no marketplace can replicate.",
          foot: "Free to install. No contract.",
          href: "/how-it-works",
          cta: "How SD works for your brand"
        },
        {
          title: "For shoppers",
          body: "The same product. Lower price. A verified conservation contribution included. You decide how much of your discount goes to you and how much pays back the planet.",
          foot: "Find SD brands and create your planet account.",
          href: "/blog",
          cta: "Find SD brands"
        },
        {
          title: "For the movement",
          body: "Scientists, conservationists, activists, journalists, founders, celebrities, industry experts. If you believe commerce can be redesigned to protect nature, there is a role for you here.",
          foot: "Join the movement.",
          href: "/faq",
          cta: "Join the movement"
        }
      ];

  const proofItems = [
    "Earthshot Prize 2025 - Nominated",
    "GEF and World Bank - Currently in due diligence",
    "Change100 Winner 2026 - Top Impact Startup to Watch",
    "Cornell University Life Changing Labs - Accelerator Winner, Summer 2024",
    "Panthera - Partnership agreed in principle",
    "Terrasos - Active partnership, biodiversity credits live"
  ];

  const betaCopy = isSpanish
    ? {
        label: "La beta privada dijo lo que esperabamos.",
        headline: "Numeros reales. Compras reales. Conservacion real.",
        stat1: "60,000+ interacciones de consumidores en 10 tiendas de EE. UU., Reino Unido y Colombia.",
        stat2: "32% de aumento en conversiones de carrito para marcas que usan SD.",
        stat3: "38% de los pools disponibles fueron redirigidos voluntariamente a conservacion. El predeterminado era 30%.",
        body: "No se ofrecio recompensa. Cuando la opcion era transparente, la gente eligio el planeta."
      }
    : {
        label: "The private beta said what we hoped it would.",
        headline: "Real numbers. Real purchases. Real conservation.",
        stat1: "60,000+ consumer interactions across 10 stores in the USA, UK, and Colombia.",
        stat2: "32% cart conversion rate uplift for brands using SD.",
        stat3: "38% of available pools voluntarily redirected to conservation. The default was 30%.",
        body: "No reward was offered. When the choice was transparent, people chose the planet."
      };

  const closingCopy = isSpanish
    ? {
        headline: "El mecanismo esta listo. El planeta no puede esperar.",
        merchant: "Agrega SD a tu tienda Shopify. Gratis.",
        nonShopify: "¿Otra plataforma? Nos integramos en 48 horas. Hable con nosotros.",
        movement: "¿Quieres promover el movimiento? Ponte en contacto."
      }
    : {
        headline: "The mechanism is ready. The planet cannot wait.",
        merchant: "Add SD to your Shopify store. Free.",
        nonShopify: "Different platform? We integrate in 48 hours. Talk to us.",
        movement: "Want to promote the movement? Get in touch."
      };

  return (
    <Layout title={t("meta.homeTitle")} description={t("meta.homeDescription")}>
      <Hero />
      <Benefits />

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="sd-section-title text-center mb-3">{ideaCopy.headline}</h2>
          <p className="sd-home-copy text-center mx-auto mb-5" style={{ maxWidth: "780px" }}>
            {ideaCopy.body}
          </p>
          <Row className="g-4 justify-content-center">
            {[ideaCopy.step1, ideaCopy.step2, ideaCopy.step3].map((item, index) => (
              <Col md={4} key={index}>
                <article className="sd-step-card h-100">
                  <h3 className="sd-step-number">Step {index + 1}</h3>
                  <p className="mb-0">{item}</p>
                </article>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/how-it-works">
              <button className="sd-cta-btn">{ideaCopy.linkText}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="sd-section-title text-center mb-5">{isSpanish ? "Tres audiencias. Un mecanismo." : "Three audiences. One mechanism."}</h2>
          <Row className="g-4">
            {audienceCards.map((card) => (
              <Col md={4} key={card.title}>
                <article className="sd-audience-card h-100">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <p className="fw-semibold">{card.foot}</p>
                  <Link href={card.href}>
                    <button className="sd-link-btn mt-3">{card.cta}</button>
                  </Link>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <div className="sd-proof-strip text-center">
            <h2 className="sd-section-title text-center">{isSpanish ? "Validado de manera independiente" : "Independently validated"}</h2>
            <ul className="sd-proof-items list-unstyled d-flex flex-wrap justify-content-center gap-3 mx-auto" style={{ maxWidth: "980px" }}>
              {proofItems.map((item) => (
                <li className="sd-proof-item p-3" key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="sd-section pt-0 sd-beta-block">
        <Container className="px-4 px-lg-5">
                    <h2 className="sd-section-title text-center mb-4">{betaCopy.label}</h2>

          <p className="sd-section-label text-center mb-2">{betaCopy.headline}</p>
          <Row className="g-4 justify-content-center">
            {[betaCopy.stat1, betaCopy.stat2, betaCopy.stat3].map((stat, index) => (
              <Col md={6} lg={4} key={index}>
                <article className="sd-stat-card sd-stat-card-highlight h-100 d-flex align-items-center justify-content-center text-center">
                  <div>
                    <p className="sd-stat-card-text mb-4">{stat}</p>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
          <p className="text-center mt-4 mx-auto sd-beta-description" style={{ maxWidth: "720px" }}>
            {betaCopy.body}
          </p>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-title mb-4">{closingCopy.headline}</h2>
          <Row className="g-3 justify-content-center">
            <Col md={4}>
              <Link href="/how-it-works">
                <button className="sd-cta-btn w-100">{closingCopy.merchant}</button>
              </Link>
            </Col>
            <Col md={4}>
              <Link href="/faq">
                <button className="sd-cta-btn w-100">{closingCopy.nonShopify}</button>
              </Link>
            </Col>
            <Col md={4}>
              <Link href="/about#team">
                <button className="sd-cta-btn w-100">{closingCopy.movement}</button>
              </Link>
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
