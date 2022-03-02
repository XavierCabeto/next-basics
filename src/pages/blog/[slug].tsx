import { GetStaticProps, GetStaticPaths } from 'next';

export default function BlogPost({ data }) {
  return <h1>{data}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: new Date().toISOString(),
    },
    revalidate: 5
  };
};