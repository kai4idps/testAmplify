import Script from "next/script";
import HomePage from "../components/Home/home";
import { client } from "../config/prismic"

export default function Home({ preview, data }) {
	console.log('data',preview, data);
	return (
		<>
			{/* <Script
				strategy="beforeInteractive"
				src="/_next/static/chunks/framework-d59fe1b9262289c50374.js"
			/>
			<Script
				strategy="beforeInteractive"
				src="/_next/static/chunks/447-a4ae0502ad2e73533610.js"
			/>
			<Script
				strategy="beforeInteractive"
				src="/_next/static/chunks/main-a3509aed3d975f39e5b8.js"
			/> */}
			<HomePage />
		</>
	);
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await client.getSingle('homepage_section', {
            lang: 'ca',
            fetchLinks: [
                'grid_element.content',
                'learn_button.learn_button_text',
                'learn_button.color',
            ],
        });
				console.log('allPosts',allPosts);
  return {
    props: { preview, data:{}},
  }
}
