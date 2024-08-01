import { useCorporateEventsStore } from '../store/store';
import styles from './Steps.module.scss';
import cn from 'classnames';

export const Steps = () => {
  const currentStep = useCorporateEventsStore((state) => state.currentStep);

  return (
    <div className={styles.steplist}>
      <div className={cn(styles.step, currentStep > 1 && styles.activeStep)}>
        1
      </div>
      <div
        className={cn(
          styles.horizontalLine,
          currentStep > 1 && styles.activeLine
        )}
      ></div>
      <div className={cn(styles.step, currentStep > 2 && styles.activeStep)}>
        2
      </div>
      <div
        className={cn(
          styles.horizontalLine,
          currentStep > 2 && styles.activeLine
        )}
      ></div>
      <div className={cn(styles.step, currentStep > 3 && styles.activeStep)}>
        3
      </div>
      <div
        className={cn(
          styles.horizontalLine,
          currentStep > 3 && styles.activeLine
        )}
      ></div>
      <div className={cn(styles.step, currentStep > 4 && styles.activeStep)}>
        4
      </div>
    </div>
  );
};
