import React, { useState } from 'react';
import { Repo } from '../models/Repo';
import filterRepos from '../util/filterRepos';
import FilterByLanguages from './FilterByLanguages';
import IndividualRepo from './IndividalRepo';

type props = { repos: Repo[] };

export default function Repos({ repos }: props) {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  // TODO useCallback or useMemo
  const [filteredRepos, setFilteredRepos] = useState(
    filterRepos({ repos, language: selectedLanguage })
  );
  const languages = getLanguages({ repos });
  return (
    <>
      <FilterByLanguages
        languages={languages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      ></FilterByLanguages>

      {filteredRepos.length > 0 ? (
        filteredRepos.map((repo) => (
          <IndividualRepo repo={repo}></IndividualRepo>
        ))
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
