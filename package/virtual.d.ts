declare module 'virtual:package-name/user-config' {
	const Config: import('./src/schema/UserConfigSchema').AstroBlogConfig;
	export default Config;
}

declare module 'virtual:package-name/components' {
	export const Layout: any;
}

declare module 'virtual:package-name/user-images' {
	type ImageMetadata = import('astro').ImageMetadata;

	export const logos: {
		dark?: ImageMetadata;
		light?: ImageMetadata;
		alt?: string;
	};
}

