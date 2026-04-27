import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("common");
  const [activeSlide, setActiveSlide] = useState(0);
  const landscapeSlides = [
    {
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80",
      alt: "Forest landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80",
      alt: "Ocean landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1800&q=80",
      alt: "Desert landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1800&q=80",
      alt: "Snow landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80",
      alt: "Grassland landscape"
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
              <h1 className="visually-hidden">{t("home.hero.title")}</h1>
              <div className="sd-hero-copy">
                <img
                  className="sd-wordmark-inline"
                  src="/logos/Wordmark_with_TM-removebg-preview.png"
                  alt={t("home.hero.title")}
                />
                <p>{t("home.hero.subtitle")}</p>
                <div className="sd-hero-cta-row">
                  <a href="#how"><button className="sd-cta-btn">{t("home.hero.primaryCta")}</button></a>
                  <a href="#newsletter"><Button className="sd-outline-btn">{t("home.hero.secondaryCta")}</Button></a>
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
