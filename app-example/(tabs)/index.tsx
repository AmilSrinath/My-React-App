import { Image, StyleSheet, Platform, Text } from 'react-native';
import {Redirect} from "expo-router";

export default function HomeScreen() {
  return (
    <Redirect href={"/home"} />
  );
}