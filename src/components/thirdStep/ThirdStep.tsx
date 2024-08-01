import { Button } from '../button/Button';
import { useCorporateEventsStore } from '../store/store';
import styles from './ThirdStep.module.scss';

export const ThirdStep = () => {
  const thirdStep = useCorporateEventsStore((state) => state.thirdStep);
  const setThirdStep = useCorporateEventsStore((state) => state.setThirdStep);
  const setCurrentStep = useCorporateEventsStore(
    (state) => state.setCurrentStep
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setThirdStep(+e.target.value);
  };

  const handleContinue: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (thirdStep === null) {
      return;
    } else {
      setCurrentStep(4);
    }
  };

  return (
    <div className={styles.thirdStepWrapper}>
      <div className={styles.header}>Введите количество сотрудников</div>
      <input
        onChange={handleInputChange}
        className={styles.input}
        type='number'
      />
      <Button onClick={handleContinue} />
    </div>
  );
};
