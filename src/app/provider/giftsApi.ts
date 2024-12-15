import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Gift {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const giftsApi = createApi({
  reducerPath: 'giftsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getGifts: builder.query<Gift[], void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    updateGift: builder.mutation<Gift, Partial<Gift> & Pick<Gift, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetGiftsQuery, useUpdateGiftMutation } = giftsApi;
