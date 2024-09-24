"use client"
interface Props{
  onSet:(value:string)=>void,
  placeholder:string,
  title:string,
  required:boolean
}
export const Inputform = ({onSet,placeholder,title,required}:Props) => {
 
  return (
    <div>
      <label>
        <div>{title}:</div>
        <input
          onChange={e=>onSet(e.target.value)}
          className="border"
          type="text"
          placeholder={placeholder}
         required={required}
        />
      </label>
    </div>
  );
};
