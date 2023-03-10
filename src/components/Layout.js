import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "@/styles/utils.module.css";

const name = "foolish-pine";
export const siteTitle = "Next.js Blog";

function Layout({ home, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/profile.png"
              alt=""
              width="72"
              height="72"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src="/images/profile.png"
              alt=""
              width="72"
              height="72"
              className={utilStyles.borderCircle}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
