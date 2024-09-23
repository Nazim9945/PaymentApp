"use client";



interface ButtonProps {

  title:string,
  onclick:()=>void
}

export const Button = ({ onclick, title }: ButtonProps) => {
  return (
    <button
      onClick={()=>onclick()}
      className="bg-red-800 text-blue-900 p-2 text-xl rounded-md shadow-lg">
        {title}
      </button>
  );
};
