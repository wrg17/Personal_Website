<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="About" description="About William George." />

<section class="glass rounded-base p-[clamp(1rem,3vw,3rem)]">
	<h1 class="mt-0 mb-6 text-[clamp(1.5rem,3.5vw,2.5rem)]">About</h1>
	<div class="text-ink-muted space-y-12 leading-relaxed">
		<p class="m-0">
			I'm a backend engineer at North, working on the API layer of a credit card payment gateway.
			The systems I touch handle transaction processing, customer and merchant accounts, and
			financial reporting — mostly in JavaScript on top of Postgres. The work I find most satisfying
			is making endpoints faster and clearer at the same time: a recent rewrite cut a critical path
			roughly in half while making the code easier to read.
		</p>
		<p class="m-0">
			I studied Computer Science and Industrial & Operations Engineering at the University of
			Michigan, with a focus on Financial Engineering — cash flow analysis, portfolio management,
			Black-Scholes, and classical optimization, alongside the standard CS sequence in operating
			systems, distributed systems, machine learning, and full-stack development. The two-degree
			combination shapes how I think about software: not just whether code works, but whether the
			larger system holds up under real-world constraints.
		</p>
		<p class="m-0">
			I'm especially interested in fintech, where correctness, latency, and trust are all
			non-negotiable at once. It's a domain where small backend decisions compound quickly, which
			makes it a satisfying place to think carefully about design.
		</p>
		<p class="m-0">
			Outside of work, I study philosophy, play chess, piano, and tennis, spend time at the gym, and
			pick up new languages when I can.
		</p>
	</div>
</section>
