const config = {
  screens: {
    Login: {
      path: "login/:username?",
      parse: {
        username: (username) => username,
      },
    },
    Home: "home",
  },
};

export default config;
