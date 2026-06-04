import Link from "next/link";
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

  const heroCopy = isSpanish
    ? {
        title: "Recupera control de precios, mejora ganancias.",
        description:
          "SD convierte una parte de las tarifas que entregas a la infraestructura del marketplace en un descuento para compradores, una contribucion de conservacion y margen recuperado para tu marca. Sin costo adicional. Sin presupuesto de donaciones."
      }
    : {
        title: "Recover pricing control, improve profits.",
        description:
          "SD converts a portion of the fees you surrender to marketplace infrastructure into a discount for shoppers, a conservation contribution, and recovered margin for your brand. No additional cost. No donation budget required."
      };

  const problemCopy = isSpanish
    ? {
        title: "Por cada $1,000 en ingresos.",
        body: "Hasta $400 van a las tarifas del marketplace. El comprador no conoce la division. Muchos acuerdos exigen paridad de precios. No puedes ofrecer el mismo producto mas barato en tu propia tienda. Ganas menos en el marketplace y no puedes competir directamente. Eso es el secreto. SD lo hace visible."
      }
    : {
        title: "For every $1,000 in revenue.",
        body: "Up to $400 goes to marketplace fees. The shopper doesn't know the split. And most marketplace agreements include a price parity clause. You cannot offer the same product for less on your own store. So you earn less on the marketplace, and you can't compete on your own channel. That is the secret. SD makes it visible."
      };

  const mechanismCopy = isSpanish
    ? {
        headline: "Esto es lo que cambia cuando SD esta activo en tu tienda.",
        without: [
          "Shopper pays: $1,000",
          "Marketplace takes: up to $400",
          "Your revenue: $600 or less",
          "Nature receives: $0"
        ],
        withSD: [
          "Shopper pays: $930 (received a $70 discount)",
          "Your revenue: $900 ($300 more than through the marketplace)",
          "Nature receives: at least $30, up to $100 via the slider",
          "SD operational fee: 10% of the conservation contribution: at least $3, up to $10 via slider."
        ],
        body: "Tu defines el pool. SD garantiza minimo 30% para conservacion. El resto es el descuento del comprador. El comprador usa el slider para decidir: mantener mas descuento o dar mas al planeta. Tu siempre recibes $900. Tu margen es fijo. La variable es el comprador.",
        quote: "El primer mecanismo de financiamiento donde todos ganan por diseño."
      }
    : {
        headline: "Here is what changes when SD is live on your store.",
        without: [
          "Shopper pays: $1,000",
          "Marketplace takes: up to $400",
          "Your revenue: $600 or less",
          "Nature receives: $0"
        ],
        withSD: [
          "Shopper pays: $930 (received a $70 discount)",
          "Your revenue: $900 ($300 more than through the marketplace)",
          "Nature receives: at least $30, up to $100 via the slider",
          "SD operational fee: 10% of the conservation contribution: at least $3, up to $10 via slider."
        ],
        body: "You set the pool. SD guarantees 30% minimum goes to conservation. The rest is the shopper discount. The shopper uses the slider to decide: keep more discount, or give more to the planet. You always receive $900. Your revenue is fixed. The shopper carries the only variable.",
        quote: "The first funding mechanism where everyone wins by design."
      };

  const featureItems = isSpanish
    ? [
        {
          title: "Un banner en la pagina de producto.",
          body: "Shop now and we give you and the planet up to $X on this item. Una declaracion financiera, no una ventana de donacion."
        },
        {
          title: "Metricas de conservacion en tiempo real.",
          body: "Metros cuadrados de habitat protegido, especies apoyadas, CO2 evitado. Calculado en tiempo real."
        },
        {
          title: "El slider.",
          body: "El comprador divide el pool. Tu no participas. Tu margen es fijo."
        },
        {
          title: "Una pagina de sostenibilidad para tu marca.",
          body: "Impacto acumulado, actualizado en tiempo real. SD provee los activos de marketing."
        },
        {
          title: "Documentacion de impacto.",
          body: "Certificados de conservacion, registros de creditos de biodiversidad o reportes consolidados. SD lo maneja todo."
        },
        {
          title: "Acceso a la red myplanetaccount.com.",
          body: "Compradores eco-conscientes acumulan historiales de conservacion cross-brand. Tu marca forma parte de esa red."
        }
      ]
    : [
        {
          title: "A banner at the product page.",
          body: "\"Shop now and we give you and the planet up to $X on this item.\" A financial announcement, not a donation popup."
        },
        {
          title: "Real-time conservation metrics.",
          body: "Square meters of habitat protected, species supported, CO2 avoided. Calculated in real time."
        },
        {
          title: "The slider.",
          body: "The shopper splits the pool. You are not involved. Your margin is fixed."
        },
        {
          title: "A sustainability landing page for your brand.",
          body: "Your cumulative impact, updated in real time. SD provides the marketing assets."
        },
        {
          title: "Impact documentation.",
          body: "Conservation certificates, biodiversity credit records, or consolidated reports. SD handles everything."
        },
        {
          title: "Access to the myplanetaccount.com network.",
          body: "Eco-conscious shoppers accumulate cross-brand conservation histories. Your brand is part of that network."
        }
      ];

  const industriesCopy = isSpanish
    ? [
        {
          title: "Moda y calzado",
          body: "SD da al sector de la moda un impacto de conservacion inmediato y medible. Empezando con la proxima transaccion."
        },
        {
          title: "Articulos deportivos",
          body: "Esquiadores necesitan nieve. Surfistas necesitan oceanos sanos. SD es el motor de financiamiento que faltaba en la sostenibilidad del deporte."
        },
        {
          title: "Electronica, muebles, electrodomesticos, herramientas",
          body: "Altos valores de transaccion, fuerte crecimiento DTC, tarifas significativas. El nucleo de la oportunidad de $2T."
        }
      ]
    : [
        {
          title: "Fashion and footwear",
          body: "SD gives fashion immediate, measurable conservation impact. Starting with the next transaction."
        },
        {
          title: "Sporting goods",
          body: "Skiers need snow. Surfers need healthy oceans. SD is the funding engine that sustainability frameworks in sport have been missing."
        },
        {
          title: "Electronics, furniture, home appliances, tools",
          body: "High transaction values, strong DTC growth, significant fees. The bulk of the $2 trillion opportunity."
        }
      ];

  const startSteps = isSpanish
    ? [
        { title: "Instala la app gratuita de Shopify.", body: "Disponible para los mas de 5 millones de tiendas Shopify. Gratis. Sin contrato." },
        { title: "Elige los productos a activar.", body: "Configura tu porcentaje de pool. SD activa automaticamente el banner y el slider." },
        { title: "Lanza, rastrea y comparte.", body: "Tu pagina de sostenibilidad se publica. Las contribuciones se transfieren a proyectos verificados en 90 dias." }
      ]
    : [
        { title: "Install the free Shopify app.", body: "Available to all 5+ million Shopify stores. Free. No contract." },
        { title: "Choose which products to activate.", body: "Set your pool percentage. SD activates the banner and slider automatically." },
        { title: "Launch, track, and share.", body: "Your sustainability page goes live. Contributions transfer to verified projects within 90 days." }
      ];

  const betaStats = isSpanish
    ? [
        "60,000+ interacciones de consumidores en 10 tiendas en EE. UU., Reino Unido y Colombia.",
        "32% de aumento en la tasa de conversión del carrito.",
        "38% de los pools de descuento se redirigieron voluntariamente a conservacion. El predeterminado era 30%."
      ]
    : [
        "60,000+ consumer interactions across 10 stores in the USA, UK, and Colombia.",
        "32% cart conversion rate uplift.",
        "38% of discount pools voluntarily redirected to conservation. The default was 30%."
      ];

  return (
    <Layout title={t("meta.howTitle")} description={t("meta.howDescription")}>
      <PageHero title={heroCopy.title} description={heroCopy.description} carouselSide="left" />

      <section className="sd-section sd-compact pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-2">{problemCopy.title}</h2>
          <p className="text-center mx-auto sd-text-muted" style={{ maxWidth: "760px", fontSize: "0.95rem" }}>{problemCopy.body}</p>
        </Container>
      </section>

      <section className="sd-section sd-compact pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{mechanismCopy.headline}</h2>
          <Row className="g-3">
            <Col md={6}>
              <article className="sd-comparison-card sd-card-compact h-100">
                <h3>{isSpanish ? "Sin SD" : "Without SD"}</h3>
                <ul>
                  {mechanismCopy.without.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Col>
            <Col md={6}>
              <article className="sd-comparison-card sd-card-compact h-100">
                <h3>{isSpanish ? "Con SD - ejemplo 10% de pool" : "With SD - 10% pool example"}</h3>
                <ul>
                  {mechanismCopy.withSD.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Col>
          </Row>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>{mechanismCopy.quote}</p>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{isSpanish ? "Como se ve SD para tu marca en la practica." : "What SD looks like for your brand, in practice."}</h2>
          <Row className="g-4 sd-feature-grid">
            {featureItems.map((item, index) => (
              <Col md={6} key={item.title}>
                <article className="sd-feature-card sd-feature-card-hero h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="sd-feature-card-number">0{index + 1}</div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-compact pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-3">{isSpanish ? "La historia de conservacion que ningun marketplace puede igualar" : "The Conservation Story No Marketplace Can Match"}</h2>
          <p className="text-center mx-auto sd-text-muted" style={{ maxWidth: "760px", fontSize: "0.95rem" }}>
            {isSpanish
              ? "El modelo de negocio del marketplace depende de que el secreto permanezca intacto. Cuando los compradores ven el precio real, toman una decision diferente. En la beta privada, las marcas usando SD vieron un aumento del 32% en la conversion del carrito. Ese cliente no vino por publicidad. Vino porque la oferta era genuinamente mejor."
              : "Marketplace's business model depends on the secret staying intact. When shoppers see the real price, they make a different choice. In the private beta, brands using SD saw a 32% cart conversion uplift. That customer didn't come through advertising. They came because the deal was genuinely better."}
          </p>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{isSpanish ? "Industrias" : "Industries"}</h2>
          <Row className="g-4">
            {industriesCopy.map((item) => (
              <Col md={4} key={item.title}>
                <div className="sd-industry-item h-100">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{isSpanish ? "Como comenzar" : "How to Start"}</h2>
          <Row className="g-4 justify-content-center sd-step-list">
            {startSteps.map((step, index) => (
              <Col md={4} key={step.title}>
                <div className="sd-step-item h-100 d-flex flex-column justify-content-start">
                  <div className="sd-step-header">
                    <div className="sd-step-number">0{index + 1}</div>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.body}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/how-it-works">
              <button className="sd-cta-btn">{isSpanish ? "Agregar a Shopify. Gratis." : "Add to Shopify. Free."}</button>
            </Link>
            <Link href="/faq">
              <button className="sd-cta-btn sd-cta-secondary mt-3">{isSpanish ? "Solicita conversacion" : "Request a conversation"}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-last-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center mb-4">{isSpanish ? "Como lucian los numeros en el mundo real." : "What the numbers looked like in the real world."}</h2>
          <Row className="g-4 justify-content-center">
            {betaStats.map((stat) => (
              <Col md={12} key={stat}>
                <article className="sd-stat-card h-100">
                  <p className="mb-6">{stat}</p>
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
