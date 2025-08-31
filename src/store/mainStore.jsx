import { create } from 'zustand';

const mainStore = create((set) => ({
  configuration: {
    hasSeenLandingConfetti: false,
  },
  setConfiguration: (setting) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        ...setting,
      },
    })),
}));

export default mainStore;
