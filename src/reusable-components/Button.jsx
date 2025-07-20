import cn from '../utilities/cn.js';

function Button({ className, title }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md bg-orange-primary text-white font-medium text-sm whitespace-nowrap shadow-sm hover:bg-[#fb851f] transition cursor-pointer',
        className
      )}
    >
      {title}
    </button>
  );
}

export default Button;
