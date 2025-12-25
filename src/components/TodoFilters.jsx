function TodoFilters({ onFilterChange, currentFilter }) {
	const filters = [
		{ id: 'all', label: 'Все' },
		{ id: 'active', label: 'Активные' },
		{ id: 'completed', label: 'Выполненные' }
	];

	return (
		<div className="filters">
			{filters.map(filter => (
				<button
					key={filter.id}
					className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
					onClick={() => onFilterChange(filter.id)}
				>
					{filter.label}
				</button>
			))}
		</div>
	);
}

export default TodoFilters;
