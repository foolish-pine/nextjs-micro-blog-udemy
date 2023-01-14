import Layout from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import homeStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyles.headingMd}>プロフィール文です。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのメモ</h2>
        <div className={homeStyles.grid}>
          <article>
            <Link href="#">
              <Image
                src="/images/thumbnail01.jpg"
                alt=""
                width="950"
                height="400"
                className={homeStyles.thumbnailImage}
              ></Image>
            </Link>
            <Link href="#" className={utilStyles.boldText}>
              投稿タイトル1
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023.01.14</small>
          </article>
          <article>
            <Link href="#">
              <Image
                src="/images/thumbnail02.jpg"
                alt=""
                width="950"
                height="400"
                className={homeStyles.thumbnailImage}
              ></Image>
            </Link>
            <Link href="#" className={utilStyles.boldText}>
              投稿タイトル1
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023.01.14</small>
          </article>
          <article>
            <Link href="#">
              <Image
                src="/images/thumbnail03.jpg"
                alt=""
                width="950"
                height="400"
                className={homeStyles.thumbnailImage}
              ></Image>
            </Link>
            <Link href="#" className={utilStyles.boldText}>
              投稿タイトル1
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023.01.14</small>
          </article>
          <article>
            <Link href="#">
              <Image
                src="/images/thumbnail04.jpg"
                alt=""
                width="950"
                height="400"
                className={homeStyles.thumbnailImage}
              ></Image>
            </Link>
            <Link href="#" className={utilStyles.boldText}>
              投稿タイトル1
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023.01.14</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
