const routeMetadata = {
  "/": {
    title: "Home Page",
    description: "Description for the home page",
    keywords: "home, page, keywords",
  },
  "/about-us": {
    title: "About Us",
    description: "Learn more about our company",
    keywords: "about, us, company",
  },
  "/contact-us": {
    title: "Contact Us",
    description: "Contact us for more information",
    keywords: "contact, information",
  },
  "/signin": {
    title: "Sign In",
    description: "Sign in to your account",
    keywords: "sign, in, account",
  },
  "/signup": {
    title: "Sign Up",
    description: "Sign up for an account",
    keywords: "sign, up, account",
  },
  "/forgotpass": {
    title: "Forgot Password",
    description: "Forgot your password?",
    keywords: "forgot, password",
  },
  "/signup/recruiter": {
    title: "Recruiter Registration",
    description: "Register as a recruiter",
    keywords: "recruiter, registration",
  },
  "/signup/jobseeker": {
    title: "Job Seeker Registration",
    description: "Register as a job seeker",
    keywords: "job, seeker, registration",
  },
  "/signup/college": {
    title: "College Registration",
    description: "Register as a college",
    keywords: "college, registration",
  },

  "/jobseeker/profile": {
    title: "Profile",
    description: "Profile",
    keywords: "profile",
  },

  "/recruiter/profile": {
    title: "Profile",
    description: "Profile",
    keywords: "profile",
  },

  "/jobseeker/alljobs": {
    title: "All Jobs",
    description: "All Jobs",
    keywords: "all, jobs",
  },

  "/jobseeker/appliedjobs": {
    title: "Applied Jobs",
    description: "Applied Jobs",
    keywords: "applied, jobs",
  },

  "/jobseeker/jobdetails": {
    title: "Job Details",
    description: "Job Details",
    keywords: "job, details",
  },

  "/verifyotp": {
    title: "Verify OTP",
    description: "Verify OTP",
    keywords: "verify, otp",
  },

  "/postedjobs": {
    title: "Posted Jobs",
    description: "Posted Jobs",
    keywords: "posted, jobs",
  },

  "/recruiter/applicant": {
    title: "Applicants",
    description: "Applicants",
    keywords: "applicants",
  },

  "/recruiter/jobdetails": {
    title: "Job Details",
    description: "Job Details",
    keywords: "job, details",
  },

  "/recruiter/editjob": {
    title: "Edit Job",
    description: "Edit Job",
    keywords: "edit, job",
  },
};

/**
 * This file contains the metadata for each route in the application.
 * It exports a function that sets the metadata for a given route.
 * It also exports a function that initializes the metadata for the current route.
 *
 */

export const initializeMetadata = (pathname) => {
  setMetadata(routeMetadata[pathname]);
};

/**
 * This function sets the metadata for a given route.
 * It accepts an object with the following properties:
 * - title: The title of the page
 * - description: The description of the page
 * - keywords: The keywords for the page
 * If no object is provided, it uses the default metadata.
 *
 * @param {object} metadata - An object containing the metadata for the page
 * @param {string} metadata.title - The title of the page
 * @param {string} metadata.description - The description of the page
 * @param {string} metadata.keywords - The keywords for the page
 *
 */

export function setMetadata(
  metadata = {
    title: "EmployeeX",
    description: "Default page description",
    keywords: "default, keywords",
  }
) {
  const {
    title = "EmployeeX",
    description = "Default page description",
    keywords = "default, keywords",
  } = metadata;

  document.title = title;

  const descriptionMetaTag = document.querySelector('meta[name="description"]');
  if (descriptionMetaTag) {
    descriptionMetaTag.setAttribute("content", description);
  } else {
    const newDescriptionMetaTag = document.createElement("meta");
    newDescriptionMetaTag.setAttribute("name", "description");
    newDescriptionMetaTag.setAttribute("content", description);
    document.head.appendChild(newDescriptionMetaTag);
  }

  const keywordsMetaTag = document.querySelector('meta[name="keywords"]');
  if (keywordsMetaTag) {
    keywordsMetaTag.setAttribute("content", keywords);
  } else {
    const newKeywordsMetaTag = document.createElement("meta");
    newKeywordsMetaTag.setAttribute("name", "keywords");
    newKeywordsMetaTag.setAttribute("content", keywords);
    document.head.appendChild(newKeywordsMetaTag);
  }
}
