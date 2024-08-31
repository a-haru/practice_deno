// DenoではJSRで公開されているモジュールの使用する
// https://jsr.io/@std/crypto@1.0.3

import { crypto } from "@std/crypto/crypto";

const message = "Hello, Deno!";
const encoder = new TextEncoder();
const data = encoder.encode(message);

const digest = await crypto.subtle.digest("BLAKE3", data);

console.log(digest)