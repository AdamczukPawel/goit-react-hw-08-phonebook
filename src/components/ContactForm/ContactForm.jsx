import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts.thunk';
import { selectContacts } from 'redux/selectors';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === name.value)) {
      swal('Oops!', `${name.value} is already in contacts`, 'error');
      return;
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <>
      <Heading   className={css.title}>
        Phonebook
      </Heading>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              name="name"
              required
            />
          </FormControl>
          {/* <p className={css.label}>Name</p>
          <input
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            name="name"
            required
          /> */}
          <FormControl>
            <FormLabel>Number</FormLabel>
            <Input
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              name="number"
              required
            />
          </FormControl>

          <Button className={css.button} colorScheme="blue" type="submit">
            Add new contact
          </Button>
        </form>
      </div>
    </>
  );
};
