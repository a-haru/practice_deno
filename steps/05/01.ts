function handler(): Response {
    return new Response('Hello World');
}

Deno.serve({
    hostname: 'localhost',
    port: 8080,
}, handler);
