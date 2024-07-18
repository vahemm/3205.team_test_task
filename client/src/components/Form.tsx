import { FunctionComponent, useState } from 'react';
import MaskedInput from 'react-text-mask';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { find } from '../store/slices/userSlice';

interface Props {}

const Form: FunctionComponent<Props> = () => {
  const error = useAppSelector((state) => state.users.error);

  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleFindClick = (e: any) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    dispatch(
      find({
        email,
        number: number ? +number.replaceAll('-', '') : undefined,
      }),
    );
  };

  const validateEmail = (email: string): boolean => {
    // Simple email validation using regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError && validateEmail(e.target.value)) {
      setEmailError('');
    }
  };

  const handleOnblur = () => {
    if(email === ''){
        return
    }
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
  };

  return (
    <div className="container">
      <h2>Find User Form</h2>
      <form onSubmit={handleFindClick}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleOnblur}
          placeholder='example@domain.com'
          required
        />
        {emailError && <p className="error">{emailError}</p>}
        <label>Number:</label>
        <MaskedInput
          mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
          guide={false}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="12-34-56"
        />
        <button type="submit">Submit</button>
        {error && <p className="submit-error">{error}</p>}
      </form>
    </div>
  );
};

export default Form;
