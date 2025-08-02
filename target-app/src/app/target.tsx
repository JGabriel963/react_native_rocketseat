import { View } from "react-native";
import React from "react";
import { PageHeader } from "./components/PageHeader";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { CurrencyInput } from "./components/CurrencyInput";

export default function Target() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
      }}
    >
      <PageHeader title="Meta" subtitle="Nova meta, amigão!" />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex.: Viagem praia, Celular Novo"
        />

        <CurrencyInput label="Valor alvo" value={0} />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
