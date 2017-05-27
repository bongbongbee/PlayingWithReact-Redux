import React from 'react';
import { View, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => (
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            {platformSpecificSetup()}
            <Header headerText="Text Stack" />
            <LibraryList />
        </View>
    </Provider>
);

const platformSpecificSetup = () => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
};

export default App;
