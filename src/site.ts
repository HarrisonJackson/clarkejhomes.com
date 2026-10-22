// Everything on the home page that isn't a book lives here.
// Edit the text, commit to main, and the site redeploys in about a minute.

export const site = {
  name: "Clarke Jackson",
  tagline: "Author",
  // One or two sentences shown under the name at the top of the page.
  intro: "Colorado author of dark, twisty book club fiction.",

  // About section. Each string is a paragraph.
  about: [
    "Clarke Jackson is a Colorado author. Her novel, Any Green Thing, is a book club psychological thriller about faith, wealth, and the secrets a community will kill to keep.",
  ],
  // Optional author photo: drop a file in /public (e.g. public/clarke.jpg) and set this to "/clarke.jpg".
  photo: "",

  // Contact address shown in the footer; leave empty to hide the contact section.
  email: "",
  // Email list signup. Submissions go to a Zapier webhook that adds a row to the
  // "Clarke J Home Email List" Google Sheet. Leave webhook empty to hide the form.
  newsletter: {
    webhook: "https://hooks.zapier.com/hooks/catch/21402526/417g1ov/",
    heading: "Join the email list",
    blurb: "News about upcoming books and events. No spam, just the occasional update.",
  },
  // Leave a link empty ("") to hide it.
  links: {
    instagram: "",
    goodreads: "",
    amazon: "",
  },
};
