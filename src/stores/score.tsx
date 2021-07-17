import { useLocalStorage } from 'hooks';
import { createContext, FC, useContext, useEffect, useState } from 'react';

const SCORE_KEY = 'score';

type IScoreContext = {
  score: number;
  add: (score: number) => void;
};

const ScoreContext = createContext<IScoreContext>({} as IScoreContext);

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider: FC = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const { set, get } = useLocalStorage();

  useEffect(() => {
    setScore(get(SCORE_KEY) || 0);
  }, []);

  const handleAdd = (value: number) => {
    setScore((old) => {
      const newScore = old + value;
      set(SCORE_KEY, newScore);
      return newScore;
    });
  };

  return (
    <ScoreContext.Provider value={{ score, add: handleAdd }}>
      {children}
    </ScoreContext.Provider>
  );
};
