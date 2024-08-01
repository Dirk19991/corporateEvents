import { Button } from '../button/Button';
import { useCorporateEventsStore } from '../store/store';
import styles from './FirstStep.module.scss';

export const FirstStep = () => {
  const firstStep = useCorporateEventsStore((state) => state.firstStep);
  const setFirstStep = useCorporateEventsStore((state) => state.setFirstStep);
  const setCurrentStep = useCorporateEventsStore(
    (state) => state.setCurrentStep
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFirstStep(e.target.value as 'entertainment' | 'work');
  };

  const handleContinue: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (firstStep === null) {
      return;
    } else {
      setCurrentStep(2);
    }
  };

  return (
    <div className={styles.firstStepWrapper}>
      <div className={styles.header}>
        Определите тип корпоративного мероприятия
      </div>
      <label className={styles.radioContainer}>
        <span>
          Мероприятия производственной направленности (норма на сотрудника не
          более <strong>8 тыс. руб.</strong>)
        </span>
        <input
          className={styles.radioInput}
          onChange={handleChange}
          type='radio'
          id='work'
          name='drone'
          value='work'
        />
        <span className={styles.customRadio}></span>
      </label>
      <label className={styles.radioContainer}>
        <span>
          Мероприятия развлекательного характера (норма на сотрудника не более{' '}
          <strong>5 тыс. руб.</strong>)
        </span>

        <input
          className={styles.radioInput}
          onChange={handleChange}
          type='radio'
          id='entertainment'
          name='drone'
          value='entertainment'
        />
        <span className={styles.customRadio}></span>
      </label>

      <Button onClick={handleContinue} />
    </div>
  );
};
