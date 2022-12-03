import { useEffect, useState } from 'react';
import { Repo } from '../models/Repo';

export default function useGetRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http:localhost:4000/repos', {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data: Repo[]) => {
        setRepos(data);
      })
      .catch((err) => {
        console.error('Error while fetching for data: ', err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { repos, error, isLoading };
}
