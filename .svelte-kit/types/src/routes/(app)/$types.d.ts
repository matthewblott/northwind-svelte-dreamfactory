import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/(app)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(app)" | "/(app)/categories" | "/(app)/categories/[id]" | "/(app)/categories/new" | "/(app)/customers" | "/(app)/customers/[id]" | "/(app)/customers/new" | "/(app)/employees" | "/(app)/employees/[id]" | "/(app)/employees/[id]/territories" | "/(app)/employees/[id]/territories/[id]" | "/(app)/employees/[id]/territories/new" | "/(app)/employees/new" | "/(app)/home" | "/(app)/orders" | "/(app)/orders/[id]" | "/(app)/orders/[id]/items" | "/(app)/orders/[id]/items/[id]" | "/(app)/orders/[id]/items/new" | "/(app)/orders/new" | "/(app)/products" | "/(app)/products/[id]" | "/(app)/products/new" | "/(app)/regions" | "/(app)/regions/[id]" | "/(app)/shippers" | "/(app)/shippers/[id]" | "/(app)/shippers/new" | "/(app)/suppliers" | "/(app)/suppliers/[id]" | "/(app)/suppliers/new" | "/(app)/territories" | "/(app)/territories/[id]" | "/(app)/territories/new"
type LayoutParams = RouteParams & { id?: string }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;