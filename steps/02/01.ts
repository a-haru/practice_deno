const filepath = new URL("./files/01-sample.txt", import.meta.url);
const content = await Deno.readFile(filepath);
console.log(new TextDecoder().decode(content));