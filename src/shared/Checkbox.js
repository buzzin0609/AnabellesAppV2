/**
 * Created by will0 on 16/08/2017.
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import {CheckBox} from 'react-native-elements';
import styles from '../shared/elementStyles';

export default class FeedCheckbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false
		}
	}

    render() {

		const style = {
			
		};

        return (
			<View style={style}>
				<CheckBox
					containerStyle={{flex: 1}}
					onPress={this.onPress.bind(this)}
					checked={this.state.checked}
					title={this.props.title}
				>
				</CheckBox>
			</View>

		);
    }

	onPress() {
		if (this.props.parent && this.props.toUpdate) {
			const newState = {};
			newState[this.props.toUpdate] = !this.state.checked;

			this.props.parent.setState(newState);
		}

		this.setState({
			checked: !this.state.checked
		});
	}
}
