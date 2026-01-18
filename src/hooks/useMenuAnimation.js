import { useAnimate, stagger} from "framer-motion";
import { useEffect } from "react";

export function useMenuAnimation (isMenuOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isMenuOpen
      ? [
        ["nav", { transform: "translateX(0%)" }, {
          ease: [0.08, 0.65, 0.53, 0.96],
          duration: 0.6,
        }],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" },
        ],
      ]
      : [
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "-0.1" },
        ],
        ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
      ];

    animate(menuAnimations);
  }, [isMenuOpen]);

  return scope;
};