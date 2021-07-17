export class Pizza {
  name!: string;
  photo!: string;
  dough!: string;
  ingredients!: Array<string>;
  price!: number;
  score!: number;

  constructor(props: Pizza) {
    Object.assign(this, props);
  }
}
