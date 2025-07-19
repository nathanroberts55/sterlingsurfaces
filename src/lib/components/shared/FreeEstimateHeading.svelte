<script lang="ts">
	import { fade } from 'svelte/transition';
	let visible = true;

	function toggleVisibility() {
		visible = !visible;
	}
</script>

{#if visible}
	<div transition:fade={{ delay: 250, duration: 700 }} class="bg-accent">
		<button
			type="button"
			aria-label="Close"
			class="close-x text-accent-content absolute top-[8px] right-[12px] cursor-pointer border-none bg-transparent p-0 text-xl hover:text-gray-500 max-md:top-[2px]"
			onclick={toggleVisibility}>&times;</button
		>
		<div>
			<p class="text-accent-content my-2 text-center text-lg font-bold max-md:text-sm">
				Call or Text Sterling Surfaces for a FREE Estimate!
			</p>
		</div>
	</div>
{/if}
