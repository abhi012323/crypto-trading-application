import { useEffect, useState } from "react";
import { GraphData } from "../../molecules/graph";

export const useSum=(graphSource:GraphData[])=>{
    let [sum, setSum] = useState<number[]>([0, 0]);
    useEffect(() => {
      for (let i of graphSource) {
        setSum((prev) => {
          console.log(i)
          return [prev[0] + i.value, prev[1] + i.value2!];
        });
      }
    }, [graphSource]);
    return sum;
}