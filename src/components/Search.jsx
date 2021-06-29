function Search({ label = 'search', value, setValue, onSubmit, ...rest }) {
	return (
		<form onSubmit={onSubmit}>
			<label>
				<small>{label}</small>
				<input
					aria-label={label}
					{...rest}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
			<button>Find</button>
		</form>
	);
}

export default Search;
