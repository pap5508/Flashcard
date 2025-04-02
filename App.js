import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import CustomCard from './components/CustomCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <CustomCard />
        <ActionCard />
        <View style={{ height: 100 }}></View>
        <ContactList />
      </ScrollView>
    </SafeAreaView >
  )
}

export default App;