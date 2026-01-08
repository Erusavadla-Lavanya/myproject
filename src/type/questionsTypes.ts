export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: string;
  title: string;
  tags: string[];
  difficulty: Difficulty;
}
