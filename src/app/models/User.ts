import {Address} from './Address';

export interface User {
  id: number;
  name: string;
  age: number;
  status: boolean;
  address: Address;
}
