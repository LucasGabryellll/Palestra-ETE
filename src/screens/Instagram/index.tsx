import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView } from "react-native";

import logo from "../../assets/logo_instagram.png";
import logoFacebook from "../../assets/logoFacebook.png";

export function ScreenInstagram() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={logo}
        height={120}
        width={160}
      />

      <View style={styles.caixaLogin}>
        <TextInput
          style={styles.input}
          placeholder="Telefone, nome de usuário ou email"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
        />

        <TouchableOpacity style={styles.estiloBotao}>
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "800" }}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={styles.caixaOU}>
          <View style={styles.linha} />

          <Text style={styles.textoOu}>OU</Text>

          <View style={styles.linha} />
        </View>
      </View>

      <View style={styles.caixaFinal}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
          <Image
            source={logoFacebook}
          />
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>Entrar com o Facebook</Text>
        </View>

        <TouchableOpacity>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.caixaCadastrar}>
          <Text>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#4199EE" }}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40
  },

  caixaLogin: {
    marginTop: 60,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    padding: 40,
  },

  input: {
    height: 50,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#FAFAFA",
    borderColor: "#DFDFDF",
    paddingLeft: 20,
    marginTop: 20
  },

  estiloBotao: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 60,
    backgroundColor: "#4199EE",
  },

  caixaOU: {
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: "row",
  },

  textoOu: {
    color: "#9F9F9F",
    marginHorizontal: 10,
  },

  linha: {
    height: 2,
    width: "100%",
    backgroundColor: "#DFDFDF"
  },

  caixaFinal: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20
  },

  caixaCadastrar: {
    flexDirection: "row",
    gap: 4,
    marginTop: 20
  }
});