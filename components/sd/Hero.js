import Link from "next/link";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

export const landscapeSlides = [
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
    label: "Ballena ",
    creditName: "guille pozzi",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@guillepozzi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>guille pozzi</a> en <a href='https://unsplash.com/es/fotos/dos-ballenas-negras-nadando-en-un-cuerpo-de-agua-PO0UHx-5mHo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/ilse-orsel-71kHyBGC6dQ-unsplash.jpg",
    alt: "Ballena saltando sobre el agua",
    label: "Ballena",
    creditName: "Ilse Orsel",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@lgtts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ilse Orsel</a> en <a href='https://unsplash.com/es/fotos/ballena-saltando-sobre-el-agua-71kHyBGC6dQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/david-courbit-M8xxVih_V_U-unsplash.jpg",
    alt: "Tortuga marrón en el agua durante el día",
    label: "Tortuga",
    creditName: " David Courbit",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@jetlag?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>David Courbit</a> en <a href='https://unsplash.com/es/fotos/tortuga-marron-en-el-agua-durante-el-dia-M8xxVih_V_U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/david-courbit-9XzyEzPAHMI-unsplash.jpg",
    alt: "Tortuga marrón en cuerpo de agua",
    label: "Tortuga",
    creditName: " David Courbit",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@jetlag?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>David Courbit</a> en <a href='https://unsplash.com/es/fotos/tortuga-marron-en-cuerpo-de-agua-9XzyEzPAHMI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/francesco-ungaro-hqAGgNsMpEY-unsplash.jpg",
    alt: "peces grises y negros bajo el agua",
    label: "Corales",
    creditName: " Francesco Ungaro",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@francesco_ungaro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Francesco Ungaro</a> en <a href='https://unsplash.com/es/fotos/peces-grises-y-negros-bajo-el-agua-hqAGgNsMpEY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/hendrik-morkel-pnYRhSpYF9U-unsplash.jpg",
    alt: "Cocodrilos nadando en un lago tranquilo con árboles detrás.",
    label: "Cocodrilos",
    creditName: "Hendrik Morkel",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@hendrikmorkel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Hendrik Morkel</a> en <a href='https://unsplash.com/es/fotos/cocodrilos-nadando-en-un-lago-tranquilo-con-arboles-detras-pnYRhSpYF9U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/adele-beausoleil-K0SABlddN-o-unsplash.jpg",
    alt: "Cóndor de los andes",
    label: "Cóndor",
    creditName: "Adèle Beausoleil",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@adelebeausoleil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Adèle Beausoleil</a> en <a href='https://unsplash.com/es/fotos/persona-con-camisa-negra-sentada-en-rock-mountain-durante-el-dia-K0SABlddN-o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/zdenek-machacek-ekV_axnZRUA-unsplash.jpg",
    alt: "dos guacamayas rojas rojas",
    label: "Guacamayas",
    creditName: "Zdeněk Macháček",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Zdeněk Macháček</a> en <a href='https://unsplash.com/es/fotos/dos-guacamayas-rojas-rojas-ekV_axnZRUA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/paula-sleiman-3mMH9IvtTFU-unsplash.jpg",
    alt: "Un par de pájaros sentados en la cima de un árbol",
    label: "Guacamayas",
    creditName: "Paula Sleiman",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@paulinha52?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Paula Sleiman</a> en <a href='https://unsplash.com/es/fotos/un-par-de-pajaros-sentados-en-la-cima-de-un-arbol-3mMH9IvtTFU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/hiroko-yoshii-9y7y26C-l4Y-unsplash.jpg",
    alt: "banco de peces en cuerpo de agua",
    label: "Banco de peces",
    creditName: "Hiroko Yoshii",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@hiro0718?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Hiroko Yoshii</a> en <a href='https://unsplash.com/es/fotos/banco-de-peces-en-cuerpo-de-agua-9y7y26C-l4Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },

  {
    src: "/img/unsplash/ingo-stiller-KPT1H7rLEzk-unsplash.jpg",
    alt: "una jirafa de pie en un campo con árboles en el fondo",
    label: "Jirafa",
    creditName: "Ingo Stiller",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@ingo231177?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ingo Stiller</a> en <a href='https://unsplash.com/es/fotos/una-jirafa-de-pie-en-un-campo-con-arboles-en-el-fondo-KPT1H7rLEzk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/teresa-o-F-rmsJqJDlQ-unsplash.jpg",
    alt: "una jirafa de pie junto a un árbol en un campo",
    label: "Jirafa",
    creditName: "Teresa O.",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@terry885908?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Teresa O.</a> en <a href='https://unsplash.com/es/fotos/una-jirafa-de-pie-junto-a-un-arbol-en-un-campo-F-rmsJqJDlQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/max-kratzer-Dzsg0c95JyE-unsplash.jpg",
    alt: "Un mono está sentado en la rama de un árbol",
    label: "Titi",
    creditName: "Max Kratzer",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@meistertrunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Max Kratzer</a> en <a href='https://unsplash.com/es/fotos/un-mono-esta-sentado-en-la-rama-de-un-arbol-Dzsg0c95JyE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/max-kratzer-Dzsg0c95JyE-unsplash.jpg",
    alt: "Serpiente verde y blanco en la rama de un árbol",
    label: "Serpiente",
    creditName: "Ulrike Langner",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@u_langner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ulrike Langner</a> en <a href='https://unsplash.com/es/fotos/cocodrilo-verde-y-blanco-en-la-rama-de-un-arbol-rhh7HCARWHg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/wolfgang-hasselmann-YAIGmqV4dFc-unsplash.jpg",
    alt: "camello marrón en el desierto durante el día",
    label: "camello",
    creditName: "Wolfgang Hasselmann",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Wolfgang Hasselmann</a> en <a href='https://unsplash.com/es/fotos/camello-marron-en-el-desierto-durante-el-dia-YAIGmqV4dFc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/elie-khoury-qr0BfLPEEjA-unsplash.jpg",
    alt: "Un camello parado en medio de un desierto",
    label: "camello",
    creditName: "Elie Khoury",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@eliekhoury?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Elie Khoury</a> en <a href='https://unsplash.com/es/fotos/un-camello-parado-en-medio-de-un-desierto-qr0BfLPEEjA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/stephanie-leblanc-sGzCGGc_aaA-unsplash.jpg",
    alt: "Fruto verde en tronco de árbol marrón",
    label: "Hormigas",
    creditName: "Stephanie LeBlanc",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@sleblanc01?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Stephanie LeBlanc</a> en <a href='https://unsplash.com/es/fotos/fruto-verde-en-tronco-de-arbol-marron-sGzCGGc_aaA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/michael-jerrard-YQdmMkjWza8-unsplash.jpg",
    alt: "mariposa blanca y negra sobre hoja verde",
    label: "Mariposa",
    creditName: "Michael Jerrard",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@michaeljerrard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Michael Jerrard</a> en <a href='https://unsplash.com/es/fotos/mariposa-blanca-y-negra-sobre-hoja-verde-YQdmMkjWza8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    src: "/img/unsplash/katarzyna-zygnerska-REjGmtobbWw-unsplash (1).jpg",
    alt: "una mariposa sentada encima de una hoja verde",
    label: "Mariposa",
    creditName: "Katarzyna Zygnerska",
    creditUrl: "Foto de <a href='https://unsplash.com/es/@katasha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Katarzyna Zygnerska</a> en <a href='https://unsplash.com/es/fotos/una-mariposa-sentada-encima-de-una-hoja-verde-REjGmtobbWw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },


];

function Hero() {
  const { t } = useTranslation("common");
  const [activeSlide, setActiveSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const count = Math.random() < 0.5 ? 4 : 5;
    const shuffled = [...landscapeSlides]
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
    setSlides(shuffled);
    setMounted(true);
  }, []);

  const activeBackgroundImage = (mounted ? slides[activeSlide]?.src : landscapeSlides[0].src) || landscapeSlides[0].src;

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
              {!mounted ? (
                <figure className="sd-hero-slide-frame mb-0">
                  <img className="sd-hero-slide-image" src={landscapeSlides[0].src} alt={landscapeSlides[0].alt} />
                  <figcaption className="sd-hero-photo-credit">
                    <span>{landscapeSlides[0].label} | </span>
                    <a href={landscapeSlides[0].creditUrl} target="_blank" rel="noreferrer">
                      Photo by {landscapeSlides[0].creditName}
                    </a>
                  </figcaption>
                </figure>
              ) : (
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
                  {slides.map((slide) => (
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
              )}
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
                <img
                  src="/logos/Wordmark%20with%20TM_no_bg.png"
                  alt="Sustainable Discounts"
                  className="sd-wordmark-inline"
                />
                <h1>{t("home.heroExt.title")}</h1>
                <p className="sd-hero-tagline">{t("home.heroExt.tagline")}</p>
                <p className="mb-3">
                  {t("home.heroExt.description1")}
                </p>
                <p className="mb-4" style={{ fontSize: "1.05rem", fontWeight: "500" }}>
                  {t("home.heroExt.description2")}
                </p>
                <div className="sd-hero-cta-row">
                  <Link href="/for-merchants">
                    <button className="sd-cta-btn">
                      {t("home.heroExt.ctaBrand")}
                    </button>
                  </Link>
                  <Link href="/for-shoppers">
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
