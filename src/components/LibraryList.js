import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    /*note again: prop names are arbitrary*/
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

/*state is a global state object sitting
 * inside the redux store
 * the key name in the returning prop can be anything*/
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
