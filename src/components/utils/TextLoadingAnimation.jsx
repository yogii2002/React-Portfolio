import  { useState, useEffect } from 'react';
const TextLoadingAnimation = () => {
  const [size, setSize] = useState(20); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (prevSize >= 50) {
          clearInterval(interval);
          return prevSize;
        }
        return prevSize + 5; 
      });
    }, 200);
    return () => clearInterval(interval); 
  }, []);

  return (
        <div className='w-full h-full flex justify-center items-center mt-52 mx-auto  gap-2'> 
          <div  className=" transition-all duration-200 text-[#38d3f1]" style={{ fontSize: `${size}px` }} >
            &#123;
          </div>
          <div  className=" transition-all duration-200 " style={{ fontSize: `${size}px` }} >
            Yogesh Jat
          </div>
          <div  className=" transition-all duration-200 text-[#38d3f1]" style={{ fontSize: `${size}px` }} >
            &#125;
          </div>
        </div>

  );
};

export default TextLoadingAnimation;
