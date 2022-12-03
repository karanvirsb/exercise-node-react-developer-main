import { useEffect, useState } from 'react';
import { Repo } from '../models/Repo';
import useReposStore from '../store/repoStore';

type props = {
  repoName: string | undefined;
};

export default function useGetReadMe({ repoName }: props) {
  const [readMe, setReadMe] = useState('');
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (repoName) {
      fetch(`https://raw.githubusercontent.com/${repoName}/master/README.md`, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw response;
        })
        .then((data: string) => {
          setReadMe(data);
        })
        .catch((err) => {
          console.error('Error while fetching for data: ', err);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [repoName]);

  return { readMe, error, isLoading };
}
