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
 * The Windows operation systems profile, and configure remote desktop
 * settings.
 *
 */
class OsProfile {
  /**
   * Create a OsProfile.
   * @member {object} [windowsOperatingSystemProfile] The Windows OS profile.
   * @member {object} [windowsOperatingSystemProfile.rdpSettings] The RDP
   * settings.
   * @member {string} [windowsOperatingSystemProfile.rdpSettings.username] The
   * username for the RDP user.
   * @member {string} [windowsOperatingSystemProfile.rdpSettings.password] The
   * password for the RDP user.
   * @member {date} [windowsOperatingSystemProfile.rdpSettings.expiryDate] The
   * RDP expiry date(YYYY-MM-DD).
   * @member {object} [linuxOperatingSystemProfile] The Linux OS profile.
   * @member {string} [linuxOperatingSystemProfile.username] The username.
   * @member {string} [linuxOperatingSystemProfile.password] The password.
   * @member {object} [linuxOperatingSystemProfile.sshProfile] The SSH profile.
   * @member {array} [linuxOperatingSystemProfile.sshProfile.publicKeys] The
   * list of SSH public keys.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OsProfile
   *
   * @returns {object} metadata of OsProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OsProfile',
      type: {
        name: 'Composite',
        className: 'OsProfile',
        modelProperties: {
          windowsOperatingSystemProfile: {
            required: false,
            serializedName: 'windowsOperatingSystemProfile',
            type: {
              name: 'Composite',
              className: 'WindowsOperatingSystemProfile'
            }
          },
          linuxOperatingSystemProfile: {
            required: false,
            serializedName: 'linuxOperatingSystemProfile',
            type: {
              name: 'Composite',
              className: 'LinuxOperatingSystemProfile'
            }
          }
        }
      }
    };
  }
}

module.exports = OsProfile;