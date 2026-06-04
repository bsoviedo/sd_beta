import Link from "next/link";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("common");
  const [activeSlide, setActiveSlide] = useState(0);
  const landscapeSlides = [
    {
      src: "/img/unsplash/jessy-hoffmann-5zu9E9cDR7s-unsplash.jpg",
      alt: "Leopardo caminando junto a un árbol",
      label: "Jaguar",
      creditName: "Jessy Hoffmann",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@jessreporter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Jessy Hoffmann</a> en <a href='https://unsplash.com/es/fotos/leopardo-caminando-junto-a-un-arbol-5zu9E9cDR7s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/zdenek-machacek-HYTwWSE5ztw-unsplash.jpg",
      alt: "Rana verde",
      label: "Rana",
      creditName: "Zdeněk Macháček",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Zdeněk Macháček</a> en <a href='https://unsplash.com/es/fotos/rana-verde-HYTwWSE5ztw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/dimitry-b-WPJrcj9_h6U-unsplash.jpg",
      alt: "Rana amarilla",
      label: "Rana",
      creditName: "Dimitry B",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@dimitry_b?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Dimitry B</a> en <a href='https://unsplash.com/es/fotos/una-rana-verde-en-una-hoja-WPJrcj9_h6U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/philip-graves-I7GLUheea0g-unsplash.jpg",
      alt: "Un pájaro en una rama",
      label: "Tucán",
      creditName: " Philip Graves",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@philipgraves97?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Philip Graves</a> en <a href='https://unsplash.com/es/fotos/un-pajaro-en-una-rama-I7GLUheea0g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/thomas-griggs-COTccpFTQsA-unsplash.jpg",
      alt: "Dos flamencos comiendo agua",
      label: "Flamencos",
      creditName: "Thomas Griggs",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@viajeenparacaidas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Thomas Griggs</a> en <a href='https://unsplash.com/es/fotos/dos-flamencos-comiendo-agua-COTccpFTQsA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/simone-dinoia-bMY8z1MLUOs-unsplash.jpg",
      alt: "El gorila está sentado en un árbol, entre las hojas.",
      label: "Gorila",
      creditName: " Simone Dinoia ",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@simonedna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Simone Dinoia</a> en <a href='https://unsplash.com/es/fotos/el-gorila-esta-sentado-en-un-arbol-entre-las-hojas-bMY8z1MLUOs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/pat-whelen-7h4yibuV3Ms-unsplash.jpg",
      alt: "Mono marrón colgando en la rama de un árbol durante el día",
      label: "Orangután",
      creditName: " Pat Whelen ",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@patwhelen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Pat Whelen</a> en <a href='https://unsplash.com/es/fotos/mono-marron-colgando-en-la-rama-de-un-arbol-durante-el-dia-7h4yibuV3Ms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/marcus-dall-col-lD-Dw38WAq0-unsplash.jpg",
      alt: "Una persona alimentando a un pez en un estanque",
      label: "Delfín",
      creditName: "Marcus Dall Col",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@marcusdallcol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Marcus Dall Col</a> en <a href='https://unsplash.com/es/fotos/una-persona-alimentando-a-un-pez-en-un-estanque-lD-Dw38WAq0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/todd-cravens-lwACYK8ScmA-unsplash.jpg",
      alt: "Ballena azul en el mar",
      label: "Ballena azul",
      creditName: "Todd Cravens",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@toddcravens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Todd Cravens</a> en <a href='https://unsplash.com/es/fotos/ballena-azul-en-el-mar-lwACYK8ScmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/guille-pozzi-PO0UHx-5mHo-unsplash.jpg",
      alt: "Dos ballenas negras nadando en un cuerpo de agua",
      label: "Ballena azul",
      creditName: "guille pozzi",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@guillepozzi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>guille pozzi</a> en <a href='https://unsplash.com/es/fotos/dos-ballenas-negras-nadando-en-un-cuerpo-de-agua-PO0UHx-5mHo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
    {
      src: "/img/unsplash/ilse-orsel-71kHyBGC6dQ-unsplash.jpg",
      alt: "Ballena saltando sobre el agua",
      label: "Ballena azul",
      creditName: "Ilse Orsel",
      creditUrl: "Foto de <a href='https://unsplash.com/es/@lgtts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ilse Orsel</a> en <a href='https://unsplash.com/es/fotos/ballena-saltando-sobre-el-agua-71kHyBGC6dQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
    },
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
