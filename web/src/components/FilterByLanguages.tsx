import React from 'react';

type props = {
  languages: string[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterByLanguages({
  setSelectedLanguage,
  languages,
}: props) {
  return (
    <div>
      {languages.map((lang) => {
        return <button onClick={() => handleClick(lang)}>{lang}</button>;
      })}
    </div>
  );

  function handleClick(language: string) {
    setSelectedLanguage(language);
  }
}
