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
    <>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.container}>
        <p className={css.container__title}>Find contact by name</p>
        <input type="text" onChange={handleFilterChange} />
      </div>
    </>
  );
};
