"use client"
interface Props{
  onSet:(value:string)=>void
}
export const Inputform = ({onSet}:Props) => {
 
  return (
    <div>
      <label>
        <div>Amount:</div>
        <input
          onChange={e=>onSet(e.target.value)}
          className="border"
          type="text"
          placeholder="For Ex. 100"
          required
        />
      </label>
    </div>
  );
};
