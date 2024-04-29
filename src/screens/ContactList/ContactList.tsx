import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './ContactList.styles';
import {Contact, RootStackParamList} from '../../shared/types';
import {buildContactSections} from '../../shared/utils';
import FastImage from 'react-native-fast-image';
import {FavoriteStar} from '../../shared/components/FavoriteStar';
import {LoadingScreen} from '../../shared/components/LoadingScreen';
import {Separator} from '../../shared/components/Separator';
import {useContactStore} from '../../shared/store/useContactStore';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactList'>;

export function ContactList({navigation}: Props) {
  const {contacts, setContacts} = useContactStore();
  const [loading, setLoading] = useState(false);

  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://s3.amazonaws.com/technical-challenge/v3/contacts.json',
      );
      const results: Contact[] = await response.json();
      setContacts(results);
    } catch (e) {
      console.error('error fetching contacts', e);
    } finally {
      setLoading(false);
    }
  }, [setContacts]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {contacts && (
        <SectionList
          sections={buildContactSections(contacts)}
          keyExtractor={(contact, i) => contact.id + i}
          renderItem={({item: contact}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate('ContactDetail', {contactId: contact.id})
              }>
              <FastImage
                style={styles.image}
                source={{
                  uri: contact.smallImageURL,
                  priority: FastImage.priority.normal,
                }}
                defaultSource={require('../../../assets/images/user_small.png')}
              />
              <View>
                <View style={styles.nameWrapper}>
                  <View style={styles.imageWrapper}>
                    {contact.isFavorite && <FavoriteStar />}
                  </View>

                  <Text style={styles.title}>{contact.name}</Text>
                </View>
                <Text style={styles.companyName}>{contact.companyName}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          // eslint-disable-next-line react/no-unstable-nested-components
          ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </SafeAreaView>
  );
}
