/**
 * Created by will0 on 16/08/2017.
 */

export default function updateParent(Component, value) {
	const {parent, toUpdate} = Component.props;
	if (parent && toUpdate) {
		const newState = {};
		newState[toUpdate] = value;

		parent.setState(newState);
	}
}