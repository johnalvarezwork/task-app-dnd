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
  {
    id: `id-${chance.guid()}`,
    content: 'Item 1',
    color: 'white',
    bgColor: 'darkred',
  },
  {
    id: `id-${chance.guid()}`,
    content: 'Item 2',
    color: 'white',
    bgColor: 'green',
  },
  {
    id: `id-${chance.guid()}`,
    content: 'Item 3',
    color: 'white',
    bgColor: '#00008B',
  },
  {
    id: `id-${chance.guid()}`,
    content: 'Item 4',
    color: 'black',
    bgColor: '#CCCC00',
  },
];

const Item = ({ i, data }) => (
  <Draggable draggableId={`${data.id}`} index={i}>
    {(provided) => (
      <Grid
        item
        xs={12}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Paper elevation={8}>
          <Typography
            fontWeight="bold"
            fontSize={'20pt'}
            gutterBottom
            color={data.color}
            bgcolor={data.bgColor}
          >
            {data.content}
          </Typography>
        </Paper>
      </Grid>
    )}
  </Draggable>
);

const DropItem = ({ list }) => {
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
          {list.map((ele, i) => (
            <Item key={ele.id} data={ele} i={i} />
          ))}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
};

function App() {
  const [state, setState] = useState<any[]>(arr);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const newTasks = reorder(
      state,
      result.source.index,
      result.destination.index
    );

    setState(newTasks);
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
              Item List
            </Typography>
            <CardContent>
              <DropItem list={state} />
            </CardContent>
          </Card>
        </Container>
      </div>
    </DragDropContext>
  );
}

export default App;
