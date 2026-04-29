import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Benefits() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const copy = locale === "es"
    ? {
        title: "Los consumidores demandan sostenibilidad",
        cards: [
          {
            stat: "80%",
            body: "Jovenes adultos dispuestos a pagar mas por productos sostenibles",
            theme: "midnight"
          },
          {
            stat: "91%",
            body: "Creen que las empresas deberian tomar accion climatica",
            theme: "coral"
          },
          {
            stat: "75%",
            body: "Buscan marcas que tengan un impacto positivo en el planeta",
            theme: "violet"
          }
        ]
      }
    : {
        title: "Consumers Demand Sustainability",
        cards: [
          {
            stat: "80%",
            body: "Young adults willing to pay more for sustainable products",
            theme: "midnight"
          },
          {
            stat: "91%",
            body: "Believe companies should take climate action",
            theme: "coral"
          },
          {
            stat: "75%",
            body: "Look for brands that have a positive impact on the planet",
            theme: "violet"
          }
        ]
      };

  return (
    <section className="sd-section" id="how">
      <Container className="px-4 px-lg-5">
        <h2 className="sd-section-title text-center">{copy.title}</h2>
        <Row className="g-4 mt-4 justify-content-center">
          {copy.cards.map((card) => (
            <Col md={6} lg={4} key={card.stat}>
              <article className="sd-stat-card h-100">
                <div className={`sd-stat-card-top sd-stat-card-top-${card.theme}`}>
                  <div className="sd-stat-card-value">{card.stat}</div>
                </div>
                <div className="sd-stat-card-bottom">
                  <h4 className="sd-stat-card-copy mb-0">{card.body}</h4>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
