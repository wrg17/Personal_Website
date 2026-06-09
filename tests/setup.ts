import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/svelte';

afterEach(() => {
	cleanup();
	try {
		localStorage.clear();
	} catch {
		// no-op when storage unavailable
	}
});
