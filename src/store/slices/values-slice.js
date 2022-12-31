import { createSlice } from "@reduxjs/toolkit";

const valuesSlice = createSlice({
  name: "values",
  initialState: [
    {
      id: 1,
      title: "Quality",
      src: "images/Quality.jpg",
      description:
        "This is primarily why you hire me. Quality is what sets me apart from other services out there. Anyone can do it. Few can do it as good as, or better than me!",
    },
    {
      id: 2,
      title: "Trust",
      src: "images/Trust.jpg",
      description:
        "I value trust more than anything else. It's important that you trust me to deliver the best value. It's important that you trust me to deliver on time. And I'll do everything in my power to build and preserve that trust.",
    },
    {
      id: 3,
      title: "Transparency",
      src: "images/Transparency.jpg",
      description:
        "You will know what you need to know, the moment I know it. The timeline, the progress, the output, the cost - nothing is hidden from you.",
    },

    {
      id: 4,
      title: "Creativity",
      src: "images/Creativity.jpg",
      description:
        "I belive in questioning and breaking the status quo. Normal is good, but great is, well, great! If you need out-of-the-box thinking to go with your work, you've come to the right place! ",
    },
  ],
  reducers: {
    //Assumption - action.payload = {id,title=originalTitle,description=originalDescription}
    changeValue(state, action) {
      return state.map((value) => {
        if (action.payload.id === value.id) {
          return {
            ...value,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return value;
      });
    },
  },
});

export const { changeValue } = valuesSlice.actions;
export const valuesReducer = valuesSlice.reducer;
