
import { useRef } from "react";

function Button() {

  const handleclick = (e) => e.target.textContent = "OUCH";
  //  const count = useRef(0);


  // const handleclick = (name) => {
  //   if (count.current < 3) {
  //     count.current++;
  //     console.log(`${name} Stop clicking me`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  // const handleclick = () => console.log("OUCH!");

  // const handleclick2 = (name) => console.log(`${name} Stop clicking me`);

  return(
    // <button onClick={() =>handleclick2("Bro")}>Click Me</button>

  //   <button onClick={() => handleclick("Bro")}>Click Me</button>
  // );
    <button onClick={(e) => handleclick(e)}>Click Me</button>
  );

}
export default Button