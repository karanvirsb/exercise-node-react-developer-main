import React from 'react';

interface IFilter {
  languages: string[];
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterByLanguages({
  setSelectedLanguage,
  selectedLanguage,
  languages,
}: IFilter) {
  return (
    <div>
      {languages.map((lang) => {
        if (lang === selectedLanguage) {
          return (
            <button key={lang} className="active_filter">
              {lang}
            </button>
          );
        } else {
          return (
            <button key={lang} onClick={() => handleClick(lang)}>
              {lang}
            </button>
          );
        }
      })}
    </div>
  );

  function handleClick(language: string) {
    setSelectedLanguage(language);
  }
}
