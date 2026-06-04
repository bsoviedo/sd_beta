import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";

function Benefits() {
  const { locale } = useRouter();

  const copy = locale === "es"
    ? {
        label: "La problematica en tres numeros",
        title: "La brecha entre la naturaleza y el financiamiento es real.",
        cards: [
          {
            stat: "$942B",
            body: "La brecha anual entre lo que la naturaleza necesita y lo que recibe. Crecio $200B en cuatro anos pese a los compromisos globales.",
            theme: "midnight"
          },
          {
            stat: "92%",
            body: "De los estadounidenses apoyan la Ley de Especies en Peligro. La voluntad esta. El problema es la asequibilidad.",
            theme: "coral"
          },
          {
            stat: "$0",
            body: "Lo que cuesta redirigir ese dinero. La ineficiencia siempre estuvo ahi. Solo tenemos que usarla mejor.",
            theme: "violet"
          }
        ]
      }
    : {
        label: "The Problem in Three Numbers",
        title: "The funding gap is real and the solution is already there.",
        cards: [
          {
            stat: "$942B",
            body: "The annual gap between what nature needs and what it receives. It grew $200B in four years despite global pledges.",
            theme: "midnight"
          },
          {
            stat: "92%",
            body: "Of Americans support the Endangered Species Act. Most people want to help the planet. The problem is affordability.",
            theme: "coral"
          },
          {
            stat: "$0",
            body: "What it costs to redirect that money. The inefficiency was always there. We can just use it better.",
            theme: "violet"
          }
        ]
      };

  return (
    <section className="sd-section" id="how">
      <Container className="px-4 px-lg-5">
        <h2 className="sd-section-title text-center">{copy.title}</h2>
        <p className="sd-section-label text-center mb-3">{copy.label}</p>
        <Row className="g-4 mt-4 justify-content-center">
          {copy.cards.map((card) => (
            <Col md={6} lg={4} key={card.stat}>
              <article className="sd-stat-card h-100">
                <div className={`sd-stat-card-top sd-stat-card-top-${card.theme}`}>
                  <div className="sd-stat-card-value">{card.stat}</div>
                </div>
                <div className="sd-stat-card-bottom">
                  <p className="sd-stat-card-copy mb-0">{card.body}</p>
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
