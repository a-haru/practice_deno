/**
 * @see https://docs.deno.com/runtime/tutorials/read_write_files/#writing-a-text-file
 */

const args = [...Deno.args];

if (args.length === 0) {
    console.error("引数なし");
    Deno.exit(1);
}

const filepath = new URL("./files/02-write-sample.txt", import.meta.url);
const encoder = new TextEncoder();
const data = encoder.encode(args[0] + "\n");

await Deno.writeFile(filepath, data).catch(()=>{
    console.error("書き込みエラー");
    Deno.exit(1);
});

console.log("書き込み完了");
