const TodoFind = ({ onSearchChange, term }) => {
  const handleChange = (e) => {
    onSearchChange(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search..." onChange={handleChange} value={term} />
      </form>
    </div>
  );
};

export default TodoFind;
