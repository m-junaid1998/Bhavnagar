import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dataToQueryParameter } from "./APIHelper";
import { baseUrl } from "./config";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    get: builder.query({
      query: (arg) => {
        const endpoint = arg?.endpoint || arg;
        const params = arg?.params ? dataToQueryParameter(arg.params) : "";
        return `${endpoint}${params}`;
      },
    }),

    generic: builder.mutation({
      query: ({ endpoint, method = "POST", data, params, headers }) => ({
        url: params ? `${endpoint}${dataToQueryParameter(params)}` : endpoint,
        method,
        body: data,
        headers: headers || { "Content-Type": "application/json" },
      }),
      transformResponse: (res) => res?.data || res,
    }),

    upload: builder.mutation({
      query: ({ endpoint, data, params }) => {
        const formData = new FormData();
        if (data) {
          Object.entries(data).forEach(([key, value]) =>
            formData.append(key, value),
          );
        }
        return {
          url: params ? `${endpoint}${dataToQueryParameter(params)}` : endpoint,
          method: "POST",
          body: formData,
        };
      },
      transformResponse: (res) => res?.data || res,
    }),


  }),
});

export const {
  useGetQuery,
  useGenericMutation,
  useUploadMutation,

} = apiSlice;
