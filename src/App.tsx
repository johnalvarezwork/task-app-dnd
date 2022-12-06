import './App.css';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Container, Paper } from '@mui/material';
import { DragDropContext } from './DragDropCoponents/DragDropContext.tsx';
import { DragDropGridContainer } from './DragDropCoponents/DragDropGridContainer.tsx';
import { DragDropGridItem } from './DragDropCoponents/DragDropGridItem.tsx';
import {
  getListData,
  getItemDataA,
  getItemDataB,
  getItemDataC,
} from './data.ts';

import Chance from 'chance';

const chance = new Chance();

const newLists: any[] = [];
const parentIdA = chance.guid();
const parentIdB = chance.guid();

const parentIdC = chance.guid();

newLists.push(getListData(parentIdA, 'A', getItemDataA(parentIdA)));
newLists.push(getListData(parentIdB, 'B', getItemDataB(parentIdB)));
newLists.push(getListData(parentIdC, 'C', getItemDataC(parentIdC)));

function App() {
  const [lists, setLists] = useState<any[]>(newLists);

  const updateEntity = (entity, reorder) => {
    const listsIndex = parseInt(entity.destination.droppableId.split('-')[1]);

    const newItems = reorder(
      lists[listsIndex].items,
      entity.source.index,
      entity.destination.index
    );

    const newLists = [...lists];

    newLists[listsIndex].items = newItems;

    setLists(newLists);
    // console.log('items', items ?? []);
  };

  return (
    <DragDropContext items={lists} updateItems={updateEntity}>
      <div className="App">
        <Container
          style={{
            margin: '3rem auto',
            background: 'gray',
            maxWidth: '25rem',
            padding: '2rem',
          }}
        >
          {lists.map((list, i) => {
            return (
              <Card
                key={`parent-${i}`}
                variant="elevation"
                elevation={10}
                sx={{
                  margin: '2rem 1rem',
                  background: 'gray',
                  maxWidth: '25rem',
                  paddingTop: '1rem',
                }}
              >
                <Typography variant="h4" color="text.secondary" gutterBottom>
                  {list.content}
                </Typography>
                <CardContent>
                  <DragDropGridContainer id={`parent-${i}`} spacing={2}>
                    {list.items.map((ele, index) => (
                      <DragDropGridItem key={ele.id} id={ele.id} index={index}>
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
            );
          })}
        </Container>
      </div>
    </DragDropContext>
  );
}

export default App;
