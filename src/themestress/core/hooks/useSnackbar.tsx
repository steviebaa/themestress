import {useContext} from 'react';
import {SnackbarContext} from '../../components/Snackbar';

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
