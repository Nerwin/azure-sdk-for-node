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
 * The result of the List migrationConfigurations operation.
 */
class MigrationConfigListResult extends Array {
  /**
   * Create a MigrationConfigListResult.
   * @property {string} [nextLink] Link to the next set of results. Not empty
   * if Value contains incomplete list of migrationConfigurations
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrationConfigListResult
   *
   * @returns {object} metadata of MigrationConfigListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrationConfigListResult',
      type: {
        name: 'Composite',
        className: 'MigrationConfigListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MigrationConfigPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'MigrationConfigProperties'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
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

module.exports = MigrationConfigListResult;
