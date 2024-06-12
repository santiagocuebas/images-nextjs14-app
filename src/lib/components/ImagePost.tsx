'use client';

import type { ImagePostProp } from "../types/props";
import { type ChangeEvent, useState } from "react";
import { FaComment, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { ErrorBox } from './index';
import { handleForm } from "../services";
import { commentsStore } from "../store";
import styles from '../styles/ImagePost.module.css';
import { Method } from "../types/enums";

export default function ImagePost({ image }: ImagePostProp) {
	const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState(null);
	const addComment = commentsStore(state => state.addComment);
  
	async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
		setVisible(false);

    const data = await handleForm(e.target);

    setErrors(data.errors ?? null);
		
		if (data.comment) addComment(data.comment);
	}

	return (
		<div className={styles.post}>
			<h2>
				<FaComment size={32} /> 
				Comment
				<button className={styles.button} onClick={() => setVisible(!visible)}>
					{
						visible
						? <FaAngleUp size={20}className={styles.icon} />
						: <FaAngleDown size={20}className={styles.icon} />
					}
				</button>
			</h2>
			{
				visible
				? <form
						className={styles.form}
						action={`/${image.uniqueId}/comment`}
						method={Method.POST}
						onSubmit={handleSubmit}
					>
						{errors ? <ErrorBox hide={setErrors} errors={errors} /> : null}
						<input type="text" name="name" placeholder="Name" />
						<input type="email" name="email" placeholder="Email" />
						<textarea name="comment" rows={2} placeholder="Comment"></textarea>
						<button className={styles.formButton}>
							<FaComment />
							Post
						</button>
					</form>
				: null
			}
		</div>
	);
}
