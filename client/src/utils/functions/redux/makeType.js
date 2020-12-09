//with currying we are going to save boilerplate in action types creations
export const makeType = m => a => `${m}/${a}`;
