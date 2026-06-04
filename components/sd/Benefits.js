import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

function Benefits() {
  const { t } = useTranslation("common");

  const cards = [
    {
      stat: t("benefits.card1Stat"),
      body: t("benefits.card1Body"),
      theme: "midnight"
    },
    {
      stat: t("benefits.card2Stat"),
      body: t("benefits.card2Body"),
      theme: "coral"
    },
    {
      stat: t("benefits.card3Stat"),
      body: t("benefits.card3Body"),
      theme: "violet"
    }
  ];

  return (
    <section className="sd-section" id="how">
      <Container className="px-4 px-lg-5">
        <h2 className="sd-section-title text-center">{t("benefits.title")}</h2>
        <p className="sd-section-label text-center mb-3">{t("benefits.label")}</p>
        <Row className="g-4 mt-4 justify-content-center">
          {cards.map((card) => (
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
