import React from 'react';
import { Repo } from '../models/Repo';
import { useNavigate } from 'react-router-dom';

type props = { repo: Repo };

export default function IndividualRepo({ repo }: props) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
      <p>Fork Count: {repo.forks_count}</p>
    </div>
  );

  function goToRepoPage(id: string) {
    navigate(`/repo/${id}`);
  }
}
