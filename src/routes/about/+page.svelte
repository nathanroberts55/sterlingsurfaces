<svelte:head>
	<title>Sterling Surfaces | About Us</title>
	<meta
		name="description"
		content="Sterling Surfaces is a local business dedicated to making your home shine. Learn more about us today!"
	/>
</svelte:head>

<section class="mx-auto max-w-3xl p-4 font-sans">
	<header>
		<h1 class="font-display mb-10 text-center text-6xl font-bold max-md:text-4xl">
			About Sterling Surfaces
		</h1>
	</header>

	<section class="mb-8">
		<h2 class="font-display mb-2 text-center text-3xl font-semibold">Who We Are</h2>
		<p>
			Sterling Surfaces was founded by a group of high school friends from the Sterling area, united
			by an entrepreneurial spirit and a passion for their community. As a local team, we prioritize
			hard work, quality craftsmanship, and attention to detail in every project. Our commitment
			goes beyond surfaces—we strive to improve our community and deliver results our neighbors can
			be proud of.
		</p>
	</section>

	<section class="mb-8 flex flex-col items-center gap-6 md:flex-row">
		<div class="md:w-2/3">
			<h2 class="font-display mb-2 text-3xl font-semibold">Why Choose Us?</h2>
			<p>
				We believe every space deserves to shine. Our mission is to transform homes and businesses
				with beautiful, durable surfaces that stand the test of time. We pride ourselves on
				reliability, transparency, and a personalized approach for every client.
			</p>
		</div>
		<div class="flex w-1/2 justify-center max-md:w-full">
			<img
				src="/imgs/power-washing-3.jpg"
				alt="Sterling Surfaces team at work"
				class="h-auto max-w-full rounded-lg shadow-lg"
			/>
		</div>
	</section>

	<section class="mb-8 flex flex-row items-center gap-6 max-md:flex-col-reverse">
		<div class="flex w-1/2 justify-center max-md:w-full">
			<img
				src="/imgs/power-washing-4.jpg"
				alt="Sterling Surfaces power washing in action"
				class="h-auto max-w-full rounded-lg shadow-lg"
			/>
		</div>
		<div class="flex flex-col md:w-2/3">
			<h2 class="font-display mb-2 text-3xl font-semibold">What We Do</h2>
			<p>
				Sterling Surfaces specializes in professional power washing services for driveways, outdoor
				stairs, sidewalks, porches, siding, patios, and more. We also provide thorough weeding
				services to clear walkways, backyards, patios, and other outdoor spaces. Every project is
				completed with careful attention to detail and a commitment to quality craftsmanship.
			</p>
			<p class="my-2 text-center font-bold">See the Results of Our Work!</p>

			<button class="btn btn-accent btn-lg mx-auto my-4"
				><a href="/gallery">Visit Image Gallery</a></button
			>
		</div>
	</section>

	<!-- <hr class="my-8 border-t-2 border-gray-300" /> -->

	<section
		class="bg-secondary text-secondary-content mb-8 flex flex-row items-center gap-6 rounded-lg p-4 max-md:flex-col"
	>
		<div class="md:w-2/3">
			<h2 class="font-display mb-2 text-3xl font-semibold">Your Satisfaction, Guaranteed</h2>
			<p>
				Your satisfaction is our top priority. We stand behind our work with a comprehensive
				guarantee—if you're not completely happy, we'll make it right.
			</p>
		</div>
		<div class="md:w-1/3">
			<img class="h-48" src="/imgs/satisfaction.png" alt="satisfaction emblem" />
		</div>
	</section>

	<section class="my-10 text-center">
		<h3 class="mb-4 text-lg font-medium">Ready to transform your space?</h3>
		<a href="/contact">
			<button class="btn btn-lg btn-primary"> Request a Free Estimate</button>
		</a>
	</section>
</section>
