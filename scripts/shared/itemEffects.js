// Item multipliers (shared across survivors)
export const itemEffects = {
  crowbar: (stacks) => 1 + 0.75 * stacks,
  glasses: (stacks) => 1 + 0.01 * stacks,
  shapedglass: (stacks) => Math.pow(2, stacks),
};
