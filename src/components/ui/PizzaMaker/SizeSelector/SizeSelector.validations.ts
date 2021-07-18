import { SizeName } from 'entities/Size';
import * as yup from 'yup';

export const schema = yup.object().shape({
  size: yup.string().required('Selecione o tamanho da sua pizza.'),
});

export const DEFAULT_VALUES = {
  size: 'M' as SizeName,
};
