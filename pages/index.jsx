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
      <div className="grid">
        <main className="">
          <h1 className="text-yellow-300 text-center font-bold text-5xl m-2 p-2">Welcome on board</h1>
          <ul className="grid grid-cols-3 gap-5 justify-center space-x-3 px-7 py-7 mx-7 md:p-auto md:m-auto ">
            {articles?.length > 0 &&
              articles.map((article) => (
                <li key={article._id} className="bg-gray-50 rounded-lg h-60 w-60  shadow-lg">
                  <Link href={`/articles/${article.slug.current}`}>
                    <a>
                      <img  src={urlFor(article.image)} className="px-4 py-2  h-40 w-full"/>
                      <p className="text-center mt-2 text-xl font-light text-yellow-300">{article.name}</p>
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
