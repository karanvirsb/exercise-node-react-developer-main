import React from 'react';
import Repos from '../../components/Repo';
import useGetRepos from '../../hooks/useGetRepos';

export default function Home() {
  const { repos, error, isLoading } = useGetRepos();
  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>An error occurred while fetching. Please refresh.</p>;
  }

  return (
    <div>
      <h1>Repositories</h1>
      {/* TODO add language filter */}
      <div>
        {repos.length > 0 ? (
          repos.map((repo) => <Repos repo={repo}></Repos>)
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
    </div>
  );
}
