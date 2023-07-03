import { createTest } from "@nuxt/test-utils";
import { fileURLToPath } from 'node:url'

export const testServer = createTest({
  server: true,
  dev: true,
  rootDir: fileURLToPath(new URL('../../.', import.meta.url)),
})