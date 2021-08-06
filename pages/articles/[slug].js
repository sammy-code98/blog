import { useRouter } from 'next/router';
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


export default function onePost({ data , preview }) {

    // page loader as fallback is set to true

    const router = useRouter()

    if(router.isFallback){
        return <div>Loading.....</div>
    }
    // end of page loader
    const {data: articles} = usePreviewSubscription(articleQuery, {
        params:{slug:data.articles?.slug.current},
        initialData: data,
        enabled:preview 
    })
//   const { articles } = data;
  return (
    <article>
      <h1>{articles.name}</h1>
      <main>
        <img src={urlFor(articles?.image).url()} />
        <p>Author : {articles?.author}</p>
        <p>Published On : {articles.date}</p>
        <div>
          <PortableText blocks={articles?.body} />
        </div>
      </main>
    </article>
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
  return { props: { data: { articles }, preview:true } };
  
}

