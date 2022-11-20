import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Chance from 'chance';

const chance = new Chance();

const arr = [
  chance.guid(),
  chance.guid(),
  chance.guid(),
  chance.guid(),
  chance.guid(),
];

const Item = ({ i, data }) => (
  <Draggable draggableId={`${data}`} index={i}>
    {(provided) => (
      <Grid
        item
        xs={12}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Paper elevation={8}>
          <Typography color="text.secondary" gutterBottom>
            Task {i + 1}
          </Typography>
        </Paper>
      </Grid>
    )}
  </Draggable>
);

const DropItem = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId="droppable-1" type="PERSON">
      {(provided) => (
        <Grid
          container
          spacing={2}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {arr.map((ele, i) => (
            <Item key={`${ele}-key`} data={ele} i={i} />
          ))}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
};

function App() {
  const onDragEnd = (result) => {
    // TODO: reorder our column
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
              <DropItem />
            </CardContent>
          </Card>
        </Container>
      </div>
    </DragDropContext>
  );
}

export default App;
