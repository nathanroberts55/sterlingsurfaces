<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let selectedImage = $state('');

	function openModal(url: string) {
		selectedImage = url;
		const modal = document.getElementById('image_modal') as HTMLDialogElement;
		if (modal) modal.showModal();
	}
</script>

<section class="container mx-auto mb-20 px-4">
	<p class="font-display my-10 text-center text-4xl">Gallery</p>

	{#if data.images.length != 0}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.images as imageUrl}
				<img
					src={imageUrl}
					alt="Before and After Sample"
					class="w-full cursor-pointer shadow-md transition duration-300 ease-in-out hover:opacity-80 hover:brightness-110"
					on:click={() => openModal(imageUrl)}
				/>
			{/each}
		</div>
	{:else}
		<p class="text-center text-gray-500">No Images to show</p>
	{/if}
</section>

<!-- 🖼️ DaisyUI Modal for Full-Size Image -->
<dialog id="image_modal" class="modal">
	<div class="modal-box bg-base-100 relative overflow-hidden p-0 shadow-sm">
		<!-- ✕ Close Button -->
		<form method="dialog" class="absolute top-2 right-2 z-10">
			<button class="btn btn-sm btn-circle bg-opacity-60 hover:bg-opacity-80 bg-black text-white">
				✕
			</button>
		</form>

		<img src={selectedImage} alt="Full Size" class="max-h-[80vh] w-full rounded object-contain" />
	</div>

	<!-- Click outside to close -->
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
