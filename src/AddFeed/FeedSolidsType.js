/**
 * Created by will0 on 16/08/2017.
 */

import React from 'react';
import {TextInput, View} from 'react-native';
import BoxHeader from '../box/BoxHeader';
import BoxContent from '../box/BoxContent';
import updateParent from '../shared/updateParent';
import styles from '../shared/elementStyles';

export default class FeedSolidsType extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

    render() {
        return (
			<View style={styles.box}>
				<BoxHeader title="Solid food type" />
				<BoxContent>
					<TextInput style={styles.input} onChangeText={this.onChangeText.bind(this)} value={this.state.value} />
				</BoxContent>
			</View>
		);
    }
	
	onChangeText(newText) {
		updateParent(this, newText);
		this.setState({ value: newText });
	}
	
}
