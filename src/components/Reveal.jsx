import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in a div that fades/slides in once it scrolls into view.
 * Replaces the old vanilla-JS IntersectionObserver + ".reveal"/".in" class stub.
 * Renders as a plain <div> with the same class name shape as before
 * (className="reveal" plus "in" once visible) so the existing CSS just works.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
