import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Form",
          tabBarIcon: ({ color }) => <TabBarIcon name="edit" color={color} />,
          headerRight: () => (
            <>
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: "Cool Kids",
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
          headerRight: () => (
            <View style={styles.container}>
              <View style={styles.space}>
                <Link href="/Ruth" asChild>
                  <Pressable>{({ pressed }) => <Text>Ruth</Text>}</Pressable>
                </Link>
              </View>
              <View style={styles.space}>
                <Link href="/Yid" asChild>
                  <Pressable>{({ pressed }) => <Text>Yid</Text>}</Pressable>
                </Link>
              </View>
              <View style={styles.space}>
                <Link href="/Jossy" asChild>
                  <Pressable>{({ pressed }) => <Text>Jossy</Text>}</Pressable>
                </Link>
              </View>
              <View style={styles.space}>
                <Link href="/Yoda" asChild>
                  <Pressable>{({ pressed }) => <Text>Yoda</Text>}</Pressable>
                </Link>
              </View>
              <View style={styles.space}>
                <Link href="/JJ" asChild>
                  <Pressable>{({ pressed }) => <Text>JJ</Text>}</Pressable>
                </Link>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Notes"
        options={{
          title: "Notes",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="sticky-note" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
  
  },
  space: {
    padding: 8,
    marginRight: 2,
    marginLeft:5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
