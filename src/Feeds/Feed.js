/**
 * Created by will0 on 14/08/2017.
 */

import React from 'react';
import {Text, View} from 'react-native';
import EditButton from './EditButton';
import {Icon} from 'react-native-elements';

export default class Feed extends React.Component {
    render() {
    	const feedTime = new Date(this.props.timestamp).toLocaleTimeString();
        return (
			<View {...this.props} style={styles}>
				<Text style={{marginRight: 5}}>{feedTime.substr(0, feedTime.length - 3)}</Text>
				<Text style={{marginRight: 5}}>Made: {this.props.feedAmountAdded}</Text>
				<Text>Drunk: {this.props.feedAmountDrunk}</Text>
				{
					this.props.feedMedicine &&
					(<Icon name="favorite" color="red" style={iconStyles} />)
				}
				{
					this.props.feedSolids &&
					(<Icon name="cake" color="purple" style={iconStyles} />)
				}

				<EditButton {...this.props} style={editBtnStyles} />
			</View>
		);
    }
}

const styles = {
	alignItems: 'center',
	backgroundColor: '#fff',
	marginBottom: 10,
	padding: 20,
	flex: 1,
	flexDirection: 'row'
};

const iconStyles = {
	marginLeft: 5
}

const editBtnStyles = {
	position: 'absolute',
	right: 0
}