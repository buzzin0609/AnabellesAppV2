import React from 'react';
import {Button} from 'react-native-elements';
import navigation,{ StackNavigator } from 'react-navigation';
import AddFeedView from './AddFeed/AddFeedView';
import FeedsView from './Feeds/FeedsView';
import styleVariables from './shared/styleVariables';
import events from './shared/events';
import timeout from './shared/timeout';



async function latestFeedCheck() {
    await timeout(60000);
	events().emit('check-latest-feed');
    latestFeedCheck();
}

latestFeedCheck();

const App = StackNavigator({
    AddFeed: { screen: AddFeedView },
    Feeds: { screen: FeedsView }
}, {
    initialRouteName: 'Feeds',
    navigationOptions : ({navigation}) => {
		return {
			title: `Anabelle's App`,
            headerStyle: styles,
            headerMode: 'float',
			headerRight: (<Button
                backgroundColor="transparent"
                onPress={() => navigation.navigate('Feeds')}
                title="Feeds"
                buttonStyle={{marginRight: -10, marginTop: 3}}
            />),
			headerLeft: null,
			headerTintColor: '#fff'
		}
    }
});

const styles = {
    backgroundColor: styleVariables.colors.blue
}


export default App;