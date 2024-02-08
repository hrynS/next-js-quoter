export interface IAuthor {
  id: number;
  name: string;
  description: string;
}

export interface IQuote {
  id: number;
  authorId: number;
  author: string;
  content: string;
  source: string;
}

export interface IParamsWithId {
  id: string;
}
