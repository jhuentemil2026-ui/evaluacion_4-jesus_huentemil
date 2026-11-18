export const GITHUB_USER = 'jhuentemil2026-ui';

export function getReposUrl(user: string = GITHUB_USER): string {
  return `https://api.github.com/users/${user}/repos?sort=updated&per_page=6`;
}