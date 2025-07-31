export type RootStackParamList = {
  home: undefined;
  product: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
