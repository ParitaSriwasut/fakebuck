import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function useDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownEl = useRef(null);

  useEffect(() => {
    // console.log("effect", dropDownEl);
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { dropDownEl, isOpen, setIsOpen };
}

export default useDropDown;
