import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StoryReel from '../StoryReel';
import CreatePost from '../CreatePost';
import Post from '../Post';
import { firestore, DocumentData } from '../../utils/firebase';

import './Feed.scss';

interface FeedProps {
  photoUrl?: string;
  username: string | null;
}

function Feed({ photoUrl, username }: FeedProps): React.ReactElement {
  const [posts, setPosts] = useState<DocumentData>([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      });
  }, []);

  return (
    <div className='feed'>
      <StoryReel photoUrl={photoUrl} />
      <CreatePost photoUrl={photoUrl} username={username} />
      {posts.map((post: DocumentData) => (
        <Post
          key={post.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          text={post.data.text}
          image={post.data.image}
          timestamp={post.data.timestamp.toDate().toDateString()}
        />
      ))}
    </div>
  );
}

export default Feed;
