import { Box, Grid } from '@mui/material';
import './App.scss';
import Card from './Components/Card/Card';

export interface CardModel {
  name: string;
  content: string;
}

export function App() {

  let cards: CardModel[] = [
    {
      name: "Culpa similique",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem dignissimos consequatur ipsam nesciunt, delectus. Officiis."
    },
    {
      name: "Culpa similique",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem dignissimos consequatur ipsam nesciunt, delectus. Officiis."
    },
    {
      name: "Culpa similique",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem dignissimos consequatur ipsam nesciunt, delectus. Officiis."
    },
    {
      name: "Culpa similique",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem dignissimos consequatur ipsam nesciunt, delectus. Officiis."
    }
  ];

  let cardIterate: JSX.Element[] = cards.map((card: CardModel) => {
    return (
      <Grid item>
        <Card name={card.name} content={card.content}/>  
      </Grid>
    );
  });

  return (
    <Box className="App">
      <Box className="head"/>
      <Box id="app-head">
        <h1>
          This is a Card Heading
        </h1>
      </Box>
      <Grid container spacing={4} id="grid">
        {cardIterate}        
      </Grid>
      <Box className="foot"/>
    </Box>
  );
}
