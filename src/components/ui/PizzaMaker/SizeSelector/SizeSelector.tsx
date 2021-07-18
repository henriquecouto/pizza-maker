import { Typography, Button, Radio, Icon } from 'components/kit';
import { useTheme } from 'styled-components';
import { usePizzaSizes } from 'useCases/pizza-sizes';
import { numberToMoney } from 'utils';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SizeName } from 'entities/Size';
import * as S from './SizeSelector.styles';
import { DEFAULT_VALUES } from './SizeSelector.validations';
import { usePizzaMaker } from 'hooks';
import routes from 'constants/routes';

enum PIZZA_SIZES {
  P = 100,
  M = 150,
  G = 250,
}

type SizeSelectorModel = {
  size: SizeName;
};

export const SizeSelector = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { sizes } = usePizzaSizes();
  const { change, state } = usePizzaMaker();
  const defaultValues = { ...DEFAULT_VALUES, size: state.size };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SizeSelectorModel>({
    defaultValues,
  });

  const onSubmit = (data: SizeSelectorModel) => {
    change(data);
    navigate(routes.finish);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.SizesContainer>
          {sizes?.map((size) => (
            <S.Size key={size.name}>
              <Radio
                {...register('size', {
                  value: defaultValues.size,
                })}
                id={size.name}
                name='size'
                value={size.name}
              />
              <Icon
                name='IcPizzaFull'
                size={PIZZA_SIZES[size.name]}
                color={theme.palette.info.main}
              />
              <Typography.H3 color='info'>
                {numberToMoney(size.price)}
              </Typography.H3>
            </S.Size>
          ))}
        </S.SizesContainer>
        <S.Footer>
          <Typography.Body>{errors.size?.message}</Typography.Body>
          <Button icon='IcCheck' type='submit'>
            concluir pedido
          </Button>
        </S.Footer>
      </S.Container>
    </form>
  );
};
