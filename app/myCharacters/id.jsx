import { Title } from "@mui/icons-material";
import React from "react";

const MyCharacter = ({ match }) => {
  return (
    <div>
      <Title>My Character</Title>
      <div>My Character {match.params.id}</div>
    </div>
  )
}

export default MyCharacter;