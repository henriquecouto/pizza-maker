import { useForm } from 'react-hook-form';
import { Typography, Button, Radio } from 'components/kit';
import { usePizzaDoughs } from 'useCases';
import { numberToMoney } from 'utils';
import { usePizzaMaker } from 'hooks';
import { useNavigate } from 'react-router-dom';
import routes from 'constants/routes';
// eslint-disable-next-line no-restricted-imports
import { yupResolver } from '@hookform/resolvers/yup';

import * as S from './DoughSelector.styles';
import { DEFAULT_VALUES, schema } from './DoughSelector.validations';

type DoughSelectorModel = {
  dough: string;
};

export const DoughSelector = () => {
  const navigate = useNavigate();
  const { doughs } = usePizzaDoughs();
  const { change, state } = usePizzaMaker();
  const defaultValues = { ...DEFAULT_VALUES, dough: state.dough?.name };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DoughSelectorModel>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: DoughSelectorModel) => {
    change({ dough: doughs?.find((dough) => dough.name === data.dough) });
    navigate(routes.home.ingredients);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Grid>
          {doughs?.map((dough) => (
            <S.DoughContainer key={dough.name}>
              <S.DoughPhoto src={dough.photo} />
              <S.RadioWrapper>
                <Radio
                  {...register('dough', { value: defaultValues.dough })}
                  id={dough.name}
                  name='dough'
                  value={dough.name}
                />
              </S.RadioWrapper>
              <S.DoughDetails>
                <Typography.H3>{dough.name}</Typography.H3>
                <Typography.Body size={16}>{dough.description}</Typography.Body>
                <Typography.Body size={30} weight='bold' color='info'>
                  {numberToMoney(dough.price)}
                </Typography.Body>
              </S.DoughDetails>
            </S.DoughContainer>
          ))}
        </S.Grid>
        <S.Footer>
          <Typography.Body>{errors.dough?.message}</Typography.Body>
          <Button icon='IcChevronRight' type='submit'>
            montar meu pedido
          </Button>
        </S.Footer>
      </S.Container>
    </form>
  );
};
