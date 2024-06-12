export interface IImage {
	id: string;
	title: string;
	description: string;
	filename: string;
	uniqueId: string;
	views: number;
	createdAt: Date;
}

export interface IComment {
	_id: string;
	imageId: Types.ObjectId;
	email: string;
	name: string;
	gravatar: string;
	filename: string;
	comment: string;
	createdAt: Date;
}

export interface IStats {
	totalImages?: number;
  totalComments?: number;
  totalViews?: number;
}

export interface IData {
	image: IImage;
	comments: IComment[];
	images: IImage[];
	stats: IStats;
	viewedImages: IImage[];
	recentComments: IComment[];
}

export interface IIndex {
	recentImages: IImage[];
	stats: IStats;
	viewedImages: IImage[];
	recentComments: IComment[];
}

export interface Errors {
	[index: string]: string;
}

export interface ICommentsStore {
	comments: IComment[];
	setComments: (value: IComment[]) => void;
	addComment: (value: IComment) => void;
}
