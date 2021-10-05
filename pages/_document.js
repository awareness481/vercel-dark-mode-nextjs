import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `!(function () {
                try {
                  var d = document.documentElement.classList;
                  d.remove("light-theme", "dark-theme");
                  var e = localStorage.getItem("zeit-theme");
                  d.add("light-theme");
                  if ("system" === e || (!e && false)) {
                    var t = "(prefers-color-scheme: dark)",
                      m = window.matchMedia(t);
                    m.media !== t || m.matches
                      ? d.add("dark-theme")
                      : d.add("light-theme");
                  } else if (e)
                    var x = { light: "light-theme", dark: "dark-theme" };
                  d.add(x[e]);
                } catch (e) {}
              })();`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
