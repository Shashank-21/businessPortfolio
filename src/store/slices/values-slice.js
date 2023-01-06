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
      creditText: "Image by pch.vector on Freepik",
      creditLink:
        "https://www.freepik.com/free-vector/managers-analyzing-company-rating-brand-reputation_20827828.htm#page=2&query=quality&position=0&from_view=search&track=sph",
    },
    {
      id: 2,
      title: "Trust",
      src: "images/Trust.jpg",
      description:
        "I value trust more than anything else. It's important that you trust me to deliver the best value. It's important that you trust me to deliver on time. And I'll do everything in my power to build and preserve that trust.",
      creditText: "Image by pch.vector on Freepik",
      creditLink:
        "https://www.freepik.com/free-vector/business-partners-handshake_7732595.htm#page=5&query=Trust&position=9&from_view=search&track=sph",
    },
    {
      id: 3,
      title: "Transparency",
      src: "images/Transparency.jpg",
      description:
        "You will know what you need to know, the moment I know it. The timeline, the progress, the output, the cost - nothing is hidden from you.",
      creditText: "Image by topntp26 on Freepik",
      creditLink:
        "https://www.freepik.com/free-photo/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame_1254646.htm#query=glass%20door&position=20&from_view=search&track=sph",
    },

    {
      id: 4,
      title: "Creativity",
      src: "images/Creativity.jpg",
      description:
        "I belive in questioning and breaking the status quo. Normal is good, but great is, well, great! If you need out-of-the-box thinking to go with your work, you've come to the right place! ",
      creditText: "Image by rawpixel.com on Freepik",
      creditLink:
        "https://www.freepik.com/free-vector/illustration-light-bulb-ideas_2922257.htm#query=Creativity&position=18&from_view=search&track=sph",
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
