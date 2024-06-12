import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { IComment, IImage, IStats } from "./global";

export interface GenericProp {
	[index: string]: string;
}

export interface ChildProp {
	children: ReactNode;
}

export interface ImagesProp {
	images: IImage[];
}

export interface CommentProp {
	comment: IComment;
}

export interface CommentsProp {
	comments: IComment[];
}

export interface AlertProp {
	id: string;
	alert: Dispatch<SetStateAction<boolean>>;
}

export interface ImagePostProp {
	image: IImage;
}

export interface ErrorProp {
	hide: Dispatch<SetStateAction<null>>;
	errors: never;
}

export interface ImageCommentsProp {
	comments: IComment[];
}

export interface ContentProp {
	image: IImage;
}

export interface StatsProp {
	stats: IStats;
}
