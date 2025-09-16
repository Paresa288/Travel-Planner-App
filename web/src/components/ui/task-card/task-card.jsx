function TaskCard({ day }) {
  return (
    <div className="card w-25">
      <h2 className="card-header">{`Day ${day}`}</h2>
    </div>
  )
};

export default TaskCard;