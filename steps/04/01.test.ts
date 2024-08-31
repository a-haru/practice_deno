// https://docs.deno.com/runtime/fundamentals/testing/

import { assertEquals } from "@std/assert";
import { trimAndAddHonorific } from "./files/01-modules/func.ts";

Deno.test("敬称を追加する関数のテスト", () => {
    assertEquals(trimAndAddHonorific("Alice", "さん"), "Alice さん");
    assertEquals(trimAndAddHonorific("Bobさん", "さん"), "Bobさん");
    assertEquals(trimAndAddHonorific("  Charlie  ", "さん"), "Charlie さん");
    assertEquals(trimAndAddHonorific("Dave"), "Dave 様");
    assertEquals(trimAndAddHonorific("  ", "さん"), "");
    assertEquals(trimAndAddHonorific("", "さん"), "");
});
