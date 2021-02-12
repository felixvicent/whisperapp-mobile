import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import styles from './styles';

const Login = ({ navigation }) => {
  const handleTabNavigation = () => {
    navigation.replace('TabNavigation');
  };

  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>WhisperApp</Text>
        <Text style={styles.subTitle}>O novo modo de fazer fofoca</Text>

        <Text style={styles.descriptionTitle}>ENTRE COM SUA CONTA</Text>
      </View>

      <Input placeholder="Seu nome" />
      <Input placeholder="Sua senha" secureTextEntry={true} />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleTabNavigation}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerLabel}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={handleRegisterNavigation}>
          <Text style={styles.registerLinkText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
