import { Button, CircularProgress } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const deleteSelectedContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && !error && (
        <CircularProgress
          className={css.loading}
          isIndeterminate
          color="blue.300"
        />
      )}
      {error && <b className={css.error}>{error}</b>}
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.element}>
            {contact.name}: {contact.number}
            <Button
              colorScheme="blue"
              size="sm"
              className={css.button}
              type="button"
              onClick={() => deleteSelectedContact(contact.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
