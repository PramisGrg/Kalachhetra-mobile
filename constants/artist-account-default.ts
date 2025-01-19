import { TArtistAccountFormSchema } from "~/schema/artist.schema";

export const getArtistAccountDefaults = (
  defaultValues?: TArtistAccountFormSchema
) => {
  /**
   * TODO: Use the passed default values...
   */
  return {
    firstName: "",
    lastName: "",
    gender: undefined,
    dob: undefined,
    email: "",
    phoneNumber: "",
    address: {
      country: "NP",
      street: "",
      city: "",
      state: "",
      zip: undefined,
    },
    experiences: [
      {
        experienceTitle: "",
        experienceDescription: "",
        experienceCompany: "",
        experienceStartDate: undefined,
        experienceEndDate: undefined,
      },
    ],
    achievements: [
      {
        achievementTitle: "",
        achievementDescription: "",
      },
    ],
    trainings: [
      {
        trainingTitle: "",
        trainingDescription: "",
        trainingCompany: "",
        trainingStartDate: undefined,
        trainingEndDate: undefined,
      },
    ],
    userName: "",
    userBio: "",
    socialHandles: [
      {
        socialSiteName: "facebook",
        socialSiteLink: "",
      },
      {
        socialSiteName: "instagram",
        socialSiteLink: "",
      },
    ],
  };
};
