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
 * The parameters used to update a virtual network rule while updating a Data
 * Lake Store account.
 *
 */
class UpdateVirtualNetworkRuleWithAccountParameters {
  /**
   * Create a UpdateVirtualNetworkRuleWithAccountParameters.
   * @property {string} name The unique name of the virtual network rule to
   * update.
   * @property {string} [subnetId] The resource identifier for the subnet.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateVirtualNetworkRuleWithAccountParameters
   *
   * @returns {object} metadata of UpdateVirtualNetworkRuleWithAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateVirtualNetworkRuleWithAccountParameters',
      type: {
        name: 'Composite',
        className: 'UpdateVirtualNetworkRuleWithAccountParameters',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          subnetId: {
            required: false,
            serializedName: 'properties.subnetId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateVirtualNetworkRuleWithAccountParameters;
