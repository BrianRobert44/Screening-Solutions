import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-[999]
        h-12 w-12
        rounded-full
        bg-gradient-to-tr from-[#0B1F2A] to-[#2EC4B6]
        text-white
        shadow-lg shadow-black/30
        backdrop-blur-md
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        active:scale-95
      "
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTopButton;
