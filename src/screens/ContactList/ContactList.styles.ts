import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: 22,
    height: 22,
  },
  nameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  companyName: {
    marginStart: 26,
    fontSize: 16,
    color: '#ccc',
  },
  item: {
    paddingHorizontal: 20,
    marginVertical: 18,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  header: {
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: '#f4f4f4',
    textTransform: 'uppercase',
    paddingStart: 12,
    paddingVertical: 8,
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
});
