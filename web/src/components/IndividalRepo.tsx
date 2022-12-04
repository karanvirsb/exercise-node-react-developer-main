import React from 'react';
import { Repo } from '../models/Repo';
import { useNavigate } from 'react-router-dom';

interface IIndividualRepo {
  repo: Repo;
}

export default function IndividualRepo({ repo }: IIndividualRepo) {
  const navigate = useNavigate();
  return (
    <div onClick={() => goToRepoPage(repo.id)}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
      <p>Fork Count: {repo.forks_count}</p>
    </div>
  );

  function goToRepoPage(id: number) {
    navigate(`/repo/${id}`);
  }
}
