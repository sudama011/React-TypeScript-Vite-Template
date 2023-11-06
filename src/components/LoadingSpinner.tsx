import { LuLoader2 } from "react-icons/lu";


export default function LoadingSpinner({
  text='',
  className='',
  size = 24,
  isLoading = true,
  icon = <LuLoader2 size={size} className="animate-spin" />,
}): JSX.Element {

  if (!isLoading) return <> </>;

  return (
    <div className={`flex justify-center items-center flex-col
    font-bold text-indigo-700 text-2xl
    dark:text-white
    ${className}`}>
      {icon}
      <div>
        {text}
      </div>
    </div>
  );
}