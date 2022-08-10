import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Grid } from "@mui/material";
export interface GraphData {
  timePeriod: string;
  value: number;
  value2?: number;
}

export interface GraphProps {
  graphSource: GraphData[];
  showTicks: boolean;
  borderColorGraph1: string;
  borderColorGraph2?: string;
  fillColorGraph1: string;
  fillColorGraph2?: string;
  showAxisLine: boolean;
  multiGraph: boolean;
}

const Graph = ({
  multiGraph,
  showAxisLine,
  fillColorGraph1,
  fillColorGraph2,
  borderColorGraph1,
  borderColorGraph2,
  graphSource,
  showTicks,
}: GraphProps) => {
  return (
    <Grid container display="flex" width="inherit" height="inherit">
      <Grid item xs marginY={1} marginRight={1}>
        <ResponsiveContainer
          maxHeight={200}
          minHeight={100}
          minWidth={100}
          height="100%"
          width="100%"
        >
          <AreaChart
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            data={graphSource}
          >
            <XAxis
              tick={showTicks}
              axisLine={showAxisLine}
              dataKey={"timePeriod"}
            />
            <YAxis tick={{fill:'white'}} axisLine={showAxisLine} tickLine={false} />
            <Tooltip />
            {showAxisLine && showTicks ? (
              <CartesianGrid vertical={false} horizontal={true} strokeDasharray={"10 13"} />
            ) : (
              ""
            )}
            <Area
              type="monotone"
              dataKey={"value"}
              stroke={borderColorGraph1}
              fill={fillColorGraph1}
            />
            {multiGraph ? (
              <Area
                type="monotone"
                dataKey={"value2"}
                stroke={borderColorGraph2}
                fill={fillColorGraph2}
              />
            ) : (
              <></>
            )}
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default Graph;
