import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { toggleTheme, setTheme, Theme } from '../store/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return {
    mode,
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
  };
};
