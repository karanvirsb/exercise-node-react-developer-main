import React, { useEffect, useState } from 'react';
import { Repo } from '../models/Repo';
import useReposStore from '../store/repoStore';
import filterRepos from '../util/filterRepos';
import FilterByLanguages from './FilterByLanguages';
import IndividualRepo from './IndividalRepo';

// type props = { repos: Repo[] };

export default function Repos() {
  const repos = useReposStore((state) => state.repos);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  // TODO useCallback or useMemo
  const [filteredRepos, setFilteredRepos] = useState(
    filterRepos({ repos, language: selectedLanguage })
  );
  const languages = getLanguages({ repos });

  useEffect(() => {
    setFilteredRepos(filterRepos({ repos, language: selectedLanguage }));
  }, [selectedLanguage]);

  return (
    <>
      <FilterByLanguages
        languages={languages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      ></FilterByLanguages>

      {filteredRepos.length > 0 ? (
        filteredRepos.map((repo) => (
          <IndividualRepo key={repo.id} repo={repo}></IndividualRepo>
        ))
      ) : (
        <p>No repositories found.</p>
      )}
    </>
  );
}

function getLanguages({ repos }: { repos: Repo[] }): string[] {
  const languages: string[] = repos.map((repo) => repo.language); // mapping and getting languages
  const langSet = new Set(languages); // creating set to only get one language of each rather than duplicates
  langSet.add('all');
  const langArr: string[] = [];
  // adding each language to an arr
  langSet.forEach((value, _) => {
    langArr.push(value);
  });
  return langArr;
}
