



const LoadingDots = () => {
  let circleCommonClasses = "h-1.5 w-1.5 bg-current rounded-full";


  
  return (
    <div className="flex text-slate-400">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce duration-75`}></div>
      <div className={`${circleCommonClasses} animate-bounce duration-100`}></div>
    </div>
  );
};

export default LoadingDots;
