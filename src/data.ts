import Chance from 'chance';

const chance = new Chance();

export const data = [
  {
    type: 'child',
    id: `id-${chance.guid()}`,
    content: 'Item A 1',
    color: 'white',
    bgColor: 'darkred',
  },
  {
    type: 'child',
    id: `id-${chance.guid()}`,
    content: 'Item A 2',
    color: 'white',
    bgColor: 'green',
  },
  {
    type: 'child',
    id: `id-${chance.guid()}`,
    content: 'Item A 3',
    color: 'white',
    bgColor: '#00008B',
  },
  {
    type: 'child',
    id: `id-${chance.guid()}`,
    content: 'Item A 4',
    color: 'black',
    bgColor: '#CCCC00',
  },
];

export const getItemDataA = (parentId: string): any[] => [
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item A 1',
    color: 'white',
    bgColor: 'darkred',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item A 2',
    color: 'white',
    bgColor: 'green',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item A 3',
    color: 'white',
    bgColor: '#00008B',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item A 4',
    color: 'black',
    bgColor: '#CCCC00',
  },
];

export const getItemDataB = (parentId: string): any[] => [
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item B 1',
    color: 'white',
    bgColor: 'darkred',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item B 2',
    color: 'white',
    bgColor: 'green',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item B 3',
    color: 'white',
    bgColor: '#00008B',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item B 4',
    color: 'black',
    bgColor: '#CCCC00',
  },
];

export const getItemDataC = (parentId: string): any[] => [
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item C 1',
    color: 'white',
    bgColor: 'darkred',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item C 2',
    color: 'white',
    bgColor: 'green',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item C 3',
    color: 'white',
    bgColor: '#00008B',
  },
  {
    type: 'child',
    id: `child-${chance.guid()}`,
    parentId: `parent-${parentId}`,
    content: 'Item C 4',
    color: 'black',
    bgColor: '#CCCC00',
  },
];

export const getListData = (id: string, parent: string, items: any[]) => ({
  type: 'parent',
  id: `parent-${id}`,
  content: `List ${parent}`,
  items,
});
