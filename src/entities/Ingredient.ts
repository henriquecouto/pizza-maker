export class Ingredient {
  name!: string;
  price!: number;

  constructor(props: Ingredient) {
    Object.assign(this, props);
  }
}
