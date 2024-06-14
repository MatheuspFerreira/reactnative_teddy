import { Alert } from 'react-native';
import { handleApiError } from '../handleApiError';
import { AppError } from '../../appError';


jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

describe('handleApiError', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays AppError message', () => {
    const error = new AppError('Custom AppError Message');
    const title = 'Error Title';

    handleApiError({ error, title });

    expect(Alert.alert).toHaveBeenCalledWith(title, error.message, [{ text: 'OK' }]);
    expect(Alert.alert).toHaveBeenCalledTimes(1);
  });

  it('displays generic error message for non-AppError', () => {
    const error = { message: 'Generic error message' };
    const title = 'Error Title';

    handleApiError({ error, title });

    expect(Alert.alert).toHaveBeenCalledWith(title, 'Erro no servidor, tente novamente mais tarde.', [{ text: 'OK' }]);
    expect(Alert.alert).toHaveBeenCalledTimes(1);
  });
});
