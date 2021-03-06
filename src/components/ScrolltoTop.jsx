import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function GoToTop() {
  const routePath = useLocation();
  const onTop = async() => {
    setTimeout(() => {
      
    }, 1000);
    window.scrollTo(0, 0);
    // window.screenTop = 0;
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return null;
}