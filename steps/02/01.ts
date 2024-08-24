/**
 * @see https://docs.deno.com/runtime/tutorials/read_write_files/#reading-a-text-file
 * @see https://qiita.com/access3151fq/items/233bd3d72f62ad684fa1
 */

const filepath = new URL("./files/01-sample.txt", import.meta.url);
const content = await Deno.readTextFile(filepath);

console.log(content);
