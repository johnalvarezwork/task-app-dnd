import './App.css';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const onDragEnd = (result) => {
    // TODO: reorder our column
  };

  const getListItems = (count) => {
    const list: any[] = [];
    for (let i = 0; i < count; i++) {
      list.push(
        <Grid item xs={12}>
          <Paper elevation={8}>
            <Typography color="text.secondary" gutterBottom>
              Task {i + 1}
            </Typography>
          </Paper>
        </Grid>
      );
    }
    return <>{list}</>;
  };

  return (
    <div className="App">
      <Container>
        <Card
          variant="elevation"
          elevation={10}
          sx={{
            margin: '3rem auto',
            background: 'gray',
            maxWidth: '25rem',
            paddingTop: '1rem',
          }}
        >
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Task List
          </Typography>
          <CardContent>
            <Grid container spacing={2}>
              {getListItems(4)}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
