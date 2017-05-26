import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        console.log(this.props);

        return (
            <CardSection>
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 19,
        paddingLeft: 15
    }
};

/* connect(mapStateToProps, actions)
 * pass in null when you're not mapping any props */
export default connect(null, actions)(ListItem);
