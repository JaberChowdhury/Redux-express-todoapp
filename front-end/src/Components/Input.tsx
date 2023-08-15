import React from "react";

export default function Input() {
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };
  const handleDescruption = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    console.log(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    console.log(event);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-4/5 p-2 rounded bg-teal-300 shadow-md flex justify-center items-center flex-col relative gap-2"
    >
      <div className="w-full flex justify-center flex-col relative my-1">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTitle}
          className="w-full p-2 min-h-24 rounded"
          type="text"
          value=""
          name="title"
          placeholder="Type title here"
          required
        />
      </div>
      <div className="w-full flex justify-center flex-col relative my-1">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleDescruption}
          className="w-full p-2 min-h-[80px] max-h-[80px] rounded"
          value=""
          name="description"
          placeholder="Type title here"
          required
        ></textarea>
      </div>

      <button
        onClick={handleClick}
        className="px-6 p-1 bg-gray-400 shadow-md active:shadow-none rounded font-bold"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
