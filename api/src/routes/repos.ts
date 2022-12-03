import { Router, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
import { Repo } from '../models/Repo';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const repos = await getRepoData();
  let onlyFalseForks: Repo[] = [];
  if (Array.isArray(repos)) onlyFalseForks = getReposWithFalseForks(repos);
  res.json(onlyFalseForks);
});

async function getRepoData(): Promise<Repo[]> {
  const url = 'https://api.github.com/users/silverorange/repos';
  try {
    const resp = await axios({ url, method: 'GET' });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.message);
    }
  }
  return [];
}

function getReposWithFalseForks(repos: Repo[]) {
  return repos.filter((repo) => repo.fork !== true);
}
