module.exports = {
  "extends" : [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard",
  ],
  "parser": "babel-eslint",
  "rules": {
    "semi": ["error", "always"]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
