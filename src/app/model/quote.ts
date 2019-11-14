import { Person } from './person';
import { Quoter } from './quoter';

export interface Quote {
  id: number;
  quotedPersons: Person[];
  quoter: Quoter;
  text: string
}
