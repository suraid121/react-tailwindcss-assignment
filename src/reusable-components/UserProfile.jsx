import  cn  from "../utilities/cn";

const UserProfile = ({ showEmail = true, className = "" }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/avatar.svg"
        alt="avatar"
        className="w-9 h-9 rounded-full bg-yellow-300 p-[2px]"
      />
      <div className="flex flex-col text-NavLinks leading-tight">
        <span className="font-bold text-base">Usman Zafar</span>
        {showEmail && (
          <span className="text-sm text-gray-500">usmanzafar@gmail.com</span>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
