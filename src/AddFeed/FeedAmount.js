/**
 * Created by will0 on 15/08/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import BoxHeader from '../box/BoxHeader';
import BoxContent from '../box/BoxContent';
import Button from 'react-native-button';
import styles from '../shared/elementStyles';


class AmountBtn extends React.Component {
	render() {
		return (
			<Button
				containerStyle={styles.btnCircle}
				style={styles.btnCircleInner}
				onPress={() => this.props.handleTextChange(this.props.amount)}>
				{this.props.amount}
			</Button>
		);
	}
}

export default class FeedAmount extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			amount: this.props.amount
		};
	}

    render() {
		const hasButtons = this.props.buttons && this.props.buttons.length
        return (
			<View style={styles.box}>
				<BoxHeader title={this.props.title || 'Feed Amount'}/>
				{ hasButtons && this.renderButtons() }
				<BoxContent style={styles.inputWrapper}>
					<TextInput 
						style={styles.input} 
						value={this.state.amount.toString()} 
						onChangeText={this.handleTextChange.bind(this)} 
						keyboardType="numeric" />
				</BoxContent>
			</View>
		);
    }
	
	renderButtons() {
		return (
			<View style={styles.rowBtnGroup}>
				{
					this.props.buttons.map(
						btn => <AmountBtn handleTextChange={this.handleTextChange.bind(this)} amount={btn} key={btn} />
					)
				}
			</View>
		);
	}

	handleTextChange(newText) {

		if (this.props.parent) {
			const newState = {};

			if (!this.props.toUpdate) {
				newState.feedAmountAdded = newText;
				newState.feedAmountDrunk = newText;
			} else {
				newState[this.props.toUpdate] = newText;
			}
			this.props.parent.setState(newState);
		}

		this.setState({
			amount: newText
		});
	}
}

FeedAmount.defaultProps = {
	amount: 0
};