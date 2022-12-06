import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';

interface DragDropGridContainerProps {
  id: string;
  children?: React.ReactNode;
  [restOfProps: string]: any;
}

export function DragDropGridContainer(props: DragDropGridContainerProps) {
  const { id, children, ...restOfProps } = props;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Droppable droppableId={id}>
      {(provided) => {
        return (
          <Grid
            container
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...restOfProps}
          >
            {children}
            {provided.placeholder}
          </Grid>
        );
      }}
    </Droppable>
  );
}
