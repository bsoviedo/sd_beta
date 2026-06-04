import Link from "next/link";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("common");
  const [activeSlide, setActiveSlide] = useState(0);
  const landscapeSlides = [
    {
      src: "https://images.unsplash.com/photo-5zu9E9cDR7s?auto=format&fit=crop&w=1800&q=80",
      alt: "Jaguar walking next to a tree",
      label: "Jaguar",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-HYTwWSE5ztw?auto=format&fit=crop&w=1800&q=80",
      alt: "Green frog",
      label: "Rana",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-WPJrcj9_h6U?auto=format&fit=crop&w=1800&q=80",
      alt: "Green frog on a leaf",
      label: "Rana en hoja",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-I7GLUheea0g?auto=format&fit=crop&w=1800&q=80",
      alt: "Toucan perched on a branch",
      label: "Tucán",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-COTccpFTQsA?auto=format&fit=crop&w=1800&q=80",
      alt: "Two flamingos feeding in water",
      label: "Flamencos",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-bMY8z1MLUOs?auto=format&fit=crop&w=1800&q=80",
      alt: "Gorilla sitting among leaves",
      label: "Gorila",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-7h4yibuV3Ms?auto=format&fit=crop&w=1800&q=80",
      alt: "Orangutan hanging from a tree branch",
      label: "Orangután",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-lD-Dw38WAq0?auto=format&fit=crop&w=1800&q=80",
      alt: "Pink dolphin in water",
      label: "Delfín rosado",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-lwACYK8ScmA?auto=format&fit=crop&w=1800&q=80",
      alt: "Humpback whale in the sea",
      label: "Ballena jorobada",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-PO0UHx-5mHo?auto=format&fit=crop&w=1800&q=80",
      alt: "Two whales swimming in water",
      label: "Ballenas negras",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-71kHyBGC6dQ?auto=format&fit=crop&w=1800&q=80",
      alt: "Whale jumping above the water",
      label: "Ballena saltando",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-M8xxVih_V_U?auto=format&fit=crop&w=1800&q=80",
      alt: "Sea turtle in the water",
      label: "Tortuga marina",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-9XzyEzPAHMI?auto=format&fit=crop&w=1800&q=80",
      alt: "Turtle in a body of water",
      label: "Tortuga marina",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-o9iSB_smxI4?auto=format&fit=crop&w=1800&q=80",
      alt: "Coral reef underwater",
      label: "Corales",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-hqAGgNsMpEY?auto=format&fit=crop&w=1800&q=80",
      alt: "Grey and black fish underwater",
      label: "Peces en coral",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-pnYRhSpYF9U?auto=format&fit=crop&w=1800&q=80",
      alt: "Crocodiles swimming in a lake",
      label: "Cocodrilo",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-K0SABlddN-o?auto=format&fit=crop&w=1800&q=80",
      alt: "Person on a rock mountain with condor",
      label: "Cóndor de los Andes",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-ekV_axnZRUA?auto=format&fit=crop&w=1800&q=80",
      alt: "Two red macaws",
      label: "Guacamayas",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-3mMH9IvtTFU?auto=format&fit=crop&w=1800&q=80",
      alt: "Pair of birds sitting atop a tree",
      label: "Guacamayas",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-9y7y26C-l4Y?auto=format&fit=crop&w=1800&q=80",
      alt: "School of fish in water",
      label: "Banco de peces",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-KPT1H7rLEzk?auto=format&fit=crop&w=1800&q=80",
      alt: "Giraffe standing in a field",
      label: "Jirafa",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-F-rmsJqJDlQ?auto=format&fit=crop&w=1800&q=80",
      alt: "Giraffe standing next to a tree",
      label: "Jirafa",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-KZBcR6k-dbA?auto=format&fit=crop&w=1800&q=80",
      alt: "Brown and white sloth sitting in a tree",
      label: "Oso perezoso",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-4Vp3rA1K5L8?auto=format&fit=crop&w=1800&q=80",
      alt: "Sloth hanging from a tree branch",
      label: "Oso perezoso",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-Dzsg0c95JyE?auto=format&fit=crop&w=1800&q=80",
      alt: "Titi monkey sitting in a tree",
      label: "Titi",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-rhh7HCARWHg?auto=format&fit=crop&w=1800&q=80",
      alt: "Green and white snake on a branch",
      label: "Serpiente",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-YAIGmqV4dFc?auto=format&fit=crop&w=1800&q=80",
      alt: "Camel in the desert",
      label: "Camello",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-qr0BfLPEEjA?auto=format&fit=crop&w=1800&q=80",
      alt: "Camel standing in the desert",
      label: "Camello",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-sGzCGGc_aaA?auto=format&fit=crop&w=1800&q=80",
      alt: "Ant on a green fruit",
      label: "Hormiga",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-YQdmMkjWza8?auto=format&fit=crop&w=1800&q=80",
      alt: "White and black butterfly on a green leaf",
      label: "Mariposa",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    },
    {
      src: "https://images.unsplash.com/photo-REjGmtobbWw?auto=format&fit=crop&w=1800&q=80",
      alt: "Butterfly sitting on a green leaf",
      label: "Mariposa",
      creditName: "Unsplash",
      creditUrl: "https://unsplash.com"
    }
  ];
  const activeBackgroundImage = landscapeSlides[activeSlide]?.src || landscapeSlides[0].src;

  return (
    <section className="sd-hero">
      <Container fluid className="px-0">
        <Row className="mx-0">
          <Col lg={6} className="sd-hero-media sd-hero-left px-3 px-md-4 px-lg-5">
            <div
              className="sd-hero-forest-bg"
              aria-hidden="true"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(233, 245, 235, 0.74), rgba(223, 239, 228, 0.34)), linear-gradient(12deg, rgba(8, 56, 32, 0.5), rgba(8, 56, 32, 0.08) 34%, rgba(8, 56, 32, 0.48)), url("${activeBackgroundImage}")`
              }}
            />
            <div className="sd-hero-left-decor" aria-hidden="true">
              <span className="sd-leaf sd-leaf-top" />
              <span className="sd-leaf sd-leaf-bottom" />
              <span className="sd-blob sd-blob-mid" />
            </div>
            <div className="sd-nature-depth" aria-hidden="true">
              <span className="sd-canopy sd-canopy-left" />
              <span className="sd-hill sd-hill-left" />
              <span className="sd-birds sd-birds-left" />
              <span className="sd-vine sd-vine-left" />
              <span className="sd-leaf-cluster sd-leaf-cluster-left" />
              <span className="sd-forest-line sd-forest-line-left" />
            </div>
            <div className="sd-hero-card">
              <Carousel
                className="sd-hero-carousel"
                controls={false}
                indicators
                interval={3600}
                activeIndex={activeSlide}
                onSelect={(selectedIndex) => setActiveSlide(selectedIndex)}
                pause={false}
                touch
              >
                {landscapeSlides.map((slide) => (
                  <Carousel.Item key={slide.src}>
                    <figure className="sd-hero-slide-frame mb-0">
                      <img className="sd-hero-slide-image" src={slide.src} alt={slide.alt} loading="lazy" />
                      <figcaption className="sd-hero-photo-credit">
                        <span>{slide.label} | </span>
                        <a href={slide.creditUrl} target="_blank" rel="noreferrer">
                          Photo by {slide.creditName}
                        </a>
                      </figcaption>
                    </figure>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col lg={6} className="sd-hero-content sd-hero-right d-flex align-items-center">
            <div className="sd-nature-depth" aria-hidden="true">
              <span className="sd-canopy sd-canopy-right" />
              <span className="sd-hill sd-hill-right" />
              <span className="sd-birds sd-birds-right" />
              <span className="sd-vine sd-vine-right" />
              <span className="sd-leaf-cluster sd-leaf-cluster-right" />
              <span className="sd-forest-line sd-forest-line-right" />
            </div>
            <Container className="px-4 px-lg-5 py-5 py-lg-0">
              <div className="sd-hero-copy">
                <h1>{t("home.heroExt.title")}</h1>
                <p className="sd-hero-tagline">{t("home.heroExt.tagline")}</p>
                <p className="mb-3">
                  {t("home.heroExt.description1")}
                </p>
                <p className="mb-4" style={{ fontSize: "1.05rem", fontWeight: "500" }}>
                  {t("home.heroExt.description2")}
                </p>
                <div className="sd-hero-cta-row">
                  <Link href="/how-it-works">
                    <button className="sd-cta-btn">
                      {t("home.heroExt.ctaBrand")}
                    </button>
                  </Link>
                  <Link href="/blog">
                    <button className="sd-cta-btn sd-cta-secondary">
                      {t("home.heroExt.ctaShopper")}
                    </button>
                  </Link>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
