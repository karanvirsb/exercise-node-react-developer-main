import { useEffect, useState } from 'react';
import { Commit } from '../models/Commit';

type props = {
  repoName: string | undefined;
};

export default function useGetCommits({ repoName }: props) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (repoName) {
      //api.github.com/repos/silverorange/Castanet/commits
      https: fetch(`https://api.github.com/repos/${repoName}/commits`, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data: Commit[]) => {
          setCommits(data);
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

  return { commits, error, isLoading };
}
