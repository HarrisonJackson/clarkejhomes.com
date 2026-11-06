// Everything on the home page that isn't a book lives here.
// Edit the text, commit to main, and the site redeploys in about a minute.

export const site = {
  name: "C.J. Homes",
  tagline: "Author",
  // Used for search results and link previews; not shown on the page.
  description:
    "C.J. Homes is a Colorado author. Her debut novel, ANY GREEN THING, a book club/psychological thriller set in the Florida Keys, is coming soon.",

  // About section. Each string is a paragraph.
  about: [
    "If you found this website there’s a good chance you know the author already.",
    "If you’re new here though, C.J. lives in Colorado with her husband, two children, two giant dogs, and two cats. ANY GREEN THING was inspired by the verdant Florida locale where her husband grew up vacationing, and how out of place she felt the first time she visited.",
    "This is her debut novel and she dreams of seeing it on a library shelf someday.",
    "Adding your email address is a small step you can take to help her get there!",
  ],
  // Optional author photo: drop a file in /public (e.g. public/author.jpg) and set this to "/author.jpg".
  photo: "",

  // Contact address shown in the footer; leave empty to hide the contact section.
  email: "",
  // Email list signup. Submissions go to a Zapier webhook that adds a row to the
  // "Clarke J Home Email List" Google Sheet. Leave webhook empty to hide the form.
  newsletter: {
    webhook: "https://hooks.zapier.com/hooks/catch/21402526/417g1ov/",
    heading: "Join the Email List",
    blurb: "Support the author and receive news about upcoming books and events.",
  },
  // Leave a link empty ("") to hide it.
  links: {
    instagram: "",
    goodreads: "",
    amazon: "",
  },
};
