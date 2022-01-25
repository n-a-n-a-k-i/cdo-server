'use strict';

/**
 * expose router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::expose.expose');
