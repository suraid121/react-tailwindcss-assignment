import cn from '../utilities/cn.js'

function Button({ className , children }) {
    return (
        <button
            className={cn(
                    'px-8 py-2.5  rounded-md bg-primary text-white font-medium ' , className
            )}
        >
            {children}
        </button>
    );
}
export default Button



