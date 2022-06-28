<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script context="module">
	export const prerender = true;
</script>

<script>
	import { liveQuery } from "dexie";
	import { db } from "../lib/db";
  import { browser } from '$app/env';
  let contrats = liveQuery(
    () => browser ? db.contrats.toArray() : []
  );
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
index

<ul>
  {#if $contrats}
    {#each $contrats as contrat}
      <li>{contrat.nom}</li>
    {/each}
  {/if}
</ul>


</section>

<style>

</style>