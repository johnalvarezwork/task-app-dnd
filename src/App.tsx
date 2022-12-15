import './App.css';
import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, Paper } from '@mui/material';
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

  return (
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
                {list.items.map((ele: any, index: any) => (
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
                ))}
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
