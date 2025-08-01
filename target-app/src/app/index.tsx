import { View } from "react-native";
import HomeHeader from "./components/HomeHeader";
import { Target } from "./components/Target";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "-R$ 883,64" },
};

const targets = [
  {
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "900,00",
    target: "1.200,00",
  },
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HomeHeader data={summary} />

      <Target data={targets[0]} />
    </View>
  );
}
