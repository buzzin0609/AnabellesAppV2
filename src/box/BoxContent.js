/**
 * Created by will0 on 16/08/2017.
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import styles from '../shared/elementStyles';


export default class BoxContent extends React.Component {
    render() {
        return (
			<View style={StyleSheet.flatten([styles.boxContent, (this.props.style || {})])}>
				{this.props.children}
			</View>
		);
    }
}