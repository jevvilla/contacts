export type Contact = {
  id: string;
  name: string;
  companyName?: string | null;
  isFavorite: Boolean;
  smallImageURL: string;
  largeImageURL: string;
  emailAddress: string;
  birthdate: string;
  phone: {
    work?: string;
    home?: string;
    mobile?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
};

export type RootStackParamList = {
  ContactList: undefined;
  ContactDetail: {
    contactId: string;
  };
};

export type ContactSectionTitle = 'favorite contacts' | 'other contacts';

export type ContactSection = {
  title: ContactSectionTitle;
  data: Contact[];
};
