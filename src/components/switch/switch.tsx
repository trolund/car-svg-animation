import styles from './switch.module.css';

export interface SwitchProps {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  lableColor?: string;
}

export function Switch({ value, onChange, label }: SwitchProps) {
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <p className={styles.label}>{label}</p>
        <input checked={value} value={Number(value)} type="checkbox" onChange={() => onChange(!value)} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
