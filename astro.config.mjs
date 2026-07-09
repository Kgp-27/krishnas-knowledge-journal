// @ts-check
import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [keystatic(), react()],
  adapter: cloudflare(),
});