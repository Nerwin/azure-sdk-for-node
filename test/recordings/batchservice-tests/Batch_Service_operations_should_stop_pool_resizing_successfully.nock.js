// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool2/stopresize?api-version=2015-12-01.2.2')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sun, 20 Mar 2016 22:01:43 GMT',
  etag: '0x8D3510B390A0E73',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '35653e92-fdad-483e-8209-c1feed9f3be5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2/stopresize',
  date: 'Sun, 20 Mar 2016 22:01:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool2/stopresize?api-version=2015-12-01.2.2')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sun, 20 Mar 2016 22:01:43 GMT',
  etag: '0x8D3510B390A0E73',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '35653e92-fdad-483e-8209-c1feed9f3be5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2/stopresize',
  date: 'Sun, 20 Mar 2016 22:01:42 GMT',
  connection: 'close' });
 return result; }]];