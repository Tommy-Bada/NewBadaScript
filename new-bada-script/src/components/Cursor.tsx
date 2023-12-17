import "./Cursor.css";
import { useEffect } from "react";

export default function Cursor() {
  //   const [isProjectHovered, setIsProjectHovered] = useState(false);
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");
    // const firstTargetComponent =
    //   document.querySelectorAll<HTMLElement>(".project-section");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX - cursor.offsetWidth + "px";
        cursor.style.top = e.pageY - cursor.offsetHeight + "px";
      }
      //   setIsProjectHovered(
      //     Array.from(firstTargetComponent).some((element) => {
      //       const targetRect = element.getBoundingClientRect();
      //       return (
      //         e.pageX > targetRect.left &&
      //         e.pageX < targetRect.right &&
      //         e.pageY > targetRect.top &&
      //         e.pageY < targetRect.bottom
      //       );
      //     })
      //   );
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }),
    [];

  return <div className={`cursor default-cursor-style`}></div>;
}
