import Layout from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import homeStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { getPostsData } from "@/lib/post";

// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// SSR
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        <p className={utilStyles.headingMd}>プロフィール文です。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのメモ</h2>
        <div className={homeStyles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => {
            return (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <Image
                    src={thumbnail}
                    alt=""
                    width="950"
                    height="400"
                    priority
                    className={homeStyles.thumbnailImage}
                  ></Image>
                </Link>
                <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
