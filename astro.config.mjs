// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: "Yuri's Docs",
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://github.com/withastro/starlight' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],
			// components: {
			// 	PageSidebar: "./src/components/CustomRightSidebar.astro",
			// },
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Introduction', slug: 'guides/instruction' },
						{ label: 'Introduction to Terraform', slug: 'guides/terraform' },
						{ label: 'Introduction to vm', slug: 'guides/virtualmachine' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			]
		}),
	],
});
