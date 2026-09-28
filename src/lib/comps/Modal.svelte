<script>
	export let show = false;
	export let profile = null;
	export let close;
</script>

{#if show && profile}
	<div
		class="overlay"
		on:click={close}
		on:keydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') close();
		}}
		role="button"
		tabindex="0"
		aria-label="Close modal"
	>
		<div
			class="modal"
			on:click|stopPropagation
			on:keydown={(e) => {
				if (e.key === 'Escape') close();
			}}
			role="dialog"
			aria-labelledby="modal-title"
		>
			<img src={profile.photo} alt="{profile.name}'s photo" class="img" />
			<h2 id="modal-title">{profile.name}</h2>
			<p>{profile.designation}</p>
			<p><b>{profile.field}</b></p>
			<p>{profile.description}</p>

			<button on:click={close}>Close</button>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}
	.modal {
		background: white;
		padding: 30px;
		max-width: 500px;
		margin: 100px auto;
		border-radius: 10px;
	}
	.img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
