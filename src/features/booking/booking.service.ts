import { graphqlFetch } from "@/lib/graphqlFetch";
import { GET_BOOKINGS } from "./booking.query";

export const getBookings = async (filters: any): Promise<any[]> => {
  const data = await graphqlFetch<any, { bookings: any[] }>({
    query: GET_BOOKINGS,
    variables: { filter: filters },
  });

  return data.bookings;
};
