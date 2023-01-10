import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addData, getCategoriesAndDocuments } from "../../utils/firebaseUtils";

export const serviceCategoriesApi = createApi({
  reducerPath: "service/categories",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchServiceCategories: builder.query({
      async queryFn() {
        try {
          const categoriesData = await getCategoriesAndDocuments();
          return categoriesData;
        } catch (error) {
          return { error: error };
        }
      },
    }),
    addData: builder.mutation({
      async queryFn(args) {
        await addData(args);
      },
    }),
  }),
});

export const { useFetchServiceCategoriesQuery, useAddDataMutation } =
  serviceCategoriesApi;
