import Counter from "../Components/Counter";

export default function Counters() {
  return (
    <div className="basic-theme w-full min-h-screen flex justify-center items-center flex-col relative gap-2">
      <Counter />
      <Counter />
    </div>
  );
}
