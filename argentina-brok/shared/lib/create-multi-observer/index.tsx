'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useRef } from 'react';

import type {
	MultiObserverContext,
	MultiObserverOptions,
	RemoveEventListener,
	ScrollIntersectionObserver,
} from '@/shared/types/observers';

export function createMultiObserver<Value extends string>(
	options: MultiObserverOptions<Value>
): ScrollIntersectionObserver<Value> {
	const defaultContext = {
		elements: [],
		value: options.map(option => option.defaultValue),
	};

	const context = createContext<MultiObserverContext<Value>>({
		current: defaultContext,
	});

	return {
		useObserve(value) {
			const currentContext = useContext(context);
			const ref = useRef<HTMLElement>(null);

			useEffect(() => {
				if (ref.current) {
					currentContext.current.elements.push({ ref: ref.current, value });
				}

				return () => {
					currentContext.current.elements.filter(el => el.ref !== ref.current);
				};
			}, [currentContext, value]);

			return { ref };
		},

		ScrollObserverProvider({ children, deps = [] }) {
			const contextRef: MultiObserverContext<Value> = useRef(defaultContext);
			const pathname = usePathname();

			useEffect(() => {
				const actions = createActions(contextRef, options);

				actions.forEach(({ findNewValue, setValue }) => {
					setValue(findNewValue());
				});

				function handleScroll() {
					actions.forEach(({ findNewValue, setValue }, i) => {
						const newValue = findNewValue();

						if (newValue !== contextRef.current.value[i]) {
							setValue(newValue);
						}
					});
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
			}, [pathname, contextRef.current.elements, ...deps]);

			return <context.Provider value={contextRef}>{children}</context.Provider>;
		},
	};
}

function createActions<Value extends string>(
	context: MultiObserverContext<Value>,
	options: MultiObserverOptions<Value>
) {
	return options.map((option, i) => {
		const {
			attributeName,
			defaultValue,
			triggerPosition = 0,
			offset = 0,
			offsetTop = 0,
			offsetBottom = 0,
		} = option;

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
				context.current.value[i] = value;
				document.documentElement.setAttribute(attributeName, value);
			},
		};
	});
}
