import React from 'react';
import { DragDropContext as DragAndDropContext } from 'react-beautiful-dnd';

interface DragDropContextProps {
  items: any[];
  updateItems: (entity: any, reorder: any) => void;
  children?: React.ReactNode;
  [restOfProps: string]: any;
}

export function DragDropContext(props: DragDropContextProps) {
  //gql query and mutation for state and setting state
  const { items, updateItems, children, ...restOFProps } = props;

  const reorder = (items: any, startIndex: number, endIndex: number) => {
    const newList = [...items];
    const [removed] = newList.splice(startIndex, 1);

    newList.splice(endIndex, 0, removed);

    return newList;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    //mutation in gql
    updateItems(result, reorder);
  };

  return (
    <DragAndDropContext onDragEnd={onDragEnd} {...restOFProps}>
      {children}
    </DragAndDropContext>
  );
}
