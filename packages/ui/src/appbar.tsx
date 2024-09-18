"use client"
interface Props{
  isLoggedIn:string
  onSignIn:any,
  onSignOut:any
}
export const Appbar = ({isLoggedIn,onSignIn,onSignOut}:Props) => {
  return (
    <div className="flex justify-between items-center p-2 border-b text-xl">
      <div>Payment</div>
      <div className="flex justify-between items-center">
        <button
          onClick={isLoggedIn === "unauthenticated" ? onSignIn : onSignOut}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
        >
          {isLoggedIn === "unauthenticated" ? "Log in" : "Logout"}
        </button>
      </div>
    </div>
  );
};
