/**
 * Created by will0 on 15/08/2017.
 */

import vars from './styleVariables';
import {StyleSheet} from 'react-native';


export default StyleSheet.create({
	btnContainer: {
		alignItems: 'center',
		backgroundColor: vars.colors.blue,
		borderRadius: 5,
		height: 65,
		justifyContent: 'center',
		overflow: 'hidden',
		padding: 5
	},
	btnSpace: {
		marginTop: 10,
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50
	},
	btn: {
		color: '#fff',
		fontSize: 20
	},
	btnCircle: {
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: vars.colors.blue,
		height: 45,
		justifyContent: 'center',
		overflow: 'hidden',
		padding: 5,
		width: 45
	},
	btnCircleInner: {
		color: '#fff',
		fontSize: 14
	},
	rowBtnGroup: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 30,
		paddingTop: 10
	},
	box: {
		padding: 10	
	},
	boxHeader: {
		alignItems: 'center',
		backgroundColor: '#fff',
		borderBottomColor: vars.colors.ltGrey,
		borderBottomWidth: 1,
		justifyContent: 'center',
		padding: 10
	},
	boxTitle: {
		fontSize: 18
	},
	boxContent: {
		backgroundColor: '#fff',
		padding: 10,
		paddingTop: 20,
		paddingBottom: 20
	},
	inputWrapper: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		alignSelf: 'stretch',
		borderColor: 'transparent',
		borderWidth: 1,
		borderBottomColor: 'gray',
		padding: 5,
		textAlign: 'center'
	},
	textInput: {
		borderColor: 'gray',
		borderWidth: 1,
		padding: 5
	}
});
