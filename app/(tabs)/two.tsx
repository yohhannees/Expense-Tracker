import { StyleSheet } from 'react-native';

import ReportScreen from "../../components/ReportScreen";
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
       <ReportScreen></ReportScreen> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
