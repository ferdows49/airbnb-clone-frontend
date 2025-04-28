import { apiSlice } from "@/features/apiSlice";

export const createPropertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProperty: builder.mutation({
      query: (data) => ({
        url: "/properties",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePropertyMutation } = createPropertyApiSlice;
