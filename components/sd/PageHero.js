import { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

function PageHero({ title, description, carouselSide = "right" }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const isCarouselLeft = carouselSide === "left";

  const landscapeSlides = [
    {
      src: "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=80&w=1800&auto=format&fit=crop",
      alt: "Forest landscape",
      label: "Forest",
      creditName: "Ales Krivec",
      creditUrl: "https://unsplash.com/@aleskrivec"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1669750791963-ec6f3a565fb9?q=80&w=1800&auto=format&fit=crop",
      alt: "Ocean landscape",
      label: "Ocean",
      creditName: "Tasha Marie",
      creditUrl: "https://unsplash.com/@teapalm"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1671611799147-68a4f9b3f0e1?q=80&w=1800&auto=format&fit=crop",
      alt: "Desert landscape",
      label: "Desert",
      creditName: "Wesley Tingey",
      creditUrl: "https://unsplash.com/@wesleyphotography"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673859054724-d3ce699da39d?q=80&w=1800&auto=format&fit=crop",
      alt: "Snow landscape",
      label: "Snow",
      creditName: "Febe Vanermen",
      creditUrl: "https://unsplash.com/@febev"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1676757789342-83f83f3534ca?q=80&w=1800&auto=format&fit=crop",
      alt: "Grassland landscape",
      label: "Grassland",
      creditName: "Sylwia Bartyzel",
      creditUrl: "https://unsplash.com/@sylwiabartyzel"
    }
  ];

  const carouselColumn = (
    <Col lg={6} className="sd-hero-media sd-hero-left px-3 px-md-4 px-lg-5" style={{ minHeight: "auto", paddingTop: "9rem" }}>
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
  );

  const textColumn = (
    <Col lg={6} className="sd-hero-content sd-hero-right d-flex align-items-center" style={{ minHeight: "auto" }}>
      <div className="sd-nature-depth" aria-hidden="true">
        <span className="sd-canopy sd-canopy-right" />
        <span className="sd-hill sd-hill-right" />
        <span className="sd-birds sd-birds-right" />
        <span className="sd-vine sd-vine-right" />
        <span className="sd-leaf-cluster sd-leaf-cluster-right" />
        <span className="sd-forest-line sd-forest-line-right" />
      </div>
      <Container className="px-4 px-lg-5 py-5" style={{ paddingTop: "9rem", display: "block" }}>
        <div style={{ maxWidth: "760px" }}>
          <h1 className="mb-3">{title}</h1>
          <p className="mb-0">{description}</p>
        </div>
      </Container>
    </Col>
  );

  return (
    <section className="sd-hero">
      <Container fluid className="px-0">
        <Row className="mx-0">
          {isCarouselLeft ? carouselColumn : textColumn}
          {isCarouselLeft ? textColumn : carouselColumn}
        </Row>
      </Container>
    </section>
  );
}

export default PageHero;
