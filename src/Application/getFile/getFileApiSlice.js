import { apiSlice } from "../api/apislice";

export const getFileApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFile: builder.mutation({
            query: (url) => ({
                url,
                method: "GET"
            })
        })
    })
});

export const { useGetFileMutation } = getFileApiSlice;