import { create } from 'zustand';
import { ICommentsStore } from './types/global';

export const commentsStore = create<ICommentsStore>((set) => ({
  comments: [],
  setComments: comments => set(() => ({ comments })),
  addComment: comment => set(state => ({ comments: [comment, ...state.comments] }))
}));
