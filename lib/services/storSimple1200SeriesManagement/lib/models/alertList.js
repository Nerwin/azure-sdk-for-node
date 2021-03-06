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
 * Collection of Alerts
 */
class AlertList extends Array {
  /**
   * Create a AlertList.
   * @member {string} [nextLink] Id of the next page of alerts
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AlertList
   *
   * @returns {object} metadata of AlertList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertList',
      type: {
        name: 'Composite',
        className: 'AlertList',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AlertElementType',
                  type: {
                    name: 'Composite',
                    className: 'Alert'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertList;
