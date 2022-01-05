const TodoFind = ({ onSearchChange, term }) => {
  const handleChange = (e) => {
    onSearchChange(e.currentTarget.value);
  };

  return (
    <div>
      <input placeholder="Search..." onChange={handleChange} value={term} />
    </div>
  );
};

export default TodoFind;
