import favicon from "./extensions/images/favicon.svg";

const config = {
  auth: {
    logo: favicon,
  },
  menu: {
    logo: favicon,
  },
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
