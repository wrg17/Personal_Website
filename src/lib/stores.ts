import { writable, type Writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

export const theme: Writable<Theme> = writable('light');
