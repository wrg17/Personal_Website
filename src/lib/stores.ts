import { type Writable, writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

export const theme: Writable<Theme> = writable('light');
