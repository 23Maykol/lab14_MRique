import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="google-site-verification"
                    content="2dApVjZLNG7GlPIbBgiN_NBVTyfUPyexus6JDqq41t8"
                />
            </Head>

            <main className={inter.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;