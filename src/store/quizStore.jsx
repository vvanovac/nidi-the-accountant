import { create } from 'zustand';

const useQuizStore = create((set) => ({
  configuration: {
    shuffleQuestions: true,
    includeFixedAssets: true,
    includeCurrentAssets: true,
    includeEquity: true,
    includeNonCurrentLiabilities: true,
    includeCurrentLiabilities: true,
  },
  setConfiguration: (setting) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        ...setting,
      },
    })),
}));

export default useQuizStore;
