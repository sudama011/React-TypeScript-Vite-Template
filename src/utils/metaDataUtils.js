const routeMetadata = {
  "/": {
    title: "Home Page",
    description: "Description for the home page",
    keywords: "home, page, keywords",
  },
  "/aboutus": {
    title: "About Us",
    description: "Learn more about our company",
    keywords: "about, us, company",
  },
  "/contactus": {
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
  "/unauthorized": {
    title: "Unauthorized",
    description: "You are not authorized to view this page",
    keywords: "unauthorized, access",
  },
};

/**
 * This file contains the metadata for each route in the application.
 * It exports a function that sets the metadata for a given route.
 * It also exports a function that initializes the metadata for the current route.
 *
 */

export const initializeMetadata = (pathname) => {
  const metadata = routeMetadata[pathname];
  if (!metadata) {
    // not found
    setMetadata({
      title: "Page Not Found",
      description: "Page Not Found",
      keywords: "404,Page Not Found,Not Found",
    });
    return;
  }
  setMetadata(metadata);
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
    title: "title",
    description: "Default page description",
    keywords: "default, keywords",
  }
) {
  const { title, description, keywords } = metadata;

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
