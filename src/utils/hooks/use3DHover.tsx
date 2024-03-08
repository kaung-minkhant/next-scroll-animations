"use client";

import { useEffect, useState } from "react";

interface Props {
  ref: React.RefObject<HTMLDivElement>;
  scale: {
    x?: number;
    y?: number;
    z?: number;
  };
}

export default function use3DHover({
  ref,
  scale: { x = 0, y = 0, z = 0 },
}: Props) {
  const [coord, setCoord] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
      ref.current as HTMLDivElement;
    const { clientX, clientY } = e;
    const x = (clientX - offsetLeft - offsetWidth / 2) / offsetWidth; // normalization
    const y = (clientY - offsetTop - offsetHeight / 2) / offsetHeight;
    // console.log({ offsetWidth, offsetHeight, clientX, clientY, x, y });
    setCoord({
      x,
      y,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const { current } = ref;
    current?.addEventListener("mousemove", handleMouseMove);
    current?.addEventListener("mouseenter", handleMouseEnter);
    current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current?.removeEventListener("mousemove", handleMouseMove);
      current?.removeEventListener("mouseenter", handleMouseEnter);
      current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  const { x: xCoord, y: yCoord } = coord;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(500px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${zTransform}px)`;
  const transition = "all 0.2s linear";

  return {
    transform,
    transition,
  };
}
