import { FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilterAction } from 'redux/filter/filter.slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filter = event.currentTarget.value;
    dispatch(setFilterAction(filter));
  };

  return (
    <div className={css.container}>
      <Heading as="h2" size="xl" className={css.title}>
        Contacts
      </Heading>
      <FormControl className={css.form}>
        <FormLabel className={css.container__title}>
          Find contact by name
        </FormLabel>
        <Input type="text" onChange={handleFilterChange} width="350px" />
      </FormControl>
    </div>
  );
};
