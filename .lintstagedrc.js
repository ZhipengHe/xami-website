module.exports = {
  "*.{js,jsx,mjs}": ["yarn eslint --fix", "yarn prettier --write"],
  "*.{ts,tsx}": ["yarn prettier --write"],
  "*.{json,css,md,mdx}": ["yarn prettier --write"],
};
