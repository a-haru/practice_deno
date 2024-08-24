/**
 * @see https://docs.deno.com/examples/http-requests/
 */

const args = [...Deno.args];

if (args.length === 0 || !URL.canParse(args[0])) {
    console.error("不正な引数");
    Deno.exit(1);
}

const url = new URL(args[0]);

const response = await fetch(url);
const htmlBytes = await response.bytes();

const filename = new URL(`./files/${url.hostname}.html`, import.meta.url);

await Deno.writeFile(filename, htmlBytes).catch(()=>{
    console.error("書き込みエラー");
    Deno.exit(1);
});

console.log("書き込み完了");
