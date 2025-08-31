import { create } from 'zustand';

const balanceSheetQuizStore = create((set) => ({
  configuration: {
    shuffleQuestions: true,
    isHardMode: false,
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

export default balanceSheetQuizStore;
