export default function SectionDivider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        padding: "0 16px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(179, 179, 179, 0.2)",
        }}
      />
      {children && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {children}
        </div>
      )}{" "}
    </div>
  );
}
