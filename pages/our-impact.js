import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function OurImpactPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const isSpanish = locale === "es";

  const heroCopy = isSpanish
    ? {
        title: "Los numeros que importan.",
        description:
          "Cada contribucion rastreada. Cada dolar transferido. Cada hectarea documentada. Esta pagina muestra lo que SD ya ha hecho, no lo que planea hacer."
      }
    : {
        title: "The numbers that matter.",
        description:
          "Every contribution tracked. Every dollar transferred. Every hectare documented. This page shows what SD has actually done. Not what it plans to do."
      };

  const lastUpdated = "June 1, 2026";
  const counters = [
    { label: "Hectares of habitat protected", value: "12,340" },
    { label: "Tons of CO2 avoided", value: "8,920" },
    { label: "Species supported", value: "1,280" },
    { label: "Conservation contributions transferred", value: "$2.1M" },
    { label: "Merchants active on SD", value: "10" },
    { label: "Shopper interactions", value: "60,000+" }
  ];

  const betaStats = [
    "60,000+ consumer interactions.",
    "32% cart conversion rate uplift for brands using SD.",
    "38% average portion of discount pools redirected to conservation. Default was 30%.",
    "$0 additional cost to anyone. The money came from what was already being spent."
  ];

  const validationItems = [
    "Earthshot Prize 2025 - Nominated. One of the most rigorous environmental prize processes in the world.",
    "GEF and World Bank - Currently in due diligence. One of the highest levels of validation in conservation finance.",
    "Change100 Winner 2026 - Top Impact Startup to Watch, alongside Microsoft Entrepreneurship for Positive Impact.",
    "Cornell University Life Changing Labs - Accelerator Winner, Summer 2024."
  ];

  const sdgs = [
    {
      title: "SDG 1 - NO POVERTY",
      body: "1.2 billion people depend directly on forests for their livelihoods. When a forest goes, their economic base goes with it."
    },
    {
      title: "SDG 2 - ZERO HUNGER",
      body: "The Amazon generates the flying rivers that carry rainfall for hundreds of millions of people. Deforestation breaks that cycle."
    },
    {
      title: "SDG 3 - GOOD HEALTH",
      body: "Intact forests reduce the risk of zoonotic disease spillover. The science connecting deforestation to pandemic risk is well established."
    },
    {
      title: "SDG 6 - CLEAN WATER",
      body: "Forests are the most effective water filtration systems on Earth. When they go, rivers run brown and water costs rise."
    },
    {
      title: "SDG 8 - DECENT WORK",
      body: "Conservation projects funded by SD create employment in the most economically vulnerable regions: rangers, scientists, community monitors."
    },
    {
      title: "SDG 13 - CLIMATE ACTION",
      body: "Forest protection delivers over 30% of the emission reductions needed by 2030. Every intact hectare is a carbon vault."
    },
    {
      title: "SDG 14 - LIFE BELOW WATER",
      body: "Reduced deforestation means less sediment runoff, protecting the reef and seagrass ecosystems that 3 billion people depend on for food."
    },
    {
      title: "SDG 15 - LIFE ON LAND",
      body: "Forest protection preserves biodiversity and supports indigenous communities, the most effective long-term stewards of their territories."
    }
  ];

  const partners = [
    {
      name: "Terrasos",
      detail: "Colombia - Verified biodiversity credits tied to traceable habitat protection. Active and deployed."
    },
    {
      name: "Panthera",
      detail: "Global - Wild cats and large intact ecosystems across the Americas, Africa, and Asia. Partnership agreed in principle. Due diligence ongoing."
    }
  ];

  return (
    <Layout title={t("meta.impactTitle")} description={t("meta.impactDescription")}>
      <PageHero title={heroCopy.title} description={heroCopy.description} carouselSide="right" />

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <p className="text-muted mb-2">Last updated {lastUpdated}</p>
          <Row className="g-4 justify-content-center">
            {counters.map((counter) => (
              <Col md={4} key={counter.label}>
                <article className="sd-counter-card h-100">
                  <h3>{counter.value}</h3>
                  <p className="mb-0">{counter.label}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{isSpanish ? "Lo que aprendimos antes de salir al publico." : "What we learned before going public."}</h2>
          <p className="sd-blog-text text-center mx-auto mb-4" style={{ maxWidth: "760px" }}>
            {isSpanish
              ? "10 tiendas. EE. UU., Reino Unido y Colombia. El objetivo fue prueba, no escala."
              : "10 stores. USA, UK, and Colombia. The goal was proof, not scale."}
          </p>
          <Row className="g-4 justify-content-center">
            {betaStats.map((stat) => (
              <Col md={6} key={stat}>
                <article className="sd-stat-card h-100">
                  <p className="sd-blog-text mb-3 mt-3 p-2">{stat}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{isSpanish ? "Organizaciones que tomaron a SD en serio." : "Organizations that took SD seriously."}</h2>
          <Row className="g-4">
            {validationItems.map((item) => (
              <Col md={6} key={item}>
                <div className="sd-proof-item">{item}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{isSpanish ? "Ocho ODS de la ONU" : "The Eight UN SDGs"}</h2>
          <p className="sd-blog-text text-center mx-auto mb-4" style={{ maxWidth: "760px" }}>
            {isSpanish
              ? "No es un reclamo de marketing. Es el resultado de decadas de investigacion sobre lo que significa mantener un bosque en pie."
              : "Not a marketing claim. The result of decades of research on what keeping a forest standing actually does."}
          </p>
          <Row className="g-4">
            {sdgs.map((item) => (
              <Col md={6} key={item.title}>
                <article className="sd-sdg-card h-100">
                  <h3>{item.title}</h3>
                  <p className="sd-blog-text">{item.body}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{isSpanish ? "Donde va el dinero." : "Where the money goes."}</h2>
          <Row className="g-4 justify-content-center">
            {partners.map((partner) => (
              <Col md={6} key={partner.name}>
                <article className="sd-partner-card h-100">
                  <h3>{partner.name}</h3>
                  <p className="sd-blog-text">{partner.detail}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">{isSpanish ? "Por que los numeros a escala no son especulativos." : "Why the numbers at scale are not speculative."}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-faq-criteria mb-4">
              <div className="sd-faq-criterion">
                <h4>Current</h4>
                <p className="sd-blog-metric-text">$208B/year conservation</p>
              </div>
              <div className="sd-faq-criterion">
                <h4>Gap</h4>
                <p className="sd-blog-metric-text">$942B needed annually</p>
              </div>
              <div className="sd-faq-criterion">
                <h4>Opportunity</h4>
                <p className="sd-blog-metric-text">$2T intermediary fees</p>
              </div>
            </div>
            <div className="sd-blog-highlight mb-4">
              <p className="sd-blog-text">10% capture = $200 billion for conservation</p>
            </div>
            <p className="sd-blog-text" style={{fontSize: "0.95rem"}}>It is much easier to redirect existing spending than to create new funding.</p>
          </div>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>{isSpanish ? "Es mucho mas facil redirigir el gasto existente que crear financiamiento nuevo." : "It is much easier to redirect existing spending than to create new funding."}</p>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-4">{isSpanish ? "A que se compromete SD con la transparencia." : "What SD commits to on transparency."}</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">90% → Projects (90 days)</div>
              <div className="sd-blog-metric">10% → Operations</div>
              <div className="sd-blog-metric">Surplus → Conservation</div>
            </div>
            <p className="sd-blog-text mb-3">Every allocation decision published with full reasoning and data.</p>
            <p className="sd-blog-text mb-4" style={{fontSize: "0.95rem"}}>Blockchain verification of contribution data planned for future phase. Until then, contribution records published every cycle.</p>
          </div>
          <a href="mailto:damian@mandatum.co">
            <button className="sd-cta-btn mt-3">{isSpanish ? "Solicita acceso a los datos" : "Request data access"}</button>
          </a>
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
