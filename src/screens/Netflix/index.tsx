import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import logo from "../../assets/logo_netflix.png";
import logoFacebook from "../../assets/logoFacebook.png";

export function ScreenNetflix() {

  function ativarAlerta() {
    Alert.alert("Aviso", "LOGADO NO SISTEMA, BEM VINDO");
  }

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        height={130}
        width={160}
        resizeMode='contain'
      />

      <Text style={styles.textoLogin}>LOGIN</Text>

      <View>
        <TextInput
          style={styles.estiloInput}
          placeholderTextColor={"#90918E"}
          placeholder='Email ou Número de Telefone'
        />

        <TextInput
          style={styles.estiloInput}
          placeholderTextColor={"#90918E"}
          placeholder='Senha'
        />

        <TouchableOpacity
          style={styles.botaoLogin}
          onPress={ativarAlerta}
        >
          <Text style={styles.textoBotaoLogin}>LOGIN</Text>
        </TouchableOpacity>


        <View style={styles.caixaAjudaELembrar}>
          <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
            <View style={styles.caixaLembrar} />
            <Text style={styles.textoSimples}>Lembrar-me</Text>
          </TouchableOpacity>

          <Text style={styles.textoSimples}>Ajuda?</Text>
        </View>

        <View style={styles.caixaFinal}>
          <TouchableOpacity style={{ alignItems: "center", flexDirection: "row", gap: 10 }}>
            <Image
              source={logoFacebook}
            />

            <Text style={styles.textoSecundario}>Login com Facebook</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textoSecundario}>Novo na Netflix? </Text>

            <TouchableOpacity>
              <Text style={styles.textoSimples}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "column",
    padding: 20
  },

  textoLogin: {
    fontWeight: "800",
    color: "#FFF",
    fontSize: 32,
    marginBottom: 20
  },

  estiloInput: {
    height: 50,
    width: "100%",
    backgroundColor: "#313131",
    borderRadius: 5,
    color: "#FFF",
    paddingLeft: 20,
    marginTop: 20
  },

  botaoLogin: {
    height: 50,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },

  textoBotaoLogin: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFF"
  },

  caixaAjudaELembrar: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  caixaLembrar: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#FFF"
  },

  textoSimples: {
    color: '#FFF'
  },

  textoSecundario: {
    color: "#90918E"
  },

  caixaFinal: {
    marginTop: 200,
    gap: 10
  }
});