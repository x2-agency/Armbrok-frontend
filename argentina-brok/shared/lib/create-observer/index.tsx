'use client';

import { createMultiObserver } from '@/shared/lib/create-multi-observer';
import { createSingleObserver } from '@/shared/lib/create-single-observer';
import type {
	MultiObserverOptions,
	SingleObserverOptions,
} from '@/shared/types/observers';

export function createObserver<Value extends string>(
	options: SingleObserverOptions<Value> | MultiObserverOptions<Value>
) {
	if (Array.isArray(options)) {
		return createMultiObserver(options);
	}

	return createSingleObserver(options);
}
