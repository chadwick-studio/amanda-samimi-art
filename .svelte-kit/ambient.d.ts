
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
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const SSH_AGENT_PID: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const npm_package_dependencies__emailjs_browser: string;
	export const HOME: string;
	export const TERMINFO: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies__sveltejs_adapter_netlify: string;
	export const npm_package_devDependencies_sass: string;
	export const DESKTOP_SESSION: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const NVM_BIN: string;
	export const NVM_INC: string;
	export const XDG_SEAT_PATH: string;
	export const GTK_MODULES: string;
	export const KITTY_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const NVM_DIR: string;
	export const CONDA_CHANGEPS1: string;
	export const npm_package_devDependencies_pug: string;
	export const npm_package_devDependencies_svelte_lightbox: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const GTK_IM_MODULE: string;
	export const npm_package_devDependencies__vimeo_player: string;
	export const npm_package_type: string;
	export const npm_package_dependencies__types_vimeo__player: string;
	export const WINDOWID: string;
	export const _: string;
	export const npm_package_private: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_config_registry: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const KITTY_PUBLIC_KEY: string;
	export const PROMPT_EOL_MARK: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_MENU_PREFIX: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const DESKTOP_STARTUP_ID: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const XMODIFIERS: string;
	export const npm_lifecycle_script: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_package_dependencies__sanity_image_url: string;
	export const npm_lifecycle_event: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const KITTY_WINDOW_ID: string;
	export const npm_package_dependencies__sanity_client: string;
	export const XDG_VTNR: string;
	export const QT_IM_MODULE: string;
	export const PWD: string;
	export const npm_package_dependencies_svelte_preprocess: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const CLUTTER_IM_MODULE: string;
	export const XDG_CONFIG_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const VIRTUAL_ENV_DISABLE_PROMPT: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const I3SOCK: string;
	export const npm_package_scripts_preview: string;
	export const PNPM_HOME: string;
	export const npm_package_devDependencies_object_assign: string;
	export const npm_package_dependencies__types_object_assign: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
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
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		SSH_AGENT_PID: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		npm_package_dependencies__emailjs_browser: string;
		HOME: string;
		TERMINFO: string;
		OLDPWD: string;
		npm_package_devDependencies__sveltejs_adapter_netlify: string;
		npm_package_devDependencies_sass: string;
		DESKTOP_SESSION: string;
		KITTY_INSTALLATION_DIR: string;
		NVM_BIN: string;
		NVM_INC: string;
		XDG_SEAT_PATH: string;
		GTK_MODULES: string;
		KITTY_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		NVM_DIR: string;
		CONDA_CHANGEPS1: string;
		npm_package_devDependencies_pug: string;
		npm_package_devDependencies_svelte_lightbox: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		GTK_IM_MODULE: string;
		npm_package_devDependencies__vimeo_player: string;
		npm_package_type: string;
		npm_package_dependencies__types_vimeo__player: string;
		WINDOWID: string;
		_: string;
		npm_package_private: string;
		XDG_SESSION_CLASS: string;
		npm_config_registry: string;
		XDG_SESSION_ID: string;
		TERM: string;
		KITTY_PUBLIC_KEY: string;
		PROMPT_EOL_MARK: string;
		PATH: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		NODE: string;
		XDG_SESSION_PATH: string;
		XDG_RUNTIME_DIR: string;
		XDG_MENU_PREFIX: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		DESKTOP_STARTUP_ID: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		XMODIFIERS: string;
		npm_lifecycle_script: string;
		XDG_GREETER_DATA_DIR: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_package_dependencies__sanity_image_url: string;
		npm_lifecycle_event: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		KITTY_WINDOW_ID: string;
		npm_package_dependencies__sanity_client: string;
		XDG_VTNR: string;
		QT_IM_MODULE: string;
		PWD: string;
		npm_package_dependencies_svelte_preprocess: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		CLUTTER_IM_MODULE: string;
		XDG_CONFIG_DIRS: string;
		NVM_CD_FLAGS: string;
		VIRTUAL_ENV_DISABLE_PROMPT: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		I3SOCK: string;
		npm_package_scripts_preview: string;
		PNPM_HOME: string;
		npm_package_devDependencies_object_assign: string;
		npm_package_dependencies__types_object_assign: string;
		INIT_CWD: string;
		NODE_ENV: string;
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
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
