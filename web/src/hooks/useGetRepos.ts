import { useEffect, useState } from 'react';
import { Repo } from '../models/Repo';
import useReposStore from '../store/repoStore';

export default function useGetRepos() {
  const setRepos = useReposStore((state) => state.setRepos);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:4000/repos', {
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

  return { error, isLoading };
}
