import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

function Newsletter() {
  const { t } = useTranslation("common");
  const [status, setStatus] = useState("idle");

  const onSubmit = (event) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section className="sd-section pt-0" id="newsletter">
      <Container className="px-4 px-lg-5">
        <Row className="justify-content-center">
          <Col xl={10}>
            <div className="sd-newsletter p-4 p-md-5">
              <h3>{t("home.newsletter.title")}</h3>
              <p>{t("home.newsletter.description")}</p>
              <Form onSubmit={onSubmit}>
                <Row className="g-3 align-items-end">
                  <Col md={6}>
                    <Form.Label>{t("home.newsletter.name")}</Form.Label>
                    <Form.Control className="sd-input" required type="text" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>{t("home.newsletter.email")}</Form.Label>
                    <Form.Control className="sd-input" required type="email" />
                  </Col>
                  <Col>
                    <Button className="sd-cta-btn" type="submit">
                      {t("home.newsletter.cta")}
                    </Button>
                  </Col>
                </Row>
              </Form>
              {status === "submitted" ? <p className="mb-0 mt-3">{t("home.newsletter.confirmation")}</p> : null}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
