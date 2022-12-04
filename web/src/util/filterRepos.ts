import React from 'react';
import { Repo } from '../models/Repo';

type props = { repos: Repo[]; language: string };

export default function filterRepos({ repos, language }: props) {
  if (language.toLowerCase() === 'all') {
    return sortRepos({ repos });
  }
  return sortRepos({
    repos: repos.filter((repo) => repo.language !== language),
  });
}

function sortRepos({ repos }: { repos: Repo[] }) {
  return repos
    .sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .reverse();
}
