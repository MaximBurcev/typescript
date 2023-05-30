"use strict";
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
    return 1;
}
function fetchWithAuth2(url, method) {
}
const b = 'asdf';
fetchWithAuth('url', 'post');
fetchWithAuth2('url', 2);
let c = 'asdf';
//c = 'gdsg';
let method = 'post';
fetchWithAuth('asd', method);
