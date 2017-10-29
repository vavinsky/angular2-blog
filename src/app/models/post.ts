export class Post {
    id: number;
    title: string;
    excerpt: string;
    imageUrl?: string;
    content: string;
    userName: string;
    dateUpdated: Date;
    datePublished?: Date;
    tags: string[];
    isPublished: boolean;
    commentsCount: number;
}