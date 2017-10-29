import { Comment } from './comment';
export const MockedComments: Comment[] = [
  {
    id: 1,
    parentCommentId: null,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    username: 'admin',
    avatarImageUrl: 'https://lh3.googleusercontent.com/-TrK1csbtHRs/WM1ZI1SIUNI/AAAAAAAADeo/OkiUjuad6skWl9ugxbiIA_436OwsWKBNgCJoC/w424-h318-n-rw/thumbnail3.jpg',
    datePublished: new Date('2011-04-11T10:20:01Z'),
    relatedEntityId: 10,
    relatedEntityType: 'post',
    likesCount: 0
  },
  {
    id: 2,
    parentCommentId: 1,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    username: 'Mark Siman',
    avatarImageUrl: '',
    datePublished: new Date('2011-04-11T10:20:20Z'),
    relatedEntityId: 10,
    relatedEntityType: 'post',
    likesCount: 10
  },
  {
    id: 3,
    parentCommentId: 1,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    username: 'admin',
    avatarImageUrl: 'https://lh3.googleusercontent.com/-TrK1csbtHRs/WM1ZI1SIUNI/AAAAAAAADeo/OkiUjuad6skWl9ugxbiIA_436OwsWKBNgCJoC/w424-h318-n-rw/thumbnail3.jpg',
    datePublished: new Date('2011-04-11T10:20:30Z'),
    relatedEntityId: 10,
    relatedEntityType: 'post',
    likesCount: 0
  },
  {
    id: 4,
    parentCommentId: 3,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    username: 'booker',
    avatarImageUrl: '',
    datePublished: new Date('2011-04-11T10:20:35Z'),
    relatedEntityId: 10,
    relatedEntityType: 'post',
    likesCount: 20
  },
  {
    id: 5,
    parentCommentId: null,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    username: 'booker',
    avatarImageUrl: '',
    datePublished: new Date('2011-04-11T10:20:35Z'),
    relatedEntityId: 16,
    relatedEntityType: 'post',
    likesCount: 20
  }
]