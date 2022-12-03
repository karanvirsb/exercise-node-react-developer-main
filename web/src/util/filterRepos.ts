import React from 'react';
import { Repo } from '../models/Repo';

type props = { repos: Repo[]; language: string };

export default function filterRepos({ repos, language }: props) {
  return repos.filter((repo) => repo.language !== language);
}
