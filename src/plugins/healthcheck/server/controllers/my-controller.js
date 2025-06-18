'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('healthcheck')
      .service('myService')
      .getWelcomeMessage();
  },
});
