import { useEffect, useState } from 'react';

type props = { url: string };

export default function useGetRepos({ url }: props) {
  const [repos, setRepos] = useState([]);
  const [errMsg, setErrMsg] = useState<string>('');
  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = await fetch(url, { method: 'GET' });
        if (data) setRepos(await data.json());
        setRepos([]);
      } catch (error) {}
    }

    fetchRepos();
  }, [url]);

  return { repos, errMsg };
}
