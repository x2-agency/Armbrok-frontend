import type { DependencyList, JSX, ReactNode, RefObject } from 'react';

export type RemoveEventListener = (
	type: string,
	listener: (event: Event) => void,
	options?: {
		passive?: boolean;
		once?: boolean;
	}
) => void;

type NonEmptyArray<T> = [T, ...Array<T>];

interface ObservableElement<Value extends string> {
	ref: HTMLElement;
	value: Value;
}

export interface SingleObserverOptions<Value extends string> {
	attributeName: string;
	defaultValue: Value;
	triggerPosition?: number;
	offset?: number;
	offsetTop?: number;
	offsetBottom?: number;
}

export type MultiObserverOptions<Value extends string> = NonEmptyArray<
	SingleObserverOptions<Value>
>;

export interface SingleObserverContext<Value extends string> {
	current: {
		elements: Array<ObservableElement<Value>>;
		value: Value;
	};
}

export interface MultiObserverContext<Value extends string> {
	current: {
		elements: Array<ObservableElement<Value>>;
		value: Array<Value>;
	};
}

export interface ScrollIntersectionObserver<Value extends string> {
	useObserve: (value: Value) => { ref: RefObject<HTMLElement> };
	ScrollObserverProvider: (props: {
		children: ReactNode;
		deps?: DependencyList | undefined;
	}) => JSX.Element;
}
