import { create } from 'zustand';

interface CorporateEventsState {
  currentStep: number;
  setCurrentStep: (num: number) => void;

  firstStep: 'entertainment' | 'work' | null;
  setFirstStep: (type: 'entertainment' | 'work') => void;

  secondStep: number | null;
  secondStepError: boolean;
  setSecondStepError: (bool: boolean) => void;
  setSecondStep: (num: number) => void;

  thirdStep: number | null;
  setThirdStep: (num: number) => void;
}

export const useCorporateEventsStore = create<CorporateEventsState>()(
  (set) => ({
    currentStep: 1,
    setCurrentStep: (num) => set(() => ({ currentStep: num })),
    firstStep: null,
    setFirstStep: (type) => set(() => ({ firstStep: type })),
    secondStep: null,
    secondStepError: false,
    setSecondStepError: (bool) => set(() => ({ secondStepError: bool })),
    setSecondStep: (num) => set(() => ({ secondStep: num })),
    thirdStep: null,
    setThirdStep: (num) => set(() => ({ thirdStep: num })),
  })
);
