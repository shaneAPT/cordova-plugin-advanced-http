module.exports = {
  ADDING_COOKIES_NOT_SUPPORTED: 'advanced-http: "setHeader" does not support adding cookies, please use "setCookie" function instead',
  EMPTY_FILE_PATHS: 'advanced-http: "filePaths" option array must not be empty, <filePaths: string[]>',
  EMPTY_NAMES: 'advanced-http: "names" option array must not be empty, <names: string[]>',
  INSTANCE_TYPE_MISMATCH_DATA: 'advanced-http: "data" option is configured to support only following instance types:',
  INSTANCE_TYPE_NOT_SUPPORTED: 'advanced-http: this webview does not support following Web API which is needed for this plugin:',
  INVALID_CLIENT_AUTH_ALIAS: 'advanced-http: invalid client certificate alias, needs to be a string or undefined, <alias: string | undefined>',
  INVALID_CLIENT_AUTH_MODE: 'advanced-http: invalid client certificate authentication mode, supported modes are:',
  INVALID_CLIENT_AUTH_OPTIONS: 'advanced-http: invalid client certificate authentication options, needs to be an dictionary style object',
  INVALID_CLIENT_AUTH_PKCS_PASSWORD: 'advanced-http: invalid PKCS12 container password, needs to be a string, <pkcsPassword: string>',
  INVALID_CLIENT_AUTH_RAW_PKCS: 'advanced-http: invalid PKCS12 container, needs to be an array buffer, <rawPkcs: ArrayBuffer>',
  INVALID_DATA_SERIALIZER: 'advanced-http: invalid serializer, supported serializers are:',
  INVALID_DOWNLOAD_FILE_PATH: 'advanced-http: invalid "filePath" value, needs to be a string, <filePath: string>',
  INVALID_FOLLOW_REDIRECT_VALUE: 'advanced-http: invalid follow redirect value, needs to be a boolean value, <followRedirect: boolean>',
  INVALID_HEADER_VALUE: 'advanced-http: invalid header value, needs to be a string, <header: string>',
  INVALID_HTTP_METHOD: 'advanced-http: invalid HTTP method, supported methods are:',
  INVALID_RESPONSE_TYPE: 'advanced-http: invalid response type, supported types are:',
  INVALID_SSL_CERT_MODE: 'advanced-http: invalid SSL cert mode, supported modes are:',
  INVALID_TIMEOUT_VALUE: 'advanced-http: invalid timeout value, needs to be a positive numeric value, <timeout: number>',
  MANDATORY_FAIL: 'advanced-http: missing mandatory "onFail" callback function',
  MANDATORY_SUCCESS: 'advanced-http: missing mandatory "onSuccess" callback function',
  MISSING_BLOB_API: 'advanced-http: Blob API is not supported in this webview. If you want to use "multipart/form-data" requests, you need to load a polyfill library before loading this plugin. Check out https://github.com/silkimen/cordova-plugin-advanced-http/wiki/Web-APIs-required-for-Multipart-requests for more info.',
  MISSING_FILE_READER_API: 'advanced-http: FileReader API is not supported in this webview. If you want to use "multipart/form-data" requests, you need to load a polyfill library before loading this plugin. Check out https://github.com/silkimen/cordova-plugin-advanced-http/wiki/Web-APIs-required-for-Multipart-requests for more info.',
  MISSING_FORMDATA_API: 'advanced-http: FormData API is not supported in this webview. If you want to use "multipart/form-data" requests, you need to load a polyfill library before loading this plugin. Check out https://github.com/silkimen/cordova-plugin-advanced-http/wiki/Web-APIs-required-for-Multipart-requests for more info.',
  MISSING_FORMDATA_ENTRIES_API: 'advanced-http: This webview does not implement FormData API specification correctly, FormData.entries() is missing. If you want to use "multipart/form-data" requests, you need to load a polyfill library before loading this plugin. Check out https://github.com/silkimen/cordova-plugin-advanced-http/wiki/Web-APIs-required-for-Multipart-requests for more info.',
  MISSING_TEXT_ENCODER_API: 'advanced-http: TextEncoder API is not supported in this webview. If you want to use "multipart/form-data" requests, you need to load a polyfill library before loading this plugin. Check out https://github.com/silkimen/cordova-plugin-advanced-http/wiki/Web-APIs-required-for-Multipart-requests for more info.',
  POST_PROCESSING_FAILED: 'advanced-http: an error occured during post processing response:',
  TYPE_MISMATCH_DATA: 'advanced-http: "data" option is configured to support only following data types:',
  TYPE_MISMATCH_FILE_PATHS: 'advanced-http: "filePaths" option needs to be an string array, <filePaths: string[]>',
  TYPE_MISMATCH_HEADERS: 'advanced-http: "headers" option needs to be an dictionary style object with string values, <headers: {[key: string]: string}>',
  TYPE_MISMATCH_NAMES: 'advanced-http: "names" option needs to be an string array, <names: string[]>',
  TYPE_MISMATCH_PARAMS: 'advanced-http: "params" option needs to be an dictionary style object, <params: {[key: string]: string | string[]}>',
};
