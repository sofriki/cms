'use strict';

/**
 * uo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::uo.uo');
