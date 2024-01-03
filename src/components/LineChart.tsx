import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import { Box, useTheme } from "@mui/material";

const LineChart = ({ height }: { height: string }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "7px",
        height: height,
        width: "100%",
      }}
    >
      <ResponsiveLine
        data={data}
        // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        // colors={{
        //   scheme: "dark2",
        // }}
        // theme={{
        //   axis: {
        //     ticks: {
        //       text: { fill: theme.palette.mode == "dark" ? "white" : "black" },
        //     },
        //     legend: {
        //       text: { fill: theme.palette.mode == "dark" ? "white" : "black" },
        //     },
        //     domain: {
        //       line: {
        //         stroke: theme.palette.mode == "dark" ? "white" : "black",
        //       },
        //     },
        //   },
        //   grid: {
        //     line: {
        //       stroke: "gray",
        //       strokeWidth: ".5px",
        //     },
        //   },
        //   legends: {
        //     text: {
        //       fill: theme.palette.mode == "dark" ? "white" : "black",
        //     },
        //   },
        // }}
        xScale={{ type: "point" }}
        tooltip={(e) => (
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#333",
              }}
            >
              x: {e.point.data.xFormatted}
            </span>
            <span
              style={{
                color: "#333",
              }}
            >
              y: {e.point.data.yFormatted}
            </span>
          </Box>
        )}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        // enableArea={true}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 10,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            // itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
