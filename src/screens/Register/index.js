import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import styles from './styles';

const Login = ({ navigation }) => {
  const handleRegister = () => {
    navigation.replace('Login');
  };

  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>WhisperApp</Text>
        <Text style={styles.subTitle}>O novo modo de fazer fofoca</Text>

        <Text style={styles.descriptionTitle}>CRIAR SUA CONTA</Text>
      </View>

      <Input placeholder="Seu nome" />
      <Input placeholder="Sua senha" secureTextEntry={true} />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginLabel}>Já tem conta? </Text>
        <TouchableOpacity onPress={handleLoginNavigation}>
          <Text style={styles.loginLinkText}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
