/**
 * Created by Will Busby on 17/08/2017.
 * Description:
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import events from '../shared/events';
import {prepareFeed} from '../Feeds/FeedData';


export default class EditButton extends React.Component {
	render() {
		return (
			<View style={StyleSheet.flatten([styles, this.props.style || {}])}>
				<Button
					iconRight
					backgroundColor="transparent"
					color="green"
					title="Edit"
					icon={{name: 'add', color: 'green'}}
					onPress={() => events().emit('modal', prepareFeed(this.props))}
				/>
			</View>
		);
	}
}

const styles = {
	alignItems: 'center',
	flex: 1,
	flexDirection: 'row'
}
