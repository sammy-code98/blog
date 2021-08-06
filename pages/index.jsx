import DefualtLayout, { siteName } from "./components/Layout";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
// GROOG query here
const articlesQuery = `*[_type == "posts"]{
  _id,
  name,
  slug,
  image,
  authors,
  date,
}
`;
export default function Home({ articles }) {
  return (
    <>
      <div className="flex flex-col py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1>Welcome on board</h1>
          <ul>
            {articles?.length > 0 &&
              articles.map((article) => (
                <li key={article._id}>
                  <Link href={`/articles/${article.slug.current}`}>
                    <a>
                      <img  src={urlFor(article.image)}/>
                      <span>{article.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </main>
      </div>
      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </>
  );
}

export async function getStaticProps() {
  const articles = await sanityClient.fetch(articlesQuery);
  return { props: { articles } };
}
Home.Layout = DefualtLayout;
