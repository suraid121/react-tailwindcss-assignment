import cn from '../utilities/cn.js';

function Button({ className, title , ButtonFun }) {
  return (
    <button 
      onClick={ButtonFun}
      className={cn(
        'px-8 py-3 rounded-md bg-orange-primary w-35 text-white font-medium text-base  whitespace-nowrap shadow-sm hover:bg-[#fb851f] transition cursor-pointer',
        className
      )}
    >
      {title}
    </button>
  );
}

export default Button;
