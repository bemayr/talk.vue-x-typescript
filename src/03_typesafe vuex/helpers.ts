import { Getter } from '@/store';
import { getStoreBuilder } from 'vuex-typex';

export function makeStore<TState>(name: string, initialState: TState) {
	const storeBuilder = getStoreBuilder<any>().module(name, initialState);

	return {
		// TODO: allow Mutation without arguments
		makeMutation: <T>(mutation: (state: TState, t: T) => void) => storeBuilder.commit(mutation),

		dispatchAction: <T extends (payload?) => void>(action: T): T =>
			(action.length === 0
				? storeBuilder.dispatch(() => action(), action.name)
				: (storeBuilder.dispatch((_, payload) => action(payload), action.name) as any)) as T,

		readFromState: <T>(action: Getter<TState, T>) => storeBuilder.read(action)
	};
}
