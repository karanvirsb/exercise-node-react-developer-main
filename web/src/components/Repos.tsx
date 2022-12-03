import React from 'react';
import { Repo } from '../models/Repo';

type props = { repo: Repo };

export default function Repos({ repo }: props) {
  return (
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>{repo.language}</p>
      <p>{repo.forks_count}</p>
    </div>
  );
}
