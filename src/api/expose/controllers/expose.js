'use strict';

/**
 *  expose controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::expose.expose');
