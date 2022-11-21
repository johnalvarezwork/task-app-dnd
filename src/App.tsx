import './App.css';
import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, Paper } from '@mui/material';
import { DragDropContext } from './DragDropCoponents/DragDropContext.tsx';
import { DragDropGridContainer } from './DragDropCoponents/DragDropGridContainer.tsx';
import { DragDropGridItem } from './DragDropCoponents/DragDropGridItem.tsx';
import { data } from './data.ts';

function App() {
  const [items, setItems] = useState<any[]>(data);

  return (
    <DragDropContext items={items} updateItems={setItems}>
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
              <DragDropGridContainer spacing={2}>
                {items.map((ele, i) => (
                  <DragDropGridItem key={ele.id} id={ele.id} index={i}>
                    <Paper elevation={8}>
                      <Typography
                        fontWeight="bold"
                        fontSize={'20pt'}
                        gutterBottom
                        color={ele.color}
                        bgcolor={ele.bgColor}
                      >
                        {ele.content}
                      </Typography>
                    </Paper>
                  </DragDropGridItem>
                ))}
              </DragDropGridContainer>
            </CardContent>
          </Card>
        </Container>
      </div>
    </DragDropContext>
  );
}

export default App;
