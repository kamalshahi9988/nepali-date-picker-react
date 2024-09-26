export default function Dropdown({ title, options, type, val, setCal }) {
  return (
    <div className="dropdown">
      <span className={`${type} title`}>
        {val ? `${title}: ${val}` : title}
      </span>
      <div className="dropdown-content">
        {options &&
          options.map(({ label, value }, index) => {
            return (
              <button
                key={index}
                onClick={() => setCal(value)}
                className={`btn ${type} ${val == value ? "active-btn" : ""}`}
              >
                <span>{label}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
}
