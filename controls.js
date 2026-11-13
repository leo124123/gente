export function attachQuantumHudControls(state, onReset) {
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      state.paused = !state.paused;
    } else if (event.key.toLowerCase() === "r" && typeof onReset === "function") {
      onReset();
    } else if (event.key === "ArrowUp") {
      state.energy = Math.min(2.5, (state.energy ?? 1) + 0.15);
    } else if (event.key === "ArrowDown") {
      state.energy = Math.max(0.25, (state.energy ?? 1) - 0.15);
    }
  });
}
