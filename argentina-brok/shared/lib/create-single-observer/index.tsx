'use client';

import { createContext, useContext, useEffect, useRef } from 'react';

import type {
	RemoveEventListener,
	ScrollIntersectionObserver,
	SingleObserverContext,
	SingleObserverOptions,
} from '@/shared/types/observers';

export function createSingleObserver<Value extends string>(
	options: SingleObserverOptions<Value>
): ScrollIntersectionObserver<Value> {
	const defaultContext = {
		elements: [],
		value: options.defaultValue,
	};

	const context = createContext<SingleObserverContext<Value>>({
		current: defaultContext,
	});

	return {
		useObserve(value) {
			const currentContext = useContext(context);
			const ref = useRef<HTMLElement>(null);

			useEffect(() => {
				const elements = currentContext.current.elements;
				const node = ref.current;

				if (node) {
					elements.push({ ref: node, value });
				}

				return () => {
					const index = elements.findIndex(el => el.ref === node);
					if (index !== -1) {
						elements.splice(index, 1);
					}
				};
			}, [currentContext, value]);

			return { ref };
		},

		ScrollObserverProvider({ children, deps = [] }) {
			const contextRef: SingleObserverContext<Value> = useRef(defaultContext);

			useEffect(() => {
				const { findNewValue, setValue } = createActions(contextRef, options);

				setValue(findNewValue());

				function handleScroll() {
					const newValue = findNewValue();
					if (newValue !== contextRef.current.value) {
						setValue(newValue);
					}
				}

				window.addEventListener('scroll', handleScroll, { passive: true });
				return () => {
					(window.removeEventListener as RemoveEventListener)(
						'scroll',
						handleScroll,
						{ passive: true }
					);
				};
				// eslint-disable-next-line react-hooks/exhaustive-deps
			}, [contextRef.current.elements, ...deps]);

			return <context.Provider value={contextRef}>{children}</context.Provider>;
		},
	};
}

function createActions<Value extends string>(
	context: SingleObserverContext<Value>,
	{
		attributeName,
		defaultValue,
		triggerPosition = 0,
		offset = 0,
		offsetTop = 0,
		offsetBottom = 0,
	}: SingleObserverOptions<Value>
) {
	return {
		findNewValue() {
			const intersection = context.current.elements.find(el => {
				const topTrigger =
					window.innerHeight * triggerPosition + (offsetTop || offset);
				const bottomTrigger =
					window.innerHeight * triggerPosition + (offsetBottom || offset);

				const { top } = el.ref.getBoundingClientRect();

				const isTopCollision = top <= topTrigger;
				const isBottomCollision = top + el.ref.clientHeight >= bottomTrigger;

				return isTopCollision && isBottomCollision;
			});

			return intersection?.value ?? defaultValue;
		},

		setValue(value: Value) {
			context.current.value = value;
			document.documentElement.setAttribute(attributeName, value);
		},
	};
}
