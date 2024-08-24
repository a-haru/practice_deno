// @see https://docs.deno.com/runtime/manual/getting_started/command_line_interface/#script-arguments

const args = [...Deno.args];

if (args.length === 0) {
    console.log("引数なし");
    Deno.exit(1);
}

console.log(`引数あり: ${args.join(", ")}`);
