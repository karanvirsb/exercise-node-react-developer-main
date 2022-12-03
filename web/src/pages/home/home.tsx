import React from 'react';
import Repos from '../../components/Repos';
import useGetRepos from '../../hooks/useGetRepos';

export default function Home() {
  const { error, isLoading } = useGetRepos();

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
        <Repos></Repos>
      </div>
    </div>
  );
}
