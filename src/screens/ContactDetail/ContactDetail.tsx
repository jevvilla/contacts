import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';

import {Contact, RootStackParamList} from '../../shared/types';
import {FavoriteStar} from '../../shared/components/FavoriteStar';
import {NoFavoriteStar} from '../../shared/components/NoFavoriteStar';
import {styles} from './ContactDetail.styles';
import {Separator} from '../../shared/components/Separator';
import {useContactStore} from '../../shared/store/useContactStore';
import {ContactInfo} from './components/ContactInfo';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactDetail'>;

export function ContactDetail({route, navigation}: Props) {
  const {contacts, setContacts} = useContactStore();
  const {contactId} = route.params;
  const [contact, setContact] = useState<Contact>();

  const onFavHandler = useCallback(
    (id: string) => {
      const currentContacts = [...contacts];

      const updatedContacts = currentContacts.map(cs => {
        if (cs.id === id) {
          cs.isFavorite = !cs.isFavorite;
        }

        return cs;
      });

      setContacts(updatedContacts);
    },

    [contacts, setContacts],
  );

  useEffect(() => {
    const selectedContact = contacts.find(c => c.id === contactId);
    setContact(selectedContact);
  }, [contacts, contactId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableOpacity onPress={() => onFavHandler(contactId)}>
          {contact?.isFavorite ? <FavoriteStar /> : <NoFavoriteStar />}
        </TouchableOpacity>
      ),
    });
  }, [navigation, contact, onFavHandler, contactId]);

  return (
    <ScrollView style={styles.scrollview}>
      {contact ? (
        <View>
          <View style={styles.container}>
            <FastImage
              style={styles.image}
              source={{
                uri: contact.smallImageURL,
                priority: FastImage.priority.normal,
              }}
              defaultSource={require('../../../assets/images/user_large.png')}
            />
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.small}>{contact.companyName}</Text>
          </View>
          <Separator />
          <View>
            {contact.phone.home && (
              <ContactInfo
                title="phone:"
                info={contact.phone.home}
                rightLabel="Home"
              />
            )}
            {contact.phone.mobile && (
              <ContactInfo
                title="phone:"
                info={contact.phone.mobile}
                rightLabel="Mobile"
              />
            )}
            {contact.phone.work && (
              <ContactInfo
                title="phone:"
                info={contact.phone.work}
                rightLabel="Work"
              />
            )}
            {contact.address && (
              <ContactInfo
                title="address:"
                info={`${contact.address.street} ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}, ${contact.address.country}`}
              />
            )}
            {contact.birthdate && (
              <ContactInfo title="birthdate:" info={contact.birthdate} />
            )}
            {contact.emailAddress && (
              <ContactInfo title="birthdate:" info={contact.emailAddress} />
            )}
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
}
