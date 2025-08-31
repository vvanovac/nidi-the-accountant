import { create } from 'zustand';

const accountingTransactionsQuizStore = create((set) => ({
  configuration: {
    shuffleQuestions: true,
  },
  setConfiguration: (setting) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        ...setting,
      },
    })),
}));

export default accountingTransactionsQuizStore;
