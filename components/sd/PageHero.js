import { Container } from "react-bootstrap";

function PageHero({ title, description }) {
  return (
    <section className="sd-hero">
      <Container className="px-4 px-lg-5 py-5" style={{ paddingTop: "9rem" }}>
        <h1>{title}</h1>
        <p className="mb-0" style={{ maxWidth: "760px" }}>
          {description}
        </p>
      </Container>
    </section>
  );
}

export default PageHero;
