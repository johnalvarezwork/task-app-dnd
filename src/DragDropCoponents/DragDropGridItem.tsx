import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Grid } from '@mui/material';

interface DragDropGridItemProps {
  id: string;
  index: number;
  children?: React.ReactNode;
  [restOfProps: string]: any;
}

export function DragDropGridItem(props: DragDropGridItemProps) {
  const { id, index, children, ...restOfProps } = props;
  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <Grid
          item
          xs={12}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          {...restOfProps}
        >
          {children}
        </Grid>
      )}
    </Draggable>
  );
}
