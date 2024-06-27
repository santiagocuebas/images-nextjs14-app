import type { IComment } from "../types/global";
import type { CommentsProp } from "../types/props";
import { format } from "timeago.js";
import Image from "next/image";
import { FaComments } from "react-icons/fa";
import { DIR } from "../config";
import styles from '../styles/RecentComments.module.css';

export default function RecentComments({ comments }: CommentsProp) {
  return (
    <div className={styles.comments}>
      <h2 className="general-header">
        <FaComments size={32} />
        Recent comments
      </h2>
      {
        comments.length > 0
          ? <div className={styles.list}>
            {
              comments.map((comment: IComment) => (
                <div className={styles.content} key={comment._id}>
                  <Image 
                    src={DIR + '/' + comment.filename}
                    alt={comment.name}
                    width={100}
                    height={100}
                    unoptimized={true}
                  />
                  <div className={styles.data}>{comment.comment}</div>
                  <div className={styles.footer}>
                    - {comment.name} &#x25CF; {format(comment.createdAt)}
                  </div>
                </div>
              ))
            }
          </div>
          : null
      }
    </div>
  )
}
