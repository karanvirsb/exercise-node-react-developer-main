import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useReposStore from '../../store/repoStore';

export default function repo() {
  const { repoId } = useParams();
  const repos = useReposStore((state) => state.repos);
  const repo = getRepo({ id: parseInt(repoId ?? '0') });
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p></p>
    </div>
  );

  function getRepo({ id }: { id: number }) {
    return repos.find((repo) => repo.id === id);
  }
}
