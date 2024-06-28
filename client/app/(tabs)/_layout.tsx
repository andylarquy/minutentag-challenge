import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const tabs = [
  {
    name: "index",
    options: {
      title: "Home",
      tabBarIcon: (iconStatus: { focused: boolean }) => (
        <TabBarIcon focused={iconStatus.focused} name="home" />
      ),
    },
  },
  {
    name: "list",
    options: {
      title: "List",
      tabBarIcon: (iconStatus: { focused: boolean }) => (
        <TabBarIcon focused={iconStatus.focused} name="list" />
      ),
    },
  },
  {
    name: "cart",
    options: {
      title: "Cart",
      tabBarIcon: (iconStatus: { focused: boolean }) => (
        <TabBarIcon focused={iconStatus.focused} name="bagNotification" />
      ),
    },
  },
  {
    name: "settings",
    options: {
      title: "Settings",
      tabBarIcon: (iconStatus: { focused: boolean }) => (
        <TabBarIcon focused={iconStatus.focused} name="settings" />
      ),
    },
  },
];

export const NAVBAR_HEIGHT = 72;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabs.map(({ name, options }) => (
        <Tabs.Screen key={name} name={name} options={options} />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: NAVBAR_HEIGHT,
    borderTopWidth: 0,
    elevation: 0,
    paddingHorizontal: 48,
  },
});
