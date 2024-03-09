import React from "react";

interface Props {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}
function SectionLayout({ children, ref }: Props) {
  return (
    <section
      style={{
        padding: "5rem 10rem",
      }}
    >
      {children}
    </section>
  );
}

export default SectionLayout;
