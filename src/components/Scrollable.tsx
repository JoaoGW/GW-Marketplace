import { FlatList } from 'react-native';

export function Scrollable({ data }: { data: any[] }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <item.component {...item.props} />}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 5,
      }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    />
  );
}