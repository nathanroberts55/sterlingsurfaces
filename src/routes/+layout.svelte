<script lang="ts">
	import '../app.css';
	import Navbar from '../lib/components/shared/Navbar.svelte';
	import Footer from '../lib/components/shared/Footer.svelte';
	import FreeEstimateHeading from '$lib/components/shared/FreeEstimateHeading.svelte';
	let { children } = $props();
	export const prerender = true;
</script>

<FreeEstimateHeading />
<Navbar />
<main class="mx-auto flex w-full grow flex-col">
	{@render children()}
</main>
<Footer />
