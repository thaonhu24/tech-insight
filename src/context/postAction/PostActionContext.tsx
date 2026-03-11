"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

// *INFO: internal modules
import { postActionReducer } from "./postActionReducer";
import {
  EPostActionType,
  PostActionContextType,
  PostActionState,
} from "./types";

function getStoredArray(key: string): number[] {
  if (typeof window === "undefined") return [];

  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : [];
}
function initState(): PostActionState {
  return {
    likedPosts: getStoredArray("likedPosts"),
    bookmarkedPosts: getStoredArray("bookmarkedPosts"),
  };
}

export const PostActionContext = createContext<
  PostActionContextType | undefined
>(undefined);

export function PostActionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(postActionReducer, undefined, initState);

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(state.likedPosts));
  }, [state.likedPosts]);

  useEffect(() => {
    localStorage.setItem(
      "bookmarkedPosts",
      JSON.stringify(state.bookmarkedPosts),
    );
  }, [state.bookmarkedPosts]);

  const toggleLike = useCallback(
    (id: number) => dispatch({ type: EPostActionType.TOGGLE_LIKE, id }),
    [],
  );

  const toggleBookmark = useCallback(
    (id: number) => dispatch({ type: EPostActionType.TOGGLE_BOOKMARK, id }),
    [],
  );

  const value = useMemo(
    () => ({ ...state, toggleLike, toggleBookmark }),
    [state, toggleLike, toggleBookmark],
  );

  return (
    <PostActionContext.Provider value={value}>
      {children}
    </PostActionContext.Provider>
  );
}
