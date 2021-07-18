import { SizeName } from './Size';

export class Pizza {
  name!: string;
  photo!: string;
  dough!: string;
  ingredients!: Array<string>;
  size!: SizeName;
  price!: number;
  score!: number;

  constructor(props: Pizza) {
    Object.assign(this, props);
  }
}
