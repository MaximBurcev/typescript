enum RequestType {
    GET = 'get',
    POST = 'post'
}

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

function fetchWithAuth2(url: string, method: 1 | 2) {
    
}

const b = 'asdf';

fetchWithAuth('url', 'post');

fetchWithAuth2('url', 2);

let c: 'asdf' = 'asdf';
//c = 'gdsg';

let method = 'post';

fetchWithAuth('asd', method as 'post');