import { useEffect, useState } from 'react';

type props = { url: string };

export default function useGetRepos({ url }: props) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchRepos() {
      const data = fetch(url, { method: 'GET' });
      console.log(data);
    }

    fetchRepos();
  }, [url]);
}
