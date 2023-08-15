const Loading = () => {
  const data: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
  ];
  return (
    <div className="w-full flex justify-center items-center flex-wrap relative gap-2">
      {data?.map((d, i) => {
        return (
          <div
            key={d + i}
            className="w-[45%] animateing-container p-2 text-[#E2E3E7] border-2 border-[#40474D] shadow-md rounded overflow-hidden flex justify-center flex-col relative"
          >
            <p className="text-[#181C1F] text-2xl my-1 mb-2">Basic redux</p>
            <p className="text-[#181C1F] text-xs font-medium">
              I have to complete Ba....
            </p>
            <p className="text-[#181C1F] text-xs mt-2 font-medium">
              8/12/2023, 12:30:32 AM
            </p>
            <div className="animateing-box"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
