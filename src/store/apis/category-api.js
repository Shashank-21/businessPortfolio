import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBz3EvwJVGTS_PGKNxcylsC9qppwBzqpec",
  authDomain: "excelirate-7e057.firebaseapp.com",
  projectId: "excelirate-7e057",
  storageBucket: "excelirate-7e057.appspot.com",
  messagingSenderId: "528609892176",
  appId: "1:528609892176:web:243138eb2e76e25bad3e55",
  measurementId: "G-2GPJJEQXF3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const serviceCategoriesApi = createApi({
  reducerPath: "service/categories",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchServiceCategories: builder.query({
      async queryFn() {
        try {
          const categoriesRef = collection(db, "service-categories");
          const categoriesSnapshot = await getDocs(categoriesRef);
          const categoriesData = categoriesSnapshot?.docs.map((doc) => {
            return doc.data();
          });

          return { data: categoriesData };
        } catch (error) {
          return { error: error };
        }
      },
    }),
    updateTestimonials: builder.mutation({
      async queryFn(category, data) {
        try {
          //category, service, testimonial
          const consultingRef = doc(db, "service-categories", category);
          await updateDoc(consultingRef, data);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addServiceRequest: builder.mutation({
      async queryFn(data) {
        try {
          const consultingRef = doc(db, "service-categories", data.category);
          await updateDoc(consultingRef, data.updatedData);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useFetchServiceCategoriesQuery,
  useUpdateTestimonialsMutation,
  useAddServiceRequestMutation,
} = serviceCategoriesApi;
