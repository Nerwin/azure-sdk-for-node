// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/applications/my_application_id?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#getapplicationsummaryresponse/@Element\",\"id\":\"my_application_id\",\"versions\":[\r\n    \"1.0\"\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '752ac876-9fcf-4147-a7ab-6edffffa8381',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/applications/my_application_id?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#getapplicationsummaryresponse/@Element\",\"id\":\"my_application_id\",\"versions\":[\r\n    \"1.0\"\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '752ac876-9fcf-4147-a7ab-6edffffa8381',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:48:34 GMT',
  connection: 'close' });
 return result; }]];