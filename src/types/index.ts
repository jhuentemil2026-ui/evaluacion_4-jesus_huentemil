export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export type ProjectCategory = 'Backend' | 'Juegos' | 'Web';

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}