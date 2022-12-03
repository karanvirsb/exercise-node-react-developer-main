import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useReposStore from '../../store/repoStore';

export default function Repo() {
  const { repoId } = useParams();
  const repos = useReposStore((state) => state.repos);
  const repo = getRepo({ id: parseInt(repoId ?? '0') });
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p>Commit Date: {repo?.updated_at}</p>
      <p>Author: {repo?.owner}</p>
      <p>Message: {repo?.commits_url}</p>
      // TODO fetch read me
    </div>
  );

  function getRepo({ id }: { id: number }) {
    return repos.find((repo) => repo.id === id);
  }
}
