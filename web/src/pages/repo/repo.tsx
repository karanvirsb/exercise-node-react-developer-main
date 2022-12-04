import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useGetCommits from '../../hooks/useGetCommits';
import useGetReadMe from '../../hooks/useGetReadMe';
import useReposStore from '../../store/repoStore';

export default function Repo() {
  // TODO fetch repo
  const { repoId } = useParams();
  const repos = useReposStore((state) => state.repos);
  const repo = getRepo({ id: parseInt(repoId ?? '0') });
  const { readMe, error, isLoading } = useGetReadMe({
    repoName: repo?.full_name,
  });
  const {
    commits,
    error: commitError,
    isLoading: areCommitsLoading,
  } = useGetCommits({ repoName: repo?.full_name });

  if (areCommitsLoading) return <p>...Loading</p>;
  if (commitError)
    return <p>An error has occurred while fetching for commits.</p>;

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p>Commit Date: {commits[0].commit.author.date ?? 'Not available'}</p>
      <p>Author: {commits[0].commit.author.name ?? 'Not available'}</p>
      <p>Message: {commits[0].commit.message ?? 'Not available'}</p>
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
