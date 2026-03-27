export type PostActionState = {
  likedPosts: number[];
  bookmarkedPosts: number[];
};

export type ActionPayload = PostActionState & {
  id?: number;
};

export type PostActionAction =
  | { type: EPostActionType.TOGGLE_LIKE; payload: number }
  | { type: EPostActionType.TOGGLE_BOOKMARK; payload: number }
  | {
      type: EPostActionType.INIT_FROM_STORAGE;
      payload: ActionPayload;
    };

export type PostActionContextType = PostActionState & {
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
};

export enum EPostActionType {
  TOGGLE_LIKE = "TOGGLE_LIKE",
  TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK",
  INIT_FROM_STORAGE = "INIT_FROM_STORAGE",
}
