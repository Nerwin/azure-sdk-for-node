// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D3510B363835D5\",\"lastModified\":\"2016-03-20T22:01:38.5515477Z\",\"creationTime\":\"2016-03-20T21:54:43.3925787Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T21:54:43.3925787Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:38.5515477Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"currentOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT1H\",\"currentDedicated\":3,\"targetDedicated\":2,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    },{\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D3510B3683DF80\",\"lastModified\":\"2016-03-20T22:01:39.0474112Z\",\"creationTime\":\"2016-03-20T22:01:39.0474112Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:01:39.0474112Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:39.1523933Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '54c20548-b074-41ad-b30b-44b02affbbcf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D3510B363835D5\",\"lastModified\":\"2016-03-20T22:01:38.5515477Z\",\"creationTime\":\"2016-03-20T21:54:43.3925787Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T21:54:43.3925787Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:38.5515477Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"currentOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT1H\",\"currentDedicated\":3,\"targetDedicated\":2,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    },{\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D3510B3683DF80\",\"lastModified\":\"2016-03-20T22:01:39.0474112Z\",\"creationTime\":\"2016-03-20T22:01:39.0474112Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:01:39.0474112Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:39.1523933Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '54c20548-b074-41ad-b30b-44b02affbbcf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:39 GMT',
  connection: 'close' });
 return result; }]];