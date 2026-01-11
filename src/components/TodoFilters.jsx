import styles from './TodoFilters.module.css';

export default function TodoFilters({ filter, setFilter }) {

	return (
		<div className={styles.container}>
			<button 
				onClick={() => setFilter("all")}
				className={`${styles.button} ${filter === "all" ? styles.active : ''}`}
			>
				Все
			</button>

			<button 
				onClick={() => setFilter("active")}
				className={`${styles.button} ${filter === "active" ? styles.active : ''}`}
			>
				Активные
			</button>

			<button 
				onClick={() => setFilter("completed")}
				className={`${styles.button} ${filter === "completed" ? styles.active : ''}`}
			>
				Завершённые
			</button>
		</div>
	);
}
