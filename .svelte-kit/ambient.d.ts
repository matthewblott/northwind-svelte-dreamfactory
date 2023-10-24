
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PATH: string;
	export const BUNDLE_USER_PLUGIN: string;
	export const LESSHISTFILE: string;
	export const NB_DIR: string;
	export const RBENV_SHELL: string;
	export const ANDROID_HOME: string;
	export const PNPM_HOME: string;
	export const WINEPREFIX: string;
	export const XDG_CACHE_HOME: string;
	export const XDG_STATE_HOME: string;
	export const COLORTERM: string;
	export const LOGNAME: string;
	export const BUNDLE_USER_CONFIG: string;
	export const PWD: string;
	export const CARGO_HOME: string;
	export const INFOPATH: string;
	export const TOOLBOX_VERSION: string;
	export const NODE_REPL_HISTORY: string;
	export const SHELL: string;
	export const HOMEBREW_CELLAR: string;
	export const NPM_CONFIG_USERCONFIG: string;
	export const VISUAL: string;
	export const TMPDIR: string;
	export const XPC_FLAGS: string;
	export const SQLITE_HISTORY: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const LESS: string;
	export const NODE_ENV: string;
	export const HISTFILE: string;
	export const FORCE_COLOR: string;
	export const MANPATH: string;
	export const STARSHIP_SESSION_KEY: string;
	export const JAVA_HOME: string;
	export const AWS_SHARED_CREDENTIALS_FILE: string;
	export const HOMEBREW_PREFIX: string;
	export const LANG: string;
	export const DEBUG_COLORS: string;
	export const COMMAND_MODE: string;
	export const npm_config_color: string;
	export const MOCHA_COLORS: string;
	export const PYTHONSTARTUP: string;
	export const STARSHIP_SHELL: string;
	export const BUNDLE_USER_CACHE: string;
	export const HOMEBREW_REPOSITORY: string;
	export const XPC_SERVICE_NAME: string;
	export const __CFBundleIdentifier: string;
	export const NVM_DIR: string;
	export const XDG_DATA_HOME: string;
	export const RBENV_ROOT: string;
	export const USER: string;
	export const XDG_CONFIG_HOME: string;
	export const AWS_CONFIG_FILE: string;
	export const SSH_AUTH_SOCK: string;
	export const EDITOR: string;
	export const HOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_APP_NAME: string;
	export const PUBLIC_API_KEY: string;
	export const PUBLIC_HOST_IP: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PATH: string;
		BUNDLE_USER_PLUGIN: string;
		LESSHISTFILE: string;
		NB_DIR: string;
		RBENV_SHELL: string;
		ANDROID_HOME: string;
		PNPM_HOME: string;
		WINEPREFIX: string;
		XDG_CACHE_HOME: string;
		XDG_STATE_HOME: string;
		COLORTERM: string;
		LOGNAME: string;
		BUNDLE_USER_CONFIG: string;
		PWD: string;
		CARGO_HOME: string;
		INFOPATH: string;
		TOOLBOX_VERSION: string;
		NODE_REPL_HISTORY: string;
		SHELL: string;
		HOMEBREW_CELLAR: string;
		NPM_CONFIG_USERCONFIG: string;
		VISUAL: string;
		TMPDIR: string;
		XPC_FLAGS: string;
		SQLITE_HISTORY: string;
		__CF_USER_TEXT_ENCODING: string;
		LESS: string;
		NODE_ENV: string;
		HISTFILE: string;
		FORCE_COLOR: string;
		MANPATH: string;
		STARSHIP_SESSION_KEY: string;
		JAVA_HOME: string;
		AWS_SHARED_CREDENTIALS_FILE: string;
		HOMEBREW_PREFIX: string;
		LANG: string;
		DEBUG_COLORS: string;
		COMMAND_MODE: string;
		npm_config_color: string;
		MOCHA_COLORS: string;
		PYTHONSTARTUP: string;
		STARSHIP_SHELL: string;
		BUNDLE_USER_CACHE: string;
		HOMEBREW_REPOSITORY: string;
		XPC_SERVICE_NAME: string;
		__CFBundleIdentifier: string;
		NVM_DIR: string;
		XDG_DATA_HOME: string;
		RBENV_ROOT: string;
		USER: string;
		XDG_CONFIG_HOME: string;
		AWS_CONFIG_FILE: string;
		SSH_AUTH_SOCK: string;
		EDITOR: string;
		HOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_APP_NAME: string;
		PUBLIC_API_KEY: string;
		PUBLIC_HOST_IP: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
