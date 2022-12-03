import React from 'react';
import { Repo } from '../models/Repo';

type props = { repos: Repo[] };

export default function Repos({ repos }: props) {
  const languages = getLanguages({ repos });
  return <div>Repos</div>;
}

function getLanguages({ repos }: { repos: Repo[] }): Set<string> {
  const languages: string[] = repos.map((repo) => repo.language);
  const langSet = new Set(languages);
  langSet.add('all');
  return langSet;
}
