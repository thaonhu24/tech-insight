import { API_GRAPHQL_URL } from "./api";

export const graphqlFetch = async <TValue, TResult>({
  query,
  variables,
}: {
  query: string;
  variables?: TValue;
}): Promise<TResult> => {
  const res = await fetch(API_GRAPHQL_URL ?? "localhost:8007/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      oid: localStorage.getItem("oid") || "",
      authorization: localStorage.getItem("token") || "",
      "accept-language": "vi",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
};
