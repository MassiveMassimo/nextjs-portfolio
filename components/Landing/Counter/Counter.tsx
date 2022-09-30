import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const controls = animate(from, to, {

      duration: 5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        // fix TypeError: Cannot set properties of null (setting 'textContent')
        if (value && ref.current != null) ref.current.textContent = value.toFixed()
      },
    })
    return () => controls.stop()
  }, [from, to])

  return (
    <h2 ref={ref} />
  )
}
