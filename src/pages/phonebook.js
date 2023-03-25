import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.thunk';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Card } from '@chakra-ui/react';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts('arg'));
  }, [dispatch]);

  return (
    <Card
      display="flex"
      align="center"
      marginRight="auto"
      marginLeft="auto"
      padding="50px"
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Card>
  );
};
