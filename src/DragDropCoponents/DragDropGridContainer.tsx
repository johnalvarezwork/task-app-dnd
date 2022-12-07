import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';

interface DragDropGridContainerProps {
  disabled?: boolean;
  id: string;
  children?: React.ReactNode;
  [restOfProps: string]: any;
}

export function DragDropGridContainer(props: DragDropGridContainerProps) {
  const { id, children, disabled, ...restOfProps } = props;
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
    <Droppable isDropDisabled={disabled} droppableId={id}>
      {(provided: any) => {
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
