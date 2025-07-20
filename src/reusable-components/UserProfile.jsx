import  cn  from "../utilities/cn";

const UserProfile = ({ showEmail = true, className = "" }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/avatar.svg"
        alt="avatar"
      />
      <div className="flex flex-col text-mid-gray-text  leading-tight">
        <span className="font-bold text-base">Usman Zafar</span>
        {showEmail && (
          <span className="text-sm font-medium">usmanzafar@gmail.com</span>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
