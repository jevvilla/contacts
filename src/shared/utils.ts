import {Contact, ContactSection} from './types';

export function buildContactSections(data: Contact[]): ContactSection[] {
  const contactSections: ContactSection[] = [];

  const fav: ContactSection = {
    title: 'favorite contacts',
    data: [],
  };

  const other: ContactSection = {
    title: 'other contacts',
    data: [],
  };

  data.forEach(contact => {
    if (contact.isFavorite) {
      fav.data.push(contact);
    } else {
      other.data.push(contact);
    }
  });

  fav.data = sortByName(fav.data);
  other.data = sortByName(other.data);

  fav.data.length && contactSections.push(fav);
  other.data.length && contactSections.push(other);

  return contactSections;
}

function sortByName(contact: Contact[]) {
  return contact.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}
