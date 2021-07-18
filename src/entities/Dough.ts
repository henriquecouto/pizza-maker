export class Dough {
  name!: string;
  photo!: string;
  price!: number;
  description!: string;

  constructor(props: Dough) {
    Object.assign(this, props);
  }
}
