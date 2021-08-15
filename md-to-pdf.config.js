module.exports = {
  dest: "Resume.of.Matthew.Francis.Brunetti.pdf",
  pdf_options: {
    format: "Letter",
    margin: "20mm",
    headerTemplate: `
      <header></header>
    `,
    footerTemplate: `
      <style>
        footer {
          margin: 0 auto;
          font-family: system-ui;
          font-size: 11px;
        }
      </style>
      <footer>
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </footer>
    `
  },
};
