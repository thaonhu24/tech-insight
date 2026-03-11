export type PostActionState = {
  likedPosts: number[];
  bookmarkedPosts: number[];
};

export type PostActionAction =
  | { type: EPostActionType.TOGGLE_LIKE; id: number }
  | { type: EPostActionType.TOGGLE_BOOKMARK; id: number };

export type PostActionContextType = PostActionState & {
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
};

export enum EPostActionType {
  TOGGLE_LIKE = "TOGGLE_LIKE",
  TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK",
}
