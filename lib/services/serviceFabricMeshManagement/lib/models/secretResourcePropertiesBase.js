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

const models = require('./index');

/**
 * This type describes the properties of a secret resource, including its kind.
 *
 * @extends models['ProvisionedResourceProperties']
 */
class SecretResourcePropertiesBase extends models['ProvisionedResourceProperties'] {
  /**
   * Create a SecretResourcePropertiesBase.
   * @member {string} kind Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SecretResourcePropertiesBase
   *
   * @returns {object} metadata of SecretResourcePropertiesBase
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SecretResourcePropertiesBase',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'ProvisionedResourceProperties',
        className: 'SecretResourcePropertiesBase',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SecretResourcePropertiesBase;