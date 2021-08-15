module.exports = {
  dest: "Resume.of.Matthew.Francis.Brunetti.pdf",
  stylesheet: "node_modules/marx-css/css/marx.min.css",
  css: `
    a {
      white-space: nowrap; /* prevent issue with clicking links that wrap to next line */
    }
    body {
      color: black;
    }
    .bigger {
      font-size: 120%;
    }
  `,
  pdf_options: {
    format: "Letter",
    margin: "16mm",
    scale: 0.8,
    headerTemplate: `
      <header></header>
    `,
    footerTemplate: `
      <style>
        footer {
          margin: 0 auto;
          font-family: system-ui;
          font-size: 10px;
        }
      </style>
      <footer>
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </footer>
    `
  },
};
