export const AdminPageBtn = ({text, func, className, type }) => {
  return (
    <button
      className={className}
      onClick={() => func(type)}
    >
      {text}
    </button>
  );
};
