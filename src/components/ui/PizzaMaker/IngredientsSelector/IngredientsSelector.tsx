import { Typography, Checkbox, Button } from 'components/kit';
import { usePizzaIngredients } from 'useCases';
import { useForm } from 'react-hook-form';
import { numberToMoney } from 'utils';
import { usePizzaMaker } from 'hooks';
import { useNavigate } from 'react-router-dom';
import routes from 'constants/routes';
import * as S from './IngredientsSelector.styles';
import { Ingredient } from 'entities/Ingredient';

type IngredientsSelectorModel = {
  [x: string]: boolean;
};

export const IngredientsSelector = () => {
  const navigate = useNavigate();
  const { ingredients } = usePizzaIngredients();
  const { change, state } = usePizzaMaker();
  const defaultValues = {
    ...Object.fromEntries(
      state.ingredients?.map((ingredient) => [ingredient.name, true]) || []
    ),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IngredientsSelectorModel>({ defaultValues });

  const onSubmit = (data: IngredientsSelectorModel) => {
    change({
      ingredients: Object.entries(data)
        .filter((entry) => !!entry[1])
        .map(([key]) =>
          ingredients?.find((ig) => ig.name === key)
        ) as Array<Ingredient>,
    });
    navigate(routes.home.size);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.TableContainer>
          <S.Table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <Typography.H3>Nome</Typography.H3>
                </th>
                <th>
                  <Typography.H3>Preço</Typography.H3>
                </th>
              </tr>
            </thead>
            <tbody>
              {ingredients?.map((ingredient) => (
                <tr key={ingredient.name}>
                  <td>
                    <Checkbox
                      {...register(ingredient.name, {
                        value: defaultValues[ingredient.name],
                      })}
                      id={ingredient.name}
                      name={ingredient.name}
                    />
                  </td>
                  <td>
                    <Typography.Body>{ingredient.name}</Typography.Body>
                  </td>
                  <td>
                    <Typography.Body>
                      {numberToMoney(ingredient.price)}
                    </Typography.Body>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableContainer>
        <S.Footer>
          <Typography.Body>{errors.dough?.message}</Typography.Body>
          <Button icon='IcChevronRight' type='submit'>
            selecionar tamanho
          </Button>
        </S.Footer>
      </S.Container>
    </form>
  );
};
