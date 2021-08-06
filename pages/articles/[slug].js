import Link from "next/link";
import { useRouter } from "next/router";
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";

const articleQuery = `*[_type == "posts"  &&  slug.current == $slug][0]{
    _id,
    name,
    slug,
    image,
    authors->{
        _ref,
        _type
    },
    date,
    body
}`;

export default function onePost({ data, preview }) {
  // page loader as fallback is set to true

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.....</div>;
  }
  // end of page loader
  const { data: articles } = usePreviewSubscription(articleQuery, {
    params: { slug: data.articles?.slug.current },
    initialData: data,
    enabled: preview,
  });
  //   const { articles } = data;
  return (
    <>
      <Link href="/">
        <button className="bg-gray text-yellow-300 px-3 border-2 rounded-md m-4">
          Back
        </button>
      </Link>
      <article>
        <h1 className="text-2xl text-yellow-300 font-bold text-center">{articles.name}</h1>
        <main>
          <img src={urlFor(articles?.image).url()}  className="rounded-md shadow-6 w-9/12 p-3 item-center m-auto"/>
          <p className="mx-12 font-medium my-2 text-xl">Author : {articles?.author}</p>
          <p className="mx-12 font-medium my-2 text-xl">Published On : {articles.date}</p>
          <div className="m-auto leading-relaxed text-center px-5 tracking-normal">
            <PortableText blocks={articles?.body}  />
          </div>
        </main>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "posts" && defined(slug.current)]{
        "params":{
            "slug" : slug.current
        }
    }`
  );
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const articles = await sanityClient.fetch(articleQuery, { slug });
  return { props: { data: { articles }, preview: true } };
}
