"use client";
import Image from "next/image";
import { Flex, Box, Separator, Text, Container } from "@radix-ui/themes";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import TaskItem from "./features/todoToday/TaskItem/TaskItem";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export default function Home() {
  return (
    <Box
      style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
    >
      <Container size="3">
        <Flex direction="column" gap="2">
          <TaskItem></TaskItem>
          {/* <Text size="2">
            Dashboard - Track & Update today progress.
            <Separator my="3" size="4" />
            <Flex gap="3" align="center">
              <Box>
                <Doughnut data={data} />
                <Doughnut data={data} />
                <Doughnut data={data} />
              </Box>
            </Flex>
          </Text>
          <Box width="9" height="9"></Box> */}
        </Flex>
      </Container>
    </Box>
  );
}
