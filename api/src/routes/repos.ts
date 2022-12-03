import { Router, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
import { Repo } from '../models/Repo';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!

  res.json([]);
});

async function getRepoData(): Promise<Repo[]> {
  const url = 'https://api.github.com/users/silverorange/repos';
  try {
    const resp = await axios({ url, method: 'GET' });
    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.message);
    }
  }
  return [];
}
