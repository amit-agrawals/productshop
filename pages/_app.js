import "tailwindcss/tailwind.css";
import Head from "next/head";
import Layout from "../Components/Layout";
import Context from "../Components/Context"
function MyApp({ Component, pageProps }) {
    return (
        <>
        <Context>

            <Head>
                <title>Flatsome</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                    />
                {/* <link
                            href="https://fonts.googleapis.com/css2?family=Lato"
                            rel="stylesheet"
                        /> */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/lato-font/3.0.0/css/lato-font.min.css"
                    integrity="sha512-rSWTr6dChYCbhpHaT1hg2tf4re2jUxBWTuZbujxKg96+T87KQJriMzBzW5aqcb8jmzBhhNSx4XYGA6/Y+ok1vQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <style global jsx>{`
                body {
                    font-family: "Lato", sans-serif;
                    width: 100%;
                }
                `}</style>
            </Context>
        </>
    );
}

export default MyApp;
