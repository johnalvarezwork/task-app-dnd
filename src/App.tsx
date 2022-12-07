import './App.css';
import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, Paper } from '@mui/material';
import { DragDropContext } from './DragDropCoponents/DragDropContext';
import { DragDropGridContainer } from './DragDropCoponents/DragDropGridContainer';
import { DragDropGridItem } from './DragDropCoponents/DragDropGridItem';
import { getListData, getItemDataA, getItemDataB, getItemDataC } from './data';

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
  const [type, setType] = useState('');

  const updateEntity = (entity: any, reorder: any) => {
    const entityType = entity.destination.droppableId.split('#')[0];
    const listsIndex = parseInt(entity.destination.droppableId.split('#')[1]);

    if (entityType === 'parent') {
      const newLists = reorder(
        lists,
        entity.source.index,
        entity.destination.index
      );

      setLists(newLists);
    }

    if (entityType === 'child') {
      const newItems = reorder(
        lists[listsIndex].items,
        entity.source.index,
        entity.destination.index
      );

      const newLists = [...lists];

      newLists[listsIndex].items = newItems;

      setLists(newLists);
    }
  };

  const onDragStart = (entity: any) => {
    setType(entity.draggableId.split('#')[0]);
  };

  return (
    <DragDropContext
      items={lists}
      updateItems={updateEntity}
      onDragStart={onDragStart}
    >
      <div className="App">
        <Container
          style={{
            margin: '3rem auto',
            background: 'gray',
            maxWidth: '25rem',
            padding: '2rem',
          }}
        >
          <DragDropGridContainer
            disabled={type === 'child' ? true : false}
            id={`parent#container`}
          >
            {lists.map((list, i) => {
              return (
                <DragDropGridItem
                  index={i}
                  id={`parent#item#${list.id}`}
                  key={`parent#item#${list.id}`}
                >
                  <Card
                    variant="elevation"
                    elevation={10}
                    sx={{
                      margin: '2rem 1rem',
                      background: 'gray',
                      maxWidth: '25rem',
                      paddingTop: '1rem',
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      gutterBottom
                    >
                      {list.content}
                    </Typography>
                    <CardContent>
                      <DragDropGridContainer
                        disabled={type === 'parent' ? true : false}
                        id={`child#${i}#container#${list.id}`}
                        spacing={2}
                      >
                        {list.items.map((ele: any, index: any) => (
                          <DragDropGridItem
                            key={`child#item#${ele.id}`}
                            id={`child#item#${ele.id}`}
                            index={index}
                          >
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
                </DragDropGridItem>
              );
            })}
          </DragDropGridContainer>
        </Container>
      </div>
    </DragDropContext>
  );
}

export default App;
