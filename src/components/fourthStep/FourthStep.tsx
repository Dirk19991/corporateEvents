import { Button } from '../button/Button';
import { useCorporateEventsStore } from '../store/store';
import styles from './FourthStep.module.scss';

export const FourthStep = () => {
  const secondStep = useCorporateEventsStore(
    (state) => state.secondStep
  ) as number;
  const thirdStep = useCorporateEventsStore(
    (state) => state.thirdStep
  ) as number;
  const setCurrentStep = useCorporateEventsStore(
    (state) => state.setCurrentStep
  );
  const handleContinue: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentStep(5);
  };

  const sum = secondStep * thirdStep;
  const formattedSum = sum.toLocaleString();
  return (
    <div className={styles.fourthStepWrapper}>
      <div className={styles.header}>
        Полная сумма ваших расходов составит{' '}
        <strong>{formattedSum} руб.</strong>
      </div>
      {sum > 1500000 && (
        <div>
          Поскольку сумма расходов составляет больше 1.5 млн. рублей, вам
          понадобится <strong>распорядительный документ</strong>, в котором
          должны быть указаны программа мероприятия, список участников
          мероприятия и совокупная смета расходов.
        </div>
      )}
      {sum < 1500000 && (
        <div>
          Поскольку сумма расходов составляет меньше 1.5 млн. рублей, вам
          понадобится <strong>служебная записка</strong>, в которой должны быть
          указаны программа мероприятия и совокупная смета расходов.
        </div>
      )}
      <Button onClick={handleContinue} text='OK' />
    </div>
  );
};
