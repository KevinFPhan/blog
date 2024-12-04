import tailwind from "@astrojs/tailwind";
import { createResolver } from "astro-integration-kit";
import { hmrIntegration } from "astro-integration-kit/dev";
import { defineConfig } from "astro/config";
import metaTags from "astro-meta-tags"

const { default: packageName } = await import("package-name");
const site = "https://astro.build";
// import packageName from "package-name";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		metaTags(),
		packageName({
			site: site,
			title: "Playground",
			layoutComponent: './src/layouts/Layout.astro',
			// blogRoot: {
			// 	description: "A blog about Astro 2",
			// 	seo: {
			// 		description: "A blog about Astro",
			// 	}
			// },
			paginateSize: 1,
			logo: {
				src: "./public/images/logo.png",
				alt: "Default Logo",
			}
		}),
		hmrIntegration({
			directory: createResolver(import.meta.url).resolve("../package/dist"),
		}),
	],
});
