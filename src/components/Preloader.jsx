import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

function Preloader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress
        isIndeterminate
        color="black"
        size="120px"
        thickness="4px"
      />
    </div>
  );
}

export { Preloader };
