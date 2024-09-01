// https://jsr.io/@std/http@1.0.4

import { route, type Route } from '@std/http/route';
import { serveDir } from '@std/http/file-server';

const routes: Route[] = [
    {
        pattern: new URLPattern({ pathname: '/' }),
        handler: () => new Response('Hello World'),
    },
    {
        pattern: new URLPattern({ pathname: '/files/*' }),
        handler: (req) => {
            const dirInfo = new URL('./static', import.meta.url);
            return serveDir(req, {
                // 相対パスで記載すると実行ディレクトリが変わると動かなくなるため、URLを使ってフルパスを取得
                fsRoot: dirInfo.pathname,
                urlRoot: 'files',
            });
        },
    },
]

Deno.serve({
    hostname: 'localhost',
    port: 8080,
}, route(routes, () => {
    return new Response('Not Found', { status: 404 });
}));
