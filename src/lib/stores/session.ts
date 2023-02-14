import { writable } from 'svelte/store'

export const sessionStore = writable(null)

export const isLoggedIn = writable(false)
