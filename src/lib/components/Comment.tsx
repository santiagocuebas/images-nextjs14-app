import type { CommentProp } from "@/lib/types/props";
import Image from 'next/image';
import { format } from 'timeago.js';
import styles from '../styles/Comment.module.css';

export default function Comment({ comment }: CommentProp) {
  return (
    <div className={styles.comment}>
      <Image
        src={`https://gravatar.com/avatar/${comment.gravatar}?d=monsterid&s=45`}
        alt={comment.name}
        width={100}
        height={100}
        unoptimized={true}
      />
      <div>{comment.name} &#x25CF; {comment.email}</div>
      <div>{comment.comment}</div>
      <div className={styles.createdAt}>{format(comment.createdAt)}</div>
    </div>
  )
}
