// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '63360c88-7a93-42a3-bebc-64bf1eb8bbc0',
  'set-cookie': [ 'UserPrincipalSession=57fbd04f-37c4-438d-9e35-3fbe40336c42; path=/; secure; HttpOnly' ],
  'server-perf': '[63360c88-7a93-42a3-bebc-64bf1eb8bbc0][ AuthTime::1501.2060972063::PostAuthTime::531.623697671634 ][S-HdfsMkdirs :: 00:00:202 ms]%0a[MKDIRS :: 00:00:203 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:04 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '63360c88-7a93-42a3-bebc-64bf1eb8bbc0',
  'set-cookie': [ 'UserPrincipalSession=57fbd04f-37c4-438d-9e35-3fbe40336c42; path=/; secure; HttpOnly' ],
  'server-perf': '[63360c88-7a93-42a3-bebc-64bf1eb8bbc0][ AuthTime::1501.2060972063::PostAuthTime::531.623697671634 ][S-HdfsMkdirs :: 00:00:202 ms]%0a[MKDIRS :: 00:00:203 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:04 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1467400625191,\"modificationTime\":1467400625191,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '230a3e2b-909a-4f9e-80d4-63b6562880aa',
  'set-cookie': [ 'UserPrincipalSession=3b06a2ed-e945-40b5-9f47-bb544145cdf7; path=/; secure; HttpOnly' ],
  'server-perf': '[230a3e2b-909a-4f9e-80d4-63b6562880aa][ AuthTime::1531.14599006551::PostAuthTime::552.153484126977 ][S-HdfsGetFileStatusV2 :: 00:00:080 ms]%0a[GETFILESTATUS :: 00:00:081 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:05 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1467400625191,\"modificationTime\":1467400625191,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '230a3e2b-909a-4f9e-80d4-63b6562880aa',
  'set-cookie': [ 'UserPrincipalSession=3b06a2ed-e945-40b5-9f47-bb544145cdf7; path=/; secure; HttpOnly' ],
  'server-perf': '[230a3e2b-909a-4f9e-80d4-63b6562880aa][ AuthTime::1531.14599006551::PostAuthTime::552.153484126977 ][S-HdfsGetFileStatusV2 :: 00:00:080 ms]%0a[GETFILESTATUS :: 00:00:081 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:05 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7154.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': 'e3500d4d-8652-4b39-a184-eedc11d6a3c6',
  'set-cookie': [ 'UserPrincipalSession=3448f2d8-1499-44d6-8da8-ec416e675911; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[e3500d4d-8652-4b39-a184-eedc11d6a3c6][ AuthTime::1585.892231181::PostAuthTime::600.911160951809 ][S-FsOpenStream :: 00:00:132 ms]%0a[BufferingTime :: 00:00:000 ms]%0a[WriteTime :: 00:00:000 ms]%0a[S-FsCloseHandle :: 00:00:001 ms]%0a[CREATE :: 00:00:135 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:05 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7154.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': 'e3500d4d-8652-4b39-a184-eedc11d6a3c6',
  'set-cookie': [ 'UserPrincipalSession=3448f2d8-1499-44d6-8da8-ec416e675911; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[e3500d4d-8652-4b39-a184-eedc11d6a3c6][ AuthTime::1585.892231181::PostAuthTime::600.911160951809 ][S-FsOpenStream :: 00:00:132 ms]%0a[BufferingTime :: 00:00:000 ms]%0a[WriteTime :: 00:00:000 ms]%0a[S-FsCloseHandle :: 00:00:001 ms]%0a[CREATE :: 00:00:135 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:05 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400626393,\"modificationTime\":1467400626393,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f22522e0-3f32-40a3-8575-31f2d7077bad',
  'set-cookie': [ 'UserPrincipalSession=ca422649-45c7-4ab3-ade5-68300432b7f1; path=/; secure; HttpOnly' ],
  'server-perf': '[f22522e0-3f32-40a3-8575-31f2d7077bad][ AuthTime::1606.42158045195::PostAuthTime::556.430904198081 ][S-HdfsGetFileStatusV2 :: 00:00:086 ms]%0a[GETFILESTATUS :: 00:00:087 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:07 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400626393,\"modificationTime\":1467400626393,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f22522e0-3f32-40a3-8575-31f2d7077bad',
  'set-cookie': [ 'UserPrincipalSession=ca422649-45c7-4ab3-ade5-68300432b7f1; path=/; secure; HttpOnly' ],
  'server-perf': '[f22522e0-3f32-40a3-8575-31f2d7077bad][ AuthTime::1606.42158045195::PostAuthTime::556.430904198081 ][S-HdfsGetFileStatusV2 :: 00:00:086 ms]%0a[GETFILESTATUS :: 00:00:087 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:07 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7154.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '78750ea3-0d69-46af-aba3-e4cc01430ba3',
  'set-cookie': [ 'UserPrincipalSession=b43af800-91fa-4206-9263-a262462e149b; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[78750ea3-0d69-46af-aba3-e4cc01430ba3][ AuthTime::1565.36221241281::PostAuthTime::535.473631131376 ][S-FsOpenStream :: 00:00:141 ms]%0a[S-FsAppendStream :: 00:00:152 ms]%0a[BufferingTime :: 00:00:000 ms]%0a[WriteTime :: 00:00:153 ms]%0a[S-FsCloseHandle :: 00:00:001 ms]%0a[CREATE :: 00:00:297 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7154.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '78750ea3-0d69-46af-aba3-e4cc01430ba3',
  'set-cookie': [ 'UserPrincipalSession=b43af800-91fa-4206-9263-a262462e149b; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[78750ea3-0d69-46af-aba3-e4cc01430ba3][ AuthTime::1565.36221241281::PostAuthTime::535.473631131376 ][S-FsOpenStream :: 00:00:141 ms]%0a[S-FsAppendStream :: 00:00:152 ms]%0a[BufferingTime :: 00:00:000 ms]%0a[WriteTime :: 00:00:153 ms]%0a[S-FsCloseHandle :: 00:00:001 ms]%0a[CREATE :: 00:00:297 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400628400,\"modificationTime\":1467400628583,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '07cf6174-f049-4046-81af-8d4363221c21',
  'set-cookie': [ 'UserPrincipalSession=0044e817-eb6e-419d-bf3c-3f37537861bf; path=/; secure; HttpOnly' ],
  'server-perf': '[07cf6174-f049-4046-81af-8d4363221c21][ AuthTime::1588.02730910847::PostAuthTime::579.097488966568 ][S-HdfsGetFileStatusV2 :: 00:00:262 ms]%0a[GETFILESTATUS :: 00:00:263 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:09 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400628400,\"modificationTime\":1467400628583,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '07cf6174-f049-4046-81af-8d4363221c21',
  'set-cookie': [ 'UserPrincipalSession=0044e817-eb6e-419d-bf3c-3f37537861bf; path=/; secure; HttpOnly' ],
  'server-perf': '[07cf6174-f049-4046-81af-8d4363221c21][ AuthTime::1588.02730910847::PostAuthTime::579.097488966568 ][S-HdfsGetFileStatusV2 :: 00:00:262 ms]%0a[GETFILESTATUS :: 00:00:263 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:09 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400628400,\"modificationTime\":1467400628583,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400626393,\"modificationTime\":1467400626393,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fee4d641-c405-4d19-8cd3-b56392a75e67',
  'set-cookie': [ 'UserPrincipalSession=141bc735-2c0b-4b3a-ae22-6cd48a109d30; path=/; secure; HttpOnly' ],
  'server-perf': '[fee4d641-c405-4d19-8cd3-b56392a75e67][ AuthTime::1430.63719169127::PostAuthTime::618.445853269231 ][S-HdfsListStatus :: 00:00:096 ms]%0a[MSLISTSTATUS :: 00:00:097 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:09 GMT',
  connection: 'close',
  'content-length': '608' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7154.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400628400,\"modificationTime\":1467400628583,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1467400626393,\"modificationTime\":1467400626393,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fee4d641-c405-4d19-8cd3-b56392a75e67',
  'set-cookie': [ 'UserPrincipalSession=141bc735-2c0b-4b3a-ae22-6cd48a109d30; path=/; secure; HttpOnly' ],
  'server-perf': '[fee4d641-c405-4d19-8cd3-b56392a75e67][ AuthTime::1430.63719169127::PostAuthTime::618.445853269231 ][S-HdfsListStatus :: 00:00:096 ms]%0a[MSLISTSTATUS :: 00:00:097 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:09 GMT',
  connection: 'close',
  'content-length': '608' });
 return result; }]];