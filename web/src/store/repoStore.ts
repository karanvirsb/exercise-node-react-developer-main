import create from 'zustand';
import { Repo } from '../models/Repo';
import filterRepos from '../util/filterRepos';

interface ReposState {
  repos: Repo[];
  setRepos: (repos: Repo[]) => void;
}

const useReposStore = create<ReposState>((set) => ({
  repos: [],
  setRepos: (repos: Repo[]) => set(() => ({ repos: repos })),
}));

export default useReposStore;
