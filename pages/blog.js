import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import PageHero from "components/sd/PageHero";

export default function ShoppersPage() {
  const { t } = useTranslation("common");
  const heroTitle = "Shop smarter. Pay less. Pay back the planet.";
  const heroDescription =
    "SD gives you a real discount on brands that sell direct. Part of what you would have paid in marketplace fees funds forest and ocean conservation instead. You choose how much of your saving goes to you, and how much goes to the planet.";

  return (
    <Layout title={t("meta.blogTitle")} description={t("meta.blogDescription")}>
      <PageHero title={heroTitle} description={heroDescription} carouselSide="left" />

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">Most people want to protect nature but can't afford to.</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-point mb-3">
              <p className="sd-blog-text"><strong>The problem:</strong> When you buy a $1,000 product through a marketplace, up to $400 goes to fees. You didn't know it. Most people don't.</p>
            </div>
            <div className="sd-blog-point mb-3">
              <p className="sd-blog-text"><strong>The opportunity:</strong> When you buy direct through an SD brand, that $400 goes somewhere better. You get a real discount. Nature gets funded.</p>
            </div>
            <div className="sd-blog-point">
              <p className="sd-blog-text"><strong>The outcome:</strong> At least $30 goes to verified conservation. The brand earns more. You pay less. Nobody loses.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">You decide how the pool splits.</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-3">
              <p className="sd-blog-text">"Shop now and we give you and the planet up to $X on this item."</p>
            </div>
            <p className="sd-blog-text mb-3">A popup opens. You see three real-world metrics:</p>
            <div className="sd-blog-metrics mb-4">
              <div className="sd-blog-metric">🌱 Habitat protected</div>
              <div className="sd-blog-metric">🦁 Species supported</div>
              <div className="sd-blog-metric">☁️ CO2 avoided</div>
            </div>
            <p className="sd-blog-text mb-3">Then the slider. Move left for more discount. Move right to help the planet. The brand earns the same either way.</p>
            <div className="sd-blog-stat">
              <p className="sd-blog-text"><strong>In private beta:</strong> 38% of pools went to conservation (default was 30%). People chose to give more.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">Every purchase builds a conservation history that's yours.</h2>
          <div className="sd-blog-content mx-auto text-center" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-4">Create a free account at <strong>myplanetaccount.com</strong></p>
            <p className="sd-blog-text mb-4">Your personal record across every SD brand you buy from:</p>
            <div className="sd-blog-records mb-4">
              <div className="sd-blog-record">Hectares protected</div>
              <div className="sd-blog-record">Species supported</div>
              <div className="sd-blog-record">CO2 offset</div>
            </div>
            <p className="sd-blog-text mb-4" style={{fontSize: "0.95rem"}}>Not a loyalty program. A record of what your commerce actually did for the planet.</p>
            <div className="mt-4">
              <a href="https://myplanetaccount.com">
                <button className="sd-cta-btn">Create your planet account. Free.</button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">Where the money goes.</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <p className="sd-blog-text mb-3">Every contribution funds <strong>scientifically verified projects</strong> reviewed by an independent allocation committee.</p>
            <div className="sd-blog-partners mb-4">
              <div className="sd-blog-partner">🐾 Panthera</div>
              <div className="sd-blog-partner">🌍 Terrasos</div>
            </div>
            <p className="sd-blog-text mb-4" style={{fontSize: "0.9rem"}}>Every contribution is tracked. Full documentation every cycle.</p>
          </div>
          <blockquote className="sd-pull-quote sd-pull-quote-hero mx-auto mt-4" style={{ maxWidth: "720px" }}>
            <p>“When given a transparent choice, shoppers chose the planet. Not out of obligation. Out of preference.”</p>
          </blockquote>
        </Container>
      </section>

      <section className="sd-section sd-blog-section sd-blog-cta-section pt-0">
        <Container className="px-4 px-lg-5 text-center">
          <h2 className="sd-section-accent mb-3">SD brands offering real discounts and real conservation.</h2>
          <p className="sd-blog-text mb-4" style={{ maxWidth: "760px", margin: "0 auto 2rem" }}>Discover brands that pay you back and pay back the planet.</p>
          <div>
            <a href="/">
              <button className="sd-cta-btn">Browse SD brands</button>
            </a>
          </div>
        </Container>
      </section>

      <section className="sd-section sd-blog-section pt-0">
        <Container className="px-4 px-lg-5">
          <h2 className="text-center sd-section-accent mb-4">The 38% story.</h2>
          <div className="sd-blog-content mx-auto" style={{ maxWidth: "800px" }}>
            <div className="sd-blog-highlight mb-3">
              <p className="sd-blog-text"><strong>Default:</strong> 30% to conservation</p>
              <p className="sd-blog-text" style={{fontSize: "1.3rem", color: "var(--sd-primary)", marginTop: "0.5rem"}}>↓</p>
              <p className="sd-blog-text"><strong>Actual average:</strong> 38% to conservation</p>
            </div>
            <p className="sd-blog-text mb-3" style={{fontSize: "0.95rem"}}>No reward. No nudge. Just transparency.</p>
            <p className="sd-blog-text">SD doesn't ask you to be a different kind of consumer. It asks the system to be transparent. The rest follows.</p>
          </div>
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
