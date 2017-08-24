/**
 * Created by Will Busby on 17/08/2017.
 * Description:
 */

import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import dateUtils from '../dateUtils/dateUtils';
import vars from '../shared/styleVariables';

export default class FeedPagination extends React.Component {


	render() {
		const dayBefore = new Date(this.props.date);
		dayBefore.setDate(dayBefore.getDate() - 1);
		const dayAfter = new Date(this.props.date);
		dayAfter.setDate(dayAfter.getDate() + 1);
		const beforeText = dateUtils.dayText(dayBefore);

		return (
			<View style={styles}>
				<View style={btnWrapper}>
					<Button
						raised
						backgroundColor={vars.colors.blue}
						title={beforeText}
						onPress={this.paginate.bind(this, dayBefore)}
						buttonStyle={btnStyles}/>
				</View>

				{
					dateUtils.dayText(this.props.date) !== 'Today' &&
					(<View style={btnWrapper}>
						<Button
							raised
							backgroundColor={vars.colors.blue}
							title={dateUtils.dayText(dayAfter)}
							onPress={this.paginate.bind(this, dayAfter)}
							buttonStyle={btnStyles}/>
					</View>)
				}
			</View>
		)
	}

	paginate(day) {
		this.props.parent.changeDay(day);
	}

}

const styles = {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-around'
}

const btnWrapper = {
	flex: 0.5,
}

const btnStyles = {
	flex: 1
}