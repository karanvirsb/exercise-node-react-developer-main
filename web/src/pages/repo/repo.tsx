import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useGetReadMe from '../../hooks/useGetReadMe';
import useReposStore from '../../store/repoStore';

export default function Repo() {
  const { repoId } = useParams();
  const repos = useReposStore((state) => state.repos);
  const repo = getRepo({ id: parseInt(repoId ?? '0') });
  const { readMe, error, isLoading } = useGetReadMe({
    repoName: repo?.full_name,
  });
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p>Commit Date: {repo?.updated_at ?? 'Not available'}</p>
      <p>Author: {repo?.owner.login ?? 'Not available'}</p>
      <p>Message: {repo?.commits_url ?? 'Not available'}</p>
      <div>
        <h1>Read Me</h1>
        <p>
          {isLoading
            ? '...loading'
            : error
            ? 'Could fetch read me.'
            : readMe ?? 'Not available'}
        </p>
      </div>
    </div>
  );

  function getRepo({ id }: { id: number }) {
    return repos.find((repo) => repo.id === id);
  }
}
