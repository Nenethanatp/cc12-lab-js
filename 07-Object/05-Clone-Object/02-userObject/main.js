const state1 = { username: 'john', point: 100, loading: true };

state1modify = Object.assign(state1, { loading: false }, { success: true });
console.log(state1modify);
