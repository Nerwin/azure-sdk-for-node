/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ApiErrorError.
 */
class ApiErrorError {
  /**
   * Create a ApiErrorError.
   * @member {string} [code]
   * @member {string} [message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiErrorError
   *
   * @returns {object} metadata of ApiErrorError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiError_error',
      type: {
        name: 'Composite',
        className: 'ApiErrorError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiErrorError;