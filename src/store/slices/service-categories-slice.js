import { createSlice, nanoid } from "@reduxjs/toolkit";

const serviceCategoriesSlice = createSlice({
  name: "values",
  initialState: [
    {
      categoryId: nanoid(),
      categoryName: "Consulting",
      services: [
        {
          serviceId: nanoid(),
          serviceName: "Life Coaching",
          serviceDescription:
            "Every individual needs a coach. It's not a luxury anymore. Being a certified practitioner of NLP (Neuro-Linguistic Programming), I am offering you my time as a coach to help you through your problems. We work by understanding the problem statement to its absolute depth and then solving for the root cause, not just to make the symptoms go away.",
          serviceCategories: [
            {
              type: "Individual",
              rateINR: 4000,
              rateUSD: 250,
              rateDetails: "per hour",
              specialOffers: "First 2 sessions are free of charge",
              samples: null,
              testimonials: [],
            },
          ],
        },
        {
          serviceId: nanoid(),
          serviceName: "Business Consulting",
          serviceDescription:
            "You're caught in the day-to-day of your business and unable to focus on the big picture? Or all you see is the big picture? Does it seem like no matter what you do, your business isn't working out? Together, we're going to figure out how to ensure that your business survives the brutal world and go on to thrive in it!",
          serviceCategories: [
            {
              type: "Business",
              rateINR: 5000,
              rateUSD: 300,
              rateDetails: "per hour",
              specialOffers: "First 2 sessions are free of charge",
              samples: null,
              testimonials: [],
            },
          ],
        },
      ],
    },
    {
      categoryId: nanoid(),
      categoryName: "Writing",
      services: [
        {
          serviceId: nanoid(),
          serviceName: "Content writing",
          serviceDescription:
            "Your business exists because it solves a problem that the world around you needs solving. To capture the attention of potential customers, we need to talk about these problems, in every way possible. This is where I come in",
          serviceCategories: [
            {
              type: "Blog post",
              rateINR: 1,
              rateUSD: 1,
              rateDetails: "per word",
              specialOffers: null,
              samples: [],
              testimonials: [],
            },
            {
              type: "Instagram post",
              rateINR: 1000,
              rateUSD: 100,
              rateDetails: "per post",
              samples: [],
              testimonials: [],
            },
            {
              type: "Instagram carousel",
              rateINR: 1500,
              rateUSD: 150,
              rateDetails: "per carousel",
              samples: [],
              testimonials: [],
            },
            {
              type: "LinkedIn post",
              rateINR: 1000,
              rateUSD: 100,
              rateDetails: "per post",
              samples: [],
              testimonials: [],
            },
            {
              type: "LinkedIn carousel",
              rateINR: 1500,
              rateUSD: 150,
              rateDetails: "per carousel",
              samples: [],
              testimonials: [],
            },
          ],
        },
        {
          serviceId: nanoid(),
          serviceName: "Copywriting",
          serviceDescription:
            "Let's face it, we need to market our product directly at times. The attention span of people, and hence the word count allowed in ad platforms, is limited. If you want to make the most of the words you get, you've come to the right place",
          serviceCategories: [
            {
              type: "Facebook Ad Copy",
              rateINR: 1500,
              rateUSD: 150,
              rateDetails: "per ad copy",
              specialOffers: "Contact me",
              samples: [],
              testimonials: [],
            },
            {
              type: "Google Ad Copy",
              rateINR: 2500,
              rateUSD: 250,
              rateDetails: "per ad copy",
              specialOffers: "Contact me",
              samples: [],
              testimonials: [],
            },
          ],
        },
      ],
    },
    {
      categoryId: nanoid(),
      categoryName: "Website",
      services: [
        {
          serviceId: nanoid(),
          serviceName: "Web Development",
          serviceDescription:
            "Your business needs online presence now more than ever. Having an account on Instagram and a page on LinkedIn is great. However, your own website gives your business credibility, directs users to a one-stop shop and helps you expand your business in any direction that you want to! Who better to help you with a website than a developer?",
          serviceCategories: [
            {
              type: "Wix portfolio",
              rateINR: 15000,
              rateUSD: 1500,
              rateDetails: "per website",
              specialOffers: "Contact me",
              samples: [],
              testimonials: [],
            },
            {
              type: "Custom portfolio",
              rateINR: 20000,
              rateUSD: 2000,
              rateDetails: "per website",
              specialOffers: "Contact me",
              samples: [],
              testimonials: [],
            },
            {
              type: "Wix website",
              rateINR: 25000,
              rateUSD: 2500,
              rateDetails: "per website",
              specialOffers: "Contact me",
              samples: [],
              testimonials: [],
            },
            {
              type: "Custom website",
              rateINR: 40000,
              rateUSD: 4000,
              rateDetails: "per website",
              specialOffers: "Contact me",
              samples: [],
              testimonials: [],
            },
          ],
        },
      ],
    },
  ],
  reducers: {
    //Assumption - action.payload = {id,title=originalTitle,description=originalDescription}
    changeService(state, action) {
      return state.map((value) => {
        if (action.payload.id === value.id) {
          return {
            ...value,
            // title: action.payload.title,
            // description: action.payload.description,
          };
        }
        return value;
      });
    },
  },
});

export const { changeService } = serviceCategoriesSlice.actions;
export const serviceCategoriesReducer = serviceCategoriesSlice.reducer;
