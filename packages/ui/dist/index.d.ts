import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';
import React, { PropsWithChildren } from 'react';

declare type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};
declare const useAppShell: zustand.UseBoundStore<Omit<Omit<zustand.StoreApi<Store>, "setState"> & {
    setState(partial: Store | Partial<Store> | ((state: Store) => Store | Partial<Store>), replace?: boolean | undefined, actionType?: string | {
        type: unknown;
    } | undefined): void;
}, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<Store, Partial<Store>>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
    };
}>;

declare type AppShellProps = {
    title: string;
} & PropsWithChildren;
declare const Shell: React.FunctionComponent<AppShellProps>;

export { AppShellProps, Shell, useAppShell };
