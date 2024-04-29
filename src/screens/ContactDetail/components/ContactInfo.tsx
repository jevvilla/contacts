import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../../shared/components/Separator';

type Props = {
  title: string;
  info: string;
  rightLabel?: string;
};

export function ContactInfo({title, info, rightLabel}: Props) {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.info}>{info}</Text>
        </View>
        {rightLabel && <Text style={styles.label}>{rightLabel}</Text>}
      </View>
      <Separator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#aaa',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  info: {
    fontSize: 20,
    fontWeight: '400',
  },
  label: {
    color: '#aaa',
    fontSize: 16,
  },
});
