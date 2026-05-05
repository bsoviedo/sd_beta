import Link from "next/link";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";
import { getAllPostsForHome } from "lib/DATOCMS_API";

export default function BlogPage({ posts = [] }) {
  const { t } = useTranslation("common");
  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <Layout title={t("meta.blogTitle")} description={t("meta.blogDescription")}>
      <section className="sd-section" style={{ paddingTop: "6rem" }}>
        <Container className="px-4 px-lg-5">
          <Row className="align-items-center gy-4 mb-4 mb-lg-5">
            <Col lg={9}>
              <h1 className="sd-gradient-title mb-2">{t("blog.hero.title")}</h1>
              <p className="mb-2" style={{ fontSize: "1.1rem", color: "var(--sd-muted)" }}>
                {t("blog.hero.description")}
              </p>
              <p className="mb-0" style={{ fontStyle: "italic", color: "var(--sd-muted)" }}>
                {t("blog.hero.quote")}
              </p>
              <small style={{ color: "var(--sd-muted)" }}>Source: DatoCMS</small>
            </Col>
            <Col lg={3} className="text-lg-end">
              <img src="/logos/Whale%20Top%20D%20Logo.png" alt="Mandatum logo" width="88" height="88" />
            </Col>
          </Row>

          <Row className="g-4">
            {hasPosts ? posts.map((post) => (
              <Col md={6} lg={4} key={post.slug || post.title}>
                <Card className="sd-card border-0 h-100">
                  {post.coverImage?.responsiveImage?.src && (
                    <Card.Img
                      variant="top"
                      src={post.coverImage.responsiveImage.src}
                      alt={post.coverImage.responsiveImage.alt || post.title}
                      style={{ borderRadius: "12px 12px 0 0", maxHeight: "200px", objectFit: "cover" }}
                    />
                  )}
                  <Card.Body className="d-flex flex-column">
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
                      {post.date} • {post.readTime} min read
                    </Card.Subtitle>
                    <Card.Title className="h5">{post.title}</Card.Title>
                    <div className="mb-3">
                      <Badge bg="light" text="dark">{post.publicationType || "Blog"}</Badge>
                    </div>
                    <Card.Text className="flex-grow-1">{post.excerpt}</Card.Text>
                    <Link href={`/posts/${post.slug}`} className="sd-link fw-semibold mt-auto">
                      {t("blog.readMore")}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )) : (
              <Col>
                <Card className="sd-card border-0">
                  <Card.Body>
                    <Card.Title className="h5 mb-2">No posts available</Card.Title>
                    <Card.Text className="mb-0">
                      We could not load posts.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale, preview = false }) {
  let posts = [];

  try {
    posts = (await getAllPostsForHome(preview)) || [];
  } catch (error) {
    console.error("DatoCMS blog fetch failed:", error);
  }

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 3600,
  };
}
