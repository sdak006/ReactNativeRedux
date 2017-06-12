import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescrption() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        
        return (
            <TouchableWithoutFeedback 
                onPress={()=> this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescrption()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const selectLibraryAction = {
    type: '',
    payload: ''
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

//first arg = mapstatetoprops
export default connect(mapStateToProps, actions)(ListItem);