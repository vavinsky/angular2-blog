export class Comment {
  id?: number;
  parentCommentId?: number;
  text: string;
  username: string;
  avatarImageUrl: string;
  datePublished: Date;
  relatedEntityId: number;
  relatedEntityType: string;
  likesCount: number;
}