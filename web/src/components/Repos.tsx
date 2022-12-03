import React, { useState } from 'react';
import { Repo } from '../models/Repo';

type props = { repos: Repo[] };

export default function Repos({ repos }: props) {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const languages = getLanguages({ repos });
  return <></>;
}

function getLanguages({ repos }: { repos: Repo[] }): string[] {
  const languages: string[] = repos.map((repo) => repo.language);
  const langSet = new Set(languages);
  langSet.add('all');
  const langArr: string[] = [];
  langSet.forEach((value, _) => {
    langArr.push(value);
  });
  return langArr;
}
