// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#certificates/@Element\",\"thumbprint\":\"cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T21:54:41.483977Z\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '507b7882-bffc-462a-993c-bfa4cf104bd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 21:54:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#certificates/@Element\",\"thumbprint\":\"cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T21:54:41.483977Z\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '507b7882-bffc-462a-993c-bfa4cf104bd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 21:54:42 GMT',
  connection: 'close' });
 return result; }]];