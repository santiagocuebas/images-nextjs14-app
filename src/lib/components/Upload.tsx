'use client';

import { type ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FaImage, FaUpload } from 'react-icons/fa';
import { ErrorBox } from './index';
import { handleForm, handleImage } from "../services";
import styles from '../styles/Upload.module.css';
import { Method } from "../types/enums";

export default function Upload() {
	const router = useRouter();
	const [disabled, setDisabled] = useState(false);
	const [errors, setErrors] = useState(null);
	const [src, setSrc] = useState('objetive.png');

	async function loadImage(e: ChangeEvent<HTMLInputElement>) {
		const newSrc = await handleImage(e.target.files);
		if (newSrc) setSrc(newSrc);
	};

	async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		setDisabled(true);

		const data = await handleForm(e.target);

		if (data.url) router.push('/gallery/' + data.url);
		else setErrors(data.errors);

		setDisabled(false);
	};
	
	return (
		<div className={styles.upload}>
			<h2 className="general-header">
				<FaImage size={32} />
				Upload Image
			</h2>
			<form
				action="/upload"
				method={Method.POST}
				encType="multipart/form-data"
				onSubmit={handleSubmit}
			>
				{errors ? <ErrorBox hide={setErrors} errors={errors} /> : null}
				<label>
					<img src={src} alt="" />
					<input type="file" name="image" onChange={loadImage} />
				</label>
				<input type="text" name="title" placeholder="Title" />
				<textarea name="description" rows={2} placeholder="Description"></textarea>
				<button className={styles.button} disabled={disabled}>
					<FaUpload />
					Upload
				</button>
			</form>
		</div>
	);
}
