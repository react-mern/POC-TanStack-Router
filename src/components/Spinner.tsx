import { BeatLoader } from "react-spinners";

export function Spinner() {
  return (
    <div
      className={`flex my-5 justify-center items-center `}
    >
      <BeatLoader color="red" />
    </div>
  );
}
