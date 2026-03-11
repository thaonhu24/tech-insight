import { EPostActionType, PostActionAction, PostActionState } from "./types";

function toggle(list: number[], id: number): number[] {
  return list.includes(id) ? list.filter((p) => p !== id) : [...list, id];
}

export function postActionReducer(
  state: PostActionState,
  action: PostActionAction,
): PostActionState {
  switch (action.type) {
    case EPostActionType.TOGGLE_LIKE:
      return { ...state, likedPosts: toggle(state.likedPosts, action.id) };
    case EPostActionType.TOGGLE_BOOKMARK:
      return {
        ...state,
        bookmarkedPosts: toggle(state.bookmarkedPosts, action.id),
      };
  }
}
