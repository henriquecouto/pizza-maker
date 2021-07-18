import * as yup from 'yup';

export const schema = yup.object().shape({
  dough: yup.string().required('Selecione um tipo de massa.'),
});

export const DEFAULT_VALUES = {
  dough: '',
};
