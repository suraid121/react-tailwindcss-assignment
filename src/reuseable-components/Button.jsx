import cn from '../utilities/cn'

function Button({ className , children }) {
    return (
        <button
            className={cn(
                    'px-8 py-2 mt-4 rounded-md bg-primary text-white' , className
            )}
        >
            {children}
        </button>
    );
}
export default Button



