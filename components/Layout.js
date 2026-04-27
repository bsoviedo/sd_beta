import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

function Layout({ children, title, description }) {
  return (
    <div className="sd-page">
      <Head>
        <title>{title || "Sustainable Discounts"}</title>
        <meta
          name="description"
          content={
            description ||
            "Sustainable Discounts redirects commerce inefficiencies into recurring funding for biodiversity."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
