import { GetServerSideProps } from 'next';

export default function Home({ repositories }) {
  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  ); 
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch
  ('https://api.github.com/users/XavierCabeto/repos');

  const data = await response.json();
  const repositoryNames = data.map(item => item.name);

  return {
    props: {
      repositories: repositoryNames
    }
  };
};