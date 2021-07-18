export type SizeName = 'P' | 'M' | 'G';

export class Size {
  name!: 'P' | 'M' | 'G';
  price!: number;

  constructor(props: Size) {
    Object.assign(this, props);
  }
}
