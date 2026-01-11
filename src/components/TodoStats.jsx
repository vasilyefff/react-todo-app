import styles from './TodoStats.module.css';

export default function TodoStats({ total, active, completed, onClear }) {

	return (
		<div className={styles.container}>
			<div className={styles.stats}>
				<div className={styles.statItem}>
					<span className={styles.statLabel}>Всего</span>
					<span className={styles.statValue}>{total}</span>
				</div>
				<div className={styles.statItem}>
					<span className={styles.statLabel}>Активные</span>
					<span className={styles.statValue}>{active}</span>
				</div>
				<div className={styles.statItem}>
					<span className={styles.statLabel}>Завершённые</span>
					<span className={styles.statValue}>{completed}</span>
				</div>
			</div>
			{completed > 0 && (
				<button onClick={onClear} className={styles.clearButton}>
					Очистить выполненные
				</button>
			)}
		</div>

	)
}