import React, { useState } from "react";
import { Box, Paper, Text, Button, Title } from "@mantine/core";
import { useAppShell } from "ui";
import { shuffle } from "src/utils";

const OPTIONS = [10, 5, 2, -1, -2];

export const CardPicker: React.FunctionComponent = () => {
  const [cards, setCards] = useState<number[]>(shuffle(OPTIONS));
  const [played, setPlayed] = useState<number | null>(null);

  const { addToScore } = useAppShell();

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title>Card Picker!!!</Title>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={`${card} - ${index}`}
            p={5}
            sx={{
              borderRadius: 15,
              height: 200,
              border: "5px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: played !== null ? (index === played ? "#ccc" : "#fff") : "#000",
            }}
            onClick={() => {
              setPlayed(index);
              addToScore(card);
            }}
          >
            {played !== null && <Text sx={{ fontSize: "40pt" }}>{card}</Text>}
          </Box>
        ))}
      </Box>
      {played !== null && (
        <Button
          mt="md"
          size="lg"
          fullWidth
          onClick={() => {
            setPlayed(null);
            setCards(shuffle(OPTIONS));
          }}
        >
          Play Again
        </Button>
      )}
    </Paper>
  );
};
