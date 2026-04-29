import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function AboutPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const isSpanish = locale === "es";

  const impactCopy = isSpanish
    ? {
        title: "Mandatum y los ODS de la ONU",
        description: "Nos asociamos con los mejores proyectos ambientales para asegurar contribucion inmediata y maximo impacto.",
        image: "/img/about-us/E_SDG_PRINT-mandatum_es.png"
      }
    : {
        title: "Mandatum and the UN SDGs",
        description: "We partner with the world's best environmental projects to ensure immediate contribution and maximum impact.",
        image: "/img/about-us/E_SDG_PRINT-mandatum_en.png"
      };

  const teamCopy = isSpanish
    ? {
        title: "Nuestro equipo",
        description:
          "Nuestra cruzada es transformar el comercio para adaptarlo a la realidad del planeta frente al modelo insostenible de sobreabundancia. Somos pioneros en soluciones nature-positive con experiencia en proyectos de sostenibilidad computacional."
      }
    : {
        title: "Our team",
        description:
          "Our crusade is to transform commerce to the planet's reality from the unsustainable superabundance model that operates today. We are pioneers in nature-positive solutions with experience in implementing computational sustainable projects."
      };

  const mandateCopy = isSpanish
    ? {
        title: 'El "Mandatum" de nuestra vida',
        line1: 'Mandatum es la raiz latina de la palabra "Mandato".',
        line2: "Proteger nuestro planeta ya no es solo responsabilidad de los gobiernos. Es un mandato para todos en este planeta."
      }
    : {
        title: 'The "Mandatum" of our lifetime',
        line1: 'Mandatum is the Latin root of the word "Mandate."',
        line2: "Protecting our planet is no longer solely the responsibility of governments. It's a mandate to everyone on this planet."
      };

  const sponsorsTitle = isSpanish ? "Nuestros sponsors" : "Our sponsors";
  const teamMembers = [
    {
      name: "Damian Estrada",
      role: "Founder & CEO",
      image: "/img/about-us/team/damian-estrada.png",
      links: [
        { label: "in", href: "http://linkedin.com/in/damian-a-estrada" },
        { label: "tw", href: "https://twitter.com/ESTRADAMIAN" }
      ]
    },
    {
      name: "Jeisson Prieto",
      role: "Co-founder & CTO",
      image: "/img/about-us/team/jeisson-prieto.png",
      links: [
        { label: "in", href: "http://linkedin.com/in/jeisson-prieto" },
        { label: "sch", href: "https://scholar.google.com/citations?user=5hGcelEAAAAJ" }
      ]
    },
    {
      name: "Adrian Gross",
      role: "Growth advisor",
      image: "/img/about-us/team/adrian-gross.png",
      links: [{ label: "in", href: "https://www.linkedin.com/in/adrian-gross" }]
    },
    {
      name: "Brayan Oviedo",
      role: isSpanish ? "Desarrollador full-stack, Colombia" : "Full-stack developer, Colombia",
      image: "/img/about-us/team/team-brayan-oviedo.jpg",
      links: [{ label: "in", href: "https://www.linkedin.com/in/brayan-oviedo-yate-478072136/" }]
    },
    {
      name: "Claudia Estrada",
      role: isSpanish ? "Growth en Colombia" : "Growth in Colombia",
      image: "/img/about-us/team/team-claudia-estrada.jpg",
      links: [{ label: "in", href: "https://www.linkedin.com/in/claudia-maria-estrada-zuluaga-b43578184/" }]
    }
  ];

  const sponsors = [
    {
      name: "Life Changing Labs",
      href: "https://www.lifechanginglabs.com",
      logo: "https://morphic-images.s3.us-east-2.amazonaws.com/232/LCL_Website_Header_80b6013181.png"
    },
    {
      name: "On Deck",
      href: "https://www.beondeck.com/",
      logo: "https://assets-global.website-files.com/5fdbf0943c2eae424a7cde2c/5fdbf0943c2eae00d67ce58b_logo.svg"
    },
    {
      name: "StartUP FIU",
      href: "https://startup.fiu.edu/",
      logo: "https://d33wubrfki0l68.cloudfront.net/c11aa03e755fc0c298ea50472cec66952f5b1198/40088/images/startupfiuhrzcolor.png"
    },
    {
      name: "Ventures Accelerated",
      href: "https://www.venturesaccelerated.org",
      logo: "https://static.wixstatic.com/media/d42cb3_73d6a09265d54d88923a25c4bf0ec8fb~mv2.png/v1/crop/x_0,y_620,w_1500,h_260/fill/w_462,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png"
    }
  ];

  return (
    <Layout title={t("meta.aboutTitle")} description={t("meta.aboutDescription")}>
      <PageHero title={t("about.hero.title")} description={t("about.hero.description")} carouselSide="right" />
      <section className="sd-about-impact-section">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-about-impact-title">{isSpanish ? "🚀 Mandatum y los ODS de la ONU" : "🚀 Mandatum and the UN SDGs"}</h2>
          <p className="sd-about-impact-description mx-auto">{impactCopy.description}</p>
          <img className="sd-about-impact-image" src={impactCopy.image} alt={impactCopy.title} />
        </Container>
      </section>

      <section className="sd-section">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center">{teamCopy.title}</h2>
          <p className="sd-about-team-description text-center mx-auto">{teamCopy.description}</p>
          <Row className="g-4 mt-2 justify-content-center">
            {teamMembers.map((member) => (
              <Col lg={4} md={6} key={member.name}>
                <article className="sd-about-team-card text-center h-100">
                  <img className="sd-about-team-photo" src={member.image} alt={member.name} />
                  <h3 className="sd-about-team-name">{member.name}</h3>
                  <p className="sd-about-team-role">{member.role}</p>
                  <div className="sd-about-team-links">
                    {member.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="sd-about-team-link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} ${link.label}`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="sd-about-mandate">
        <Container className="px-4 px-lg-5">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <h2>{mandateCopy.title}</h2>
              <p>{mandateCopy.line1}</p>
              <p>{mandateCopy.line2}</p>
            </Col>
            <Col lg={5} className="text-center">
              <img className="sd-about-mandate-image" src="/img/about-us/landing-image.svg" alt={mandateCopy.title} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sd-section pt-5">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center">{sponsorsTitle}</h2>
          <Row className="g-4 mt-2 justify-content-center align-items-center">
            {sponsors.map((sponsor) => (
              <Col lg={3} md={6} key={sponsor.name}>
                <a href={sponsor.href} target="_blank" rel="noreferrer" className="sd-about-sponsor-link" aria-label={sponsor.name}>
                  <img className="sd-about-sponsor-logo" src={sponsor.logo} alt={sponsor.name} />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
