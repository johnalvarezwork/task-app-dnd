import Chance from 'chance';

const chance = new Chance();

export const data = [
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
