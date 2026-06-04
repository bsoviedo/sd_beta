import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function AboutPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const isSpanish = locale === "es";

  const heroCopy = isSpanish
    ? {
        title: "Nacido en el pais mas biodiverso de la Tierra.",
        description:
          "Construido para arreglar lo que el comercio rompio. Colombia alberga el 10% de las especies del planeta y sus bosques siguen perdiendose por fuerzas economicas que el financiamiento de conservacion nunca igualo."
      }
    : {
        title: "Born in the most biodiverse country on Earth.",
        description:
          "Built to fix what commerce broke. Colombia holds approximately 10% of all species on the planet and it is also losing forests to economic forces that conservation funding has never matched."
      };

  const originCopy = isSpanish
    ? {
        headline: "La pregunta que no dejaba de hacerse.",
        body: "Despues de liderar negocios de electronica de consumo de miles de millones de dolares, nuestro fundador vi como millones desaparecian en infraestructura de distribucion, mientras el planeta era ignorado. El siguio preguntando: y si ese dinero pudiera trabajar mas? La respuesta siempre fue la naturaleza.",
        quote: "No estamos resolviendo un problema hipotetico. Somos de Colombia, el pais mas biodiverso de la Tierra por kilometro cuadrado. Esto es personal.",
        author: "Damian Estrada, Fundador y CEO"
      }
    : {
        headline: "The question he couldn't stop asking.",
        body: "After running multi-billion dollar consumer electronics businesses, our founder watched billions disappear into distribution infrastructure, and ignoring the planet. He kept asking: what if that money could work harder? The answer was always nature.",
        quote: "We are not solving a hypothetical problem. We are from Colombia, the most biodiverse country on Earth per square kilometer. This is personal.",
        author: "Damian Estrada, Founder and CEO"
      };

  const problemCopy = isSpanish
    ? {
        headline: "La naturaleza no tiene un problema de soluciones. Tiene un problema de financiamiento.",
        body: "Los proyectos estan planeados. Los cientificos estan entrenados. Los guardianes estan listos. Lo que falta es el dinero. Recurrente, confiable, que no dependa de calendarios politicos."
      }
    : {
        headline: "Nature doesn't have a solutions problem. It has a funding problem.",
        body: "The projects are planned. The scientists are trained. The rangers are ready. What's missing is the money. Recurring, reliable, not dependent on political calendars."
      };

  const insightCopy = isSpanish
    ? {
        headline: "El dinero estaba ahi. Simplemente no iba a ningun lugar util.",
        body: "Cada compra de bienes duraderos incluye un costo oculto. Hasta el 40% del precio. Va a la infraestructura del marketplace. No al producto. No al planeta. SD no pide dinero nuevo. Pide que el comercio sea transparente sobre el dinero que ya existia.",
        link: "See exactly how the mechanism works"
      }
    : {
        headline: "The money is there. It just wasn't going anywhere useful.",
        body: "Every durable goods purchase includes a hidden cost. Up to 40% of the price. It goes to marketplace infrastructure. Not the product. Not the planet. SD doesn't ask for new money. It asks commerce to be transparent about money that was always there.",
        link: "See exactly how the mechanism works"
      };

  const solutionCopy = isSpanish
    ? {
        headline: "Un mecanismo de precios, no una caridad.",
        body: "SD se integra en el punto de venta. No pide donaciones. Reestructura la transaccion. Los compradores ahorran. Las marcas recuperan margen. La naturaleza recibe fondos. No por generosidad, sino por transparencia en el comercio."
      }
    : {
        headline: "A pricing mechanism, not a charity.",
        body: "SD is embedded at the point of sale. It doesn't ask for donations. It restructures the transaction. Shoppers save. Brands recover margin. Nature gets funded. Not from generosity but from adding transparency to commerce."
      };

  const visionCopy = isSpanish
    ? {
        headline: "Como se ve el mundo si esto funciona.",
        body: "El objetivo es duplicar las finanzas de conservacion global, de $208B a mas de $400B, usando comercio como motor. Capturar el 10% de los $2T en tarifas intermediarias genera $200B para la naturaleza. Dinero que paga el Marco Global de Biodiversidad. El cambio profundo es estructural: todas las compras de bienes duraderos contribuyen automaticamente a la naturaleza. Justicia climatica automatica."
      }
    : {
        headline: "What the world looks like if this works.",
        body: "The goal is to double global conservation finance, from $208 billion to over $400 billion, using commerce as the engine. Capturing 10% of the $2 trillion in intermediary fees generates $200 billion for nature. Money that pays for the Global Biodiversity Framework agreed by 195 countries. The deeper shift is structural: all durable goods purchases automatically contribute to nature. Automatic climate justice."
      };

  const teamMembers = [
    {
      name: "Damian Estrada",
      role: isSpanish ? "Fundador y CEO" : "Founder and CEO",
      href: "https://linkedin.com/in/damian-a-estrada"
    },
    {
      name: "Jeisson Prieto",
      role: isSpanish ? "Co-Fundador y CTO" : "Co-Founder and CTO",
      href: "https://linkedin.com/in/jeisson-prieto"
    },
    {
      name: "Brayan Oviedo",
      role: isSpanish ? "Desarrollador full-stack" : "Full-Stack Developer",
      href: "https://www.linkedin.com/in/brayan-oviedo-yate-478072136/"
    },
    {
      name: "Dylan Price",
      role: isSpanish ? "Growth Intern" : "Growth Intern",
      href: ""
    },
    {
      name: "Adrian Gross",
      role: isSpanish ? "Growth Advisor" : "Growth Advisor",
      href: "https://www.linkedin.com/in/adrian-gross"
    },
    {
      name: "Claudia Estrada",
      role: isSpanish ? "Colombia Growth Lead" : "Colombia Growth Lead",
      href: "https://www.linkedin.com/in/claudia-maria-estrada-zuluaga-b43578184/"
    }
  ];

  const philosophyCopy = isSpanish
    ? {
        headline: "Todos en este equipo eligieron estar aqui.",
        body: "Sin una gran ronda semilla. Sin equipo completo antes de la prueba. SD tuvo personas que decidieron que la mision valia su tiempo antes de que alguien garantizara que valdria su dinero."
      }
    : {
        headline: "Everyone on this team chose to be here.",
        body: "No large seed round. No full team before proof of concept. What SD had: people who decided the mission was worth their time before anyone guaranteed it would be worth their money."
      };

  const validatorsTitle = isSpanish ? "Externos que examinaron SD y lo tomaron en serio." : "External organizations that examined SD and took it seriously.";
  const validators = [
    "Earthshot Prize 2025 - Nominee",
    "GEF and World Bank - Due Diligence Phase",
    "Change100 Winner 2026 - Top Impact Startup to Watch",
    "Cornell University Life Changing Labs - Accelerator Winner, Summer 2024"
  ];

  return (
    <Layout title={t("meta.aboutTitle")} description={t("meta.aboutDescription")}>
      <PageHero title={heroCopy.title} description={heroCopy.description} carouselSide="right" />

      <section className="sd-section sd-blog-section">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{originCopy.headline}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-4">{originCopy.body}</p>
          </div>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>{originCopy.quote}</p>
            <footer className="sd-quote-author">{originCopy.author}</footer>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{problemCopy.headline}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-3">
              <p className="sd-blog-text">The projects are planned. The scientists are trained. The rangers are ready.</p>
            </div>
            <p className="sd-blog-text" style={{fontSize: "0.95rem"}}>What's missing: Recurring, reliable funding independent of political cycles.</p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{insightCopy.headline}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3">Every durable goods purchase includes a hidden cost.</p>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">Up to 40% of price</div>
              <div className="sd-blog-metric">Goes to infrastructure</div>
              <div className="sd-blog-metric">Not product. Not planet.</div>
            </div>
            <div className="sd-blog-highlight">
              <p className="sd-blog-text">SD doesn't ask for new money. It asks commerce to be transparent about money that was always there.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/how-it-works">
              <button className="sd-cta-btn">{insightCopy.link}</button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{solutionCopy.headline}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-point">
              <p className="sd-blog-text">SD is embedded at the point of sale. It doesn't ask for donations. It restructures the transaction.</p>
            </div>
            <div className="sd-blog-metrics mt-4">
              <div className="sd-blog-metric">✅ Shoppers save</div>
              <div className="sd-blog-metric">✅ Brands recover margin</div>
              <div className="sd-blog-metric">✅ Nature gets funded</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{visionCopy.headline}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3"><strong>The goal:</strong> Double global conservation finance from $208B to $400B+</p>
            <div className="sd-faq-criteria mb-4">
              <div className="sd-faq-criterion">
                <h4>Engine</h4>
                <p className="sd-blog-metric-text">Commerce as driver</p>
              </div>
              <div className="sd-faq-criterion">
                <h4>Opportunity</h4>
                <p className="sd-blog-metric-text">10% of $2T intermediary fees</p>
              </div>
              <div className="sd-faq-criterion">
                <h4>Impact</h4>
                <p className="sd-blog-metric-text">$200B for nature</p>
              </div>
            </div>
            <p className="sd-blog-text" style={{fontSize: "0.95rem"}}>Deeper shift: All durable goods purchases automatically contribute to nature. Automatic climate justice.</p>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0" id="team">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{isSpanish ? "El equipo" : "The team"}</h2>
          <p className="sd-blog-text mx-auto text-center mb-5" style={{ maxWidth: "760px" }}>
            {philosophyCopy.body}
          </p>
          <Row className="g-4 justify-content-center">
            {teamMembers.map((member) => (
              <Col md={6} lg={4} key={member.name}>
                <article className="sd-team-card h-100 text-center p-4">
                  <h3>{member.name}</h3>
                  <p className="mb-3">{member.role}</p>
                  {member.href ? (
                    <a href={member.href} target="_blank" rel="noreferrer" className="sd-link sd-link-inline">
                      linkedin.com/in/{member.href.split("/").pop()}
                    </a>
                  ) : (
                    <p className="text-muted mb-0">{isSpanish ? "Link de LinkedIn no disponible" : "LinkedIn not available"}</p>
                  )}
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-4">{validatorsTitle}</h2>
          <div className="sd-proof-items d-flex flex-column align-items-center gap-2 mx-auto" style={{ maxWidth: "720px" }}>
            {validators.map((item) => (
              <div key={item} className="sd-proof-item text-start w-100">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a href="mailto:damian@mandatum.co">
              <button className="sd-cta-btn">{isSpanish ? "Expresar interes" : "Express interest"}</button>
            </a>
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
