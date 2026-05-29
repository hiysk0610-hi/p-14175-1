export type PostWithContentDto = {
  id: number;
  title: string;
  content: string
};

export type PostDto = Omit<PostWithContentDto, "content">;