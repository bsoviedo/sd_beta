import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import { Badge, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "components/Layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/DATOCMS_API";

export default function PostPage({ post, morePosts = [] }) {
  const router = useRouter();
  const { t } = useTranslation("common");

  if (router.isFallback) {
    return (
      <Layout title="Loading…">
        <Container className="py-5 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading…</span>
          </Spinner>
        </Container>
      </Layout>
    );
  }

  if (!post) return <ErrorPage statusCode={404} />;

  return (
    <Layout title={post.title} description={post.excerpt}>
      <section className="sd-section" style={{ paddingTop: "6rem" }}>
        <Container className="px-4 px-lg-5">
          <Row>
            {/* Main article */}
            <Col lg={8}>
              {post.coverImage?.responsiveImage?.src && (
                <img
                  src={post.coverImage.responsiveImage.src}
                  alt={post.coverImage.responsiveImage.alt || post.title}
                  style={{ maxWidth: "100%", borderRadius: "12px", marginBottom: "1rem" }}
                />
              )}
              {post.coverImageDetails && (
                <p style={{ textAlign: "center", fontSize: "11px", color: "var(--sd-muted)" }}>
                  {post.coverImageDetails}
                </p>
              )}

              <h1 className="sd-gradient-title mb-2">{post.title}</h1>
              <p className="mb-4 text-muted">
                {post.date}&nbsp;&middot;&nbsp;{post.readTime} min read&nbsp;&middot;&nbsp;
                <Badge bg="light" text="dark">{post.publicationType}</Badge>
              </p>

              <div
                className="blog-post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-5">
                <Link href="/blog" className="sd-link fw-semibold">
                  ← {t("blog.backToBlog", "Back to blog")}
                </Link>
              </div>
            </Col>

            {/* Sidebar: recent posts */}
            {morePosts.length > 0 && (
              <Col lg={4} className="mt-5 mt-lg-0">
                <div style={{ borderLeft: "1px solid #ddd", paddingLeft: "1.5rem" }}>
                  <h5 style={{ color: "var(--sd-muted)", marginBottom: "1.25rem" }}>Recent Posts</h5>
                  {morePosts.map((related) => (
                    <Card
                      key={related.slug}
                      className="sd-card border-0 mb-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push(`/posts/${related.slug}`)}
                    >
                      {related.coverImage?.responsiveImage?.src && (
                        <Card.Img
                          variant="top"
                          src={related.coverImage.responsiveImage.src}
                          alt={related.title}
                          style={{ borderRadius: "10px 10px 0 0", maxHeight: "120px", objectFit: "cover" }}
                        />
                      )}
                      <Card.Body className="py-2 px-3">
                        <Card.Title style={{ fontSize: "14px", color: "var(--sd-primary)", fontWeight: "bold" }}>
                          {related.title}
                        </Card.Title>
                        <Card.Subtitle className="text-muted" style={{ fontSize: "11px" }}>
                          {related.date}&nbsp;&middot;&nbsp;{related.readTime} min read&nbsp;&middot;&nbsp;
                          <Badge bg="light" text="dark">{related.publicationType}</Badge>
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  ))}
                  <div className="text-end mt-3">
                    <Link href="/blog" className="sd-link fw-semibold">
                      ← Back to blog
                    </Link>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, locale }) {
  let post = null;
  let morePosts = [];

  try {
    const data = await getPostAndMorePosts(params.slug, preview);
    const content = data?.post?.content || "";
    const allMore = data?.morePosts ?? [];
    morePosts = allMore
      .filter((e) => e.slug !== params.slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    post = data?.post ? { ...data.post, content } : null;
  } catch (error) {
    console.error("DatoCMS post fetch failed:", error);
  }

  return {
    props: {
      post,
      morePosts,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  let allPosts = [];

  try {
    allPosts = (await getAllPostsWithSlug()) || [];
  } catch (error) {
    console.error("DatoCMS getStaticPaths failed:", error);
  }

  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}
