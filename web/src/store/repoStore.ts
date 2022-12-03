import create from 'zustand';
import { Repo } from '../models/Repo';
import filterRepos from '../util/filterRepos';

interface ReposState {
  repos: Repo[];
  filteredRepos: Repo[];
}

const useReposStore = create<ReposState>((set) => ({
  repos: [],
  filteredRepos: [],
  setRepos: (repos: Repo[]) => set(() => ({ repos: repos })),
  filterRepos: (language: string) =>
    set((state) => ({
      filteredRepos: filterRepos({ repos: state.repos, language }),
    })),
}));
