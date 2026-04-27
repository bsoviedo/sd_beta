import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

function Benefits() {
  const { t } = useTranslation("common");

  const cards = [
    {
      title: t("home.benefits.items.0.title"),
      body: t("home.benefits.items.0.body")
    },
    {
      title: t("home.benefits.items.1.title"),
      body: t("home.benefits.items.1.body")
    },
    {
      title: t("home.benefits.items.2.title"),
      body: t("home.benefits.items.2.body")
    }
  ];

  return (
    <section className="sd-section" id="how">
      <Container className="px-4 px-lg-5">
        <h2 className="sd-section-title">{t("home.benefits.title")}</h2>
        <p>{t("home.benefits.description")}</p>
        <Row className="g-4 mt-2">
          {cards.map((card, index) => (
            <Col md={4} key={card.title}>
              <article className="sd-card h-100 p-4">
                <div className="sd-step-number">{index + 1}</div>
                <h4 className="text-start mt-0">{card.title}</h4>
                <p className="mb-0">{card.body}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
