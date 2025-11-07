import { useState, useEffect } from "react";

function Timerdemo() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 0.000001);
    return () => clearInterval(interval); // cleanup
  }, []);

  return <h2>Time: {time}s</h2>;
}
export default Timerdemo;