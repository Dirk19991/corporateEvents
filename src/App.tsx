import { Header } from './components/header/Header';
import styles from './App.module.scss';
import { Steps } from './components/steps/Steps';
import { FirstStep } from './components/firstStep/FirstStep';
import { useCorporateEventsStore } from './components/store/store';
import { SecondStep } from './components/secondStep/SecondStep';
import { ThirdStep } from './components/thirdStep/ThirdStep';
import { FourthStep } from './components/fourthStep/FourthStep';
import { FifthStep } from './components/fifthStep/FifthStep';

function App() {
  const currentStep = useCorporateEventsStore((state) => state.currentStep);

  return (
    <div className={styles.appWrapper}>
      <Header />
      {currentStep === 1 && <FirstStep />}
      {currentStep === 2 && <SecondStep />}
      {currentStep === 3 && <ThirdStep />}
      {currentStep === 4 && <FourthStep />}
      {currentStep === 5 && <FifthStep />}
      <Steps />
    </div>
  );
}

export default App;
