<script>
	let phone = '';

	function formatPhone(input) {
		const digits = input.replace(/\D/g, '').slice(0, 10);
		let formatted = '';

		if (digits.length > 0) {
			formatted += '(' + digits.substring(0, 3);
		}
		if (digits.length >= 4) {
			formatted += ') ' + digits.substring(3, 6);
		}
		if (digits.length >= 7) {
			formatted += '-' + digits.substring(6, 10);
		}

		return formatted;
	}

	function handlePhoneInput(event) {
		phone = formatPhone(event.target.value);
	}
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="mb-10 lg:mb-0">
				<div class="group h-full w-full">
					<div class="relative h-full">
						<img
							src="/imgs/power-washing-1.jpg"
							alt="ContactUs tailwind section"
							class="h-full w-full rounded-2xl object-cover bg-blend-multiply lg:rounded-l-2xl"
						/>
						<h1
							class="font-manrope text-neutral font-display absolute top-11 left-11 text-4xl leading-10 font-bold"
						>
							Contact Us
						</h1>
						<div class="absolute bottom-0 w-full p-5 lg:p-11">
							<div class="block rounded-lg bg-white p-6">
								<a href="javascript:;" class="mb-6 flex items-center">
									<svg
										width="30"
										height="30"
										viewBox="0 0 30 30"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
											stroke="#009689"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<h5 class="ml-5 text-base leading-6 font-normal text-black">(202) 993-6761</h5>
								</a>
								<a href="javascript:;" class="mb-6 flex items-center">
									<svg
										width="30"
										height="30"
										viewBox="0 0 30 30"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
											stroke="#009689"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
									<h5 class="ml-5 text-base leading-6 font-normal text-black">
										sterlingssurfaces@gmail.com
									</h5>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form
				action="https://formspree.io/f/mnnzdqrn"
				method="POST"
				class="flex flex-col rounded-2xl bg-gray-50 p-5 lg:rounded-r-2xl lg:p-11"
			>
				<h2 class="font-manrope text-accent font-display mb-11 text-4xl leading-10 font-semibold">
					Send Us A Message
				</h2>
				<input
					type="text"
					name="Name"
					placeholder="Name"
					class="input input-accent input-lg mb-10 h-12 w-full rounded-full bg-transparent pl-4 text-gray-600 placeholder-gray-400 shadow-sm"
				/>
				<input
					type="email"
					name="Email"
					placeholder="Email"
					class="input input-accent input-lg mb-10 h-12 w-full rounded-full bg-transparent pl-4 text-gray-600 placeholder-gray-400 shadow-sm"
				/>
				<input
					type="tel"
					bind:value={phone}
					on:blur={handlePhoneInput}
					name="Phone Number"
					placeholder="Phone"
					class="input input-accent input-lg mb-10 h-12 w-full rounded-full bg-transparent pl-4 text-gray-600 placeholder-gray-400 shadow-sm"
				/>

				<div class="mb-10">
					<h4 class="mb-4 text-lg font-normal text-gray-500">Preferred method of communication</h4>
					<div class="flex">
						<div class="mr-11 flex items-center">
							<input
								id="radio-group-1"
								type="radio"
								name="Preferred Contact Method"
								class="radio radio-accent"
								value="Email"
							/>
							<label
								for="radio-group-1"
								class="flex cursor-pointer items-center pl-4 text-base leading-6 font-normal text-gray-500"
							>
								Email
							</label>
						</div>
						<div class="flex items-center">
							<input
								id="radio-group-2"
								type="radio"
								name="Preferred Contact Method"
								class="radio radio-accent"
								value="Phone"
							/>
							<label
								for="radio-group-2"
								class="flex cursor-pointer items-center pl-4 text-base leading-6 font-normal text-gray-500"
							>
								Phone
							</label>
						</div>
					</div>
				</div>
				<textarea
					placeholder="Message"
					name="Message"
					cols="30"
					class="textarea textarea-accent mb-10 w-full rounded-xl border bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm"
				></textarea>
				<!-- <div
					class="g-recaptcha mx-auto my-6"
					data-sitekey="6LdmMI4rAAAAAPObtcI6R8gKuXeJLrqyubnhQx6K"
				></div> -->
				<button class="btn btn-accent w-full rounded-full">Send</button>
			</form>
		</div>
	</div>
</section>
