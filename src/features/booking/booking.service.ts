import { graphqlFetch } from "@/lib/graphqlFetch";
import { GET_BOOKINGS } from "./booking.query";
import { IBooking } from "./types";

export const getBookings = async (
  filters: any,
): Promise<IBooking[] | undefined> => {
  try {
    const response = await graphqlFetch<any, { list: IBooking[] }>({
      query: GET_BOOKINGS,
      variables: { filter: filters },
    });

    return response.list;
  } catch (error) {
    return undefined;
  }
};
