import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";

const wildlifeSlides = [
  {
    image: "https://cdn.pixabay.com/photo/2019/01/09/19/09/scarlet-macaw-tropical-bird-3924046_1280.jpg",
    title: "160 species of birds"
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/04/05/11/08/monkey-314690_1280.jpg",
    title: "10 species of primates"
  },
  {
    image: "https://cdn.pixabay.com/photo/2013/02/06/13/28/rainforest-78516_1280.jpg",
    title: "310 species of trees"
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/02/09/09/38/piranha-262575_1280.jpg",
    title: "44 types of fish"
  },
  {
    image: "https://cdn.pixabay.com/photo/2018/04/03/05/04/nature-3285959_1280.jpg",
    title: "33 species of amphibians"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/04/20/12/33/anaconda-1341077_1280.jpg",
    title: "22 species of reptiles"
  },
  {
    image: "https://cdn.pixabay.com/photo/2019/08/13/05/15/orchid-4402520_1280.jpg",
    title: "96 types of epiphytes"
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/03/14/03/45/beetle-672638_1280.jpg",
    title: "1 million invertebrates"
  }
];

export default function OurImpactPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const isSpanish = locale === "es";

  const copy = isSpanish
    ? {
        topTag: "Sustainable Discounts",
        title: "Alineando las ganancias con el impacto al planeta",
        quote: "Para evitar la catastrofe climatica, invierte rapidamente en las soluciones climaticas mas efectivas de freno de emergencia.",
        quoteSource: "Proyecto Drawdown, septiembre de 2023",
        allyTitle: "La Naturaleza Es Nuestra Mejor Aliada",
        allyBody:
          "Identificar donde invertir es importante. En Cornell University, nuestro equipo identifica proyectos naturales con potencial de impacto instantaneo.",
        scienceTitle: "Precision Cientifica",
        scienceBody:
          "Mandatum se basa en ciencia y datos para asignar contribuciones de forma estrategica y proteger sumideros naturales de carbono.",
        trackingTitle: "Seguimiento en Linea",
        terrasosTitle: "Terrasos - El Globo",
        cloudForest: "HA DE BOSQUE DE NIEBLA",
        species: "ESPECIES ANIMALES Y VEGETALES",
        waterfalls: "CASCADAS",
        overallTitle: "Resultados generales",
        trees: "ARBOLES PROTEGIDOS",
        co2: "TONELADAS ESTIMADAS DE CO2 SECUESTRADAS",
        hectares: "HECTAREAS PROTEGIDAS",
        speciesPerHa: "especies protegidas por hectarea"
      }
    : {
        topTag: "Sustainable Discounts",
        title: "Aligning Profit with Planetary Impact",
        quote: "To avoid climate catastrophe, invest in the most effective emergency brake climate solutions swiftly.",
        quoteSource: "Drawdown Project, September 2023",
        allyTitle: "Nature Is Our Best Ally",
        allyBody:
          "Pinpointing where to invest matters. At Cornell University, our team identifies nature projects with instant impact potential.",
        scienceTitle: "Scientific Precision",
        scienceBody:
          "Mandatum relies on science and data to allocate contributions strategically and protect natural carbon sinks.",
        trackingTitle: "Online Tracking",
        terrasosTitle: "Terrasos - El Globo",
        cloudForest: "HA OF CLOUD FOREST",
        species: "ANIMAL AND PLANT SPECIES",
        waterfalls: "WATERFALLS",
        overallTitle: "Overall results",
        trees: "TREES PROTECTED",
        co2: "CO2 SEQUESTERED ESTIMATED IN TONS",
        hectares: "HECTARES PROTECTED",
        speciesPerHa: "species protected per hectare"
      };

  const donations = 300;
  const costPerHa = 9.05;
  const trees = Math.round((donations / costPerHa) * 565);
  const co2Seq = Math.round((donations / 20) * 582.0644);
  const hectares = Math.round(donations / costPerHa);

  return (
    <Layout title={t("meta.impactTitle")} description={t("meta.impactDescription")}>
      <section className="sd-oi-hero">
        <Container fluid className="px-0">
          <Row className="g-0 align-items-stretch">
            <Col lg={6} className="sd-oi-hero-image-wrap">
              <img src="/img/our-impact/landing-image.png" alt="Our impact hero" className="sd-oi-hero-image" />
            </Col>
            <Col lg={6} className="sd-oi-hero-copy-wrap">
              <div className="sd-oi-hero-copy">
                <p className="sd-oi-kicker mb-2">{copy.topTag}</p>
                <h1 className="mb-3">{copy.title}</h1>
                <p className="mb-2">"{copy.quote}"</p>
                <p className="sd-oi-quote-source mb-0">- {copy.quoteSource}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2>🌱<br />{copy.allyTitle}</h2>
          <p className="mx-auto sd-oi-maxcopy">{copy.allyBody}</p>
          <h2>💡<br />{copy.scienceTitle}</h2>
          <p className="mx-auto sd-oi-maxcopy">{copy.scienceBody}</p>
          <h2>🌐<br />{copy.trackingTitle}</h2>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <div className="sd-oi-logo-wrap">
            <img src="/img/our-impact/Log_Ter_NyA_Ver.png" alt="Terrasos" className="sd-oi-logo" />
          </div>
          <h3 className="text-center mb-4">{copy.terrasosTitle}</h3>
          <Row className="g-4">
            <Col lg={6}>
              <article className="sd-oi-card sd-oi-card-large">
                <img src="/img/our-impact/BOSQUE%20DE%20NIEBLA.jpg" alt="Cloud forest" className="sd-oi-card-image" />
                <div className="sd-oi-card-content">
                  <h3>340</h3>
                  <p className="mb-0">{copy.cloudForest}</p>
                </div>
              </article>
            </Col>
            <Col lg={6}>
              <Row className="g-4">
                <Col md={6} lg={12}>
                  <article className="sd-oi-card">
                    <img src="/img/our-impact/LORO%20OREJIAMARILLO.jpg" alt="Species" className="sd-oi-card-image" />
                    <div className="sd-oi-card-content">
                      <h3>+300</h3>
                      <p className="mb-0">{copy.species}</p>
                    </div>
                  </article>
                </Col>
                <Col md={6} lg={12}>
                  <article className="sd-oi-card">
                    <img src="/img/our-impact/AGUA.jpg" alt="Waterfalls" className="sd-oi-card-image" />
                    <div className="sd-oi-card-content">
                      <h3>16</h3>
                      <p className="mb-0">{copy.waterfalls}</p>
                    </div>
                  </article>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5">
          <h3 className="text-center mb-4">{copy.overallTitle}</h3>
          <Row className="g-4">
            <Col lg={6}>
              <article className="sd-oi-card sd-oi-card-large">
                <img src="https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg" alt="Trees protected" className="sd-oi-card-image" />
                <div className="sd-oi-card-content">
                  <h3>{new Intl.NumberFormat("en-US").format(trees)}</h3>
                  <p className="mb-0">{copy.trees}</p>
                </div>
              </article>
            </Col>
            <Col lg={6}>
              <Row className="g-4">
                <Col md={6} lg={12}>
                  <article className="sd-oi-card">
                    <img src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg" alt="CO2" className="sd-oi-card-image" />
                    <div className="sd-oi-card-content">
                      <h3>{new Intl.NumberFormat("en-US").format(co2Seq)}</h3>
                      <p className="mb-0">{copy.co2}</p>
                    </div>
                  </article>
                </Col>
                <Col md={6} lg={12}>
                  <article className="sd-oi-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Amazonia.jpg" alt="Hectares" className="sd-oi-card-image" />
                    <div className="sd-oi-card-content">
                      <h3>{new Intl.NumberFormat("en-US").format(hectares)}</h3>
                      <p className="mb-0">{copy.hectares}</p>
                    </div>
                  </article>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="mb-4">1,000+ {copy.speciesPerHa}</h2>
          <div className="sd-oi-carousel-wrap">
            <Carousel>
              {wildlifeSlides.map((slide) => (
                <Carousel.Item key={slide.image}>
                  <img className="sd-oi-carousel-image" src={slide.image} alt={slide.title} />
                  <Carousel.Caption>
                    <h3>{slide.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
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
