// Import the parser module
import { assert, assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import * as path from "https://deno.land/std@0.95.0/path/mod.ts";
import { Parser } from "../src/core/parser.js";
import { registerDataProviders } from "../src/domain/data-model/register-providers.js";
import { registerFormProviders } from "../src/domain/data-model/forms/form.provider.js";

Deno.test("should parse data providers from Example.data.dsl", async () => {
  const dataDslPath = path.join(Deno.cwd(), "documents", "Example.data.dsl");
  const dataDslContent = await Deno.readTextFile(dataDslPath);

  const parser = new Parser();
  registerDataProviders(parser);

  const result = parser.parse(dataDslContent);
  assert(result !== undefined, true);
});

Deno.test("should parse form providers from Example.form.dsl", async () => {
  const formDslPath = path.join(Deno.cwd(), "documents", "Example.form.dsl");
  const formDslContent = await Deno.readTextFile(formDslPath);

  const parser = new Parser();
  registerFormProviders(parser);

  const result = parser.parse(formDslContent);
  assert(result !== undefined, true);
});