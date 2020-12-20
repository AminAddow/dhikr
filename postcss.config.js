module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    // "postcss-import",
    "autoprefixer",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
