/**
 * Created by will0 on 16/08/2017.
 */

import React from 'react';
import {View, Text} from 'react-native';
import styles from '../shared/elementStyles';


export default class BoxHeader extends React.Component {
    render() {
        return (
			<View style={styles.boxHeader}>
				<Text style={styles.boxTitle}>{this.props.title}</Text>
			</View>
		);
    }
}