import cuid from 'cuid';
import firebase from 'firebase';
import { firestore } from '../utils/firebase';

type Post = {
  username: string;
  profilePic: string;
  timestamp: Date;
  imgUrl?: string;
  text?: string;
};

export const CreatePost = async ({ profilePic, username, imgUrl, text }: Post): Promise<void> => {
  const id = cuid();

  await firestore.collection('posts').doc(id).set({
    profilePic: profilePic,
    username: username,
    timestamp: new Date(),
    image: imgUrl,
    text: text?.trim()
  });
};
