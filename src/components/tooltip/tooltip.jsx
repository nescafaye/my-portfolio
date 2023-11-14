import { useEffect, useRef } from 'react';
import CircleType from "circletype";

const Tooltip = ({ children }) => {

    const myElementRef = useRef(null);

    useEffect(() => {

    if (myElementRef.current) {

      const circleType = new CircleType(myElementRef.current);
      
      return () => {
        circleType.destroy();
      };
    }
}, []);

  return (
    <div ref={myElementRef} className=''>
      {children}
    </div>
  )
}

export default Tooltip