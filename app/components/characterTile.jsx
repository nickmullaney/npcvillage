// components/CharacterTile.js
import { Card, CardContent, Typography } from '@mui/material';

function CharacterTile({ character }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
        {/* Add other character information */}
      </CardContent>
    </Card>
  );
}

export default CharacterTile;
