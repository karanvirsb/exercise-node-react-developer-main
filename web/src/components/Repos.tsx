import React, { useState } from 'react';
import { Repo } from '../models/Repo';
import FilterByLanguages from './FilterByLanguages';
import IndividualRepo from './IndividalRepo';

type props = { repos: Repo[] };

export default function Repos({ repos }: props) {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const languages = getLanguages({ repos });
  return (
    <>
      <FilterByLanguages
        languages={languages}
        setSelectedLanguage={setSelectedLanguage}
      ></FilterByLanguages>

      {repos.length > 0 ? (
        repos.map((repo) => <IndividualRepo repo={repo}></IndividualRepo>)
      ) : (
        <p>No repositories found.</p>
      )}
    </>
  );
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
