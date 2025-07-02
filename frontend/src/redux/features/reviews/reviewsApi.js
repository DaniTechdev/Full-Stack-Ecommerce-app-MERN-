import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseURL";
import { result } from "lodash";

export const reviewApi = createApi({
  reducerPath: "reviewAapi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl}/api/reviews`,
    credentials: "include",
  }),

  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (reviewData) => ({
        url: "/post-review",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Reviews", id: postId },
      ],
    }),

    getReviewsCount: builder.query({
      query: () => ({
        url: "/total-reviews",
      }),
    }),

    getReviewsByUserId: build.query({
      query: `/${userId}`,
    }),
    providesTags: (results) =>
      result ? [{ type: "Reviews", id: result[0]?.email }] : [],
  }),
});

export const {
  usePostReviewMutation,
  useGetReviewsCountQuery,
  useGetReviewsByUserIdQuery,
} = reviewApi;

export default reviewApi;
