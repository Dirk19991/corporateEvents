import { Button } from '../button/Button';
import { useCorporateEventsStore } from '../store/store';
import styles from './SecondStep.module.scss';

export const SecondStep = () => {
  const firstStep = useCorporateEventsStore((state) => state.firstStep);
  const secondStep = useCorporateEventsStore((state) => state.secondStep);
  const setSecondStep = useCorporateEventsStore((state) => state.setSecondStep);
  const secondStepError = useCorporateEventsStore(
    (state) => state.secondStepError
  );
  const setSecondStepError = useCorporateEventsStore(
    (state) => state.setSecondStepError
  );
  const setCurrentStep = useCorporateEventsStore(
    (state) => state.setCurrentStep
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSecondStep(+e.target.value);
  };

  const handleContinue: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (secondStep === null) {
      return;
    }
    if (
      (firstStep === 'entertainment' && secondStep > 5000) ||
      (firstStep === 'work' && secondStep > 8000)
    ) {
      setSecondStepError(true);
    } else {
      setSecondStepError(false);
      setCurrentStep(3);
    }
  };

  return (
    <div className={styles.secondStepWrapper}>
      <div className={styles.header}>
        Введите норму расходов на 1 сотрудника без НДС и транспортных расходов{' '}
        {firstStep === 'entertainment' && (
          <span>
            (для развлекательных мероприятий - не более{' '}
            <strong>5000 рублей</strong>)
          </span>
        )}
        {firstStep === 'work' && (
          <span>
            (для мероприятий производственной направленности - не более{' '}
            <strong>8000 рублей</strong>)
          </span>
        )}
      </div>
      <input
        onChange={handleInputChange}
        className={styles.input}
        type='number'
      />
      {secondStepError && (
        <div className={styles.error}>Сумма превышает лимит!</div>
      )}
      <Button onClick={handleContinue} />
    </div>
  );
};
