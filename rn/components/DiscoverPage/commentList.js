/**
 * Created by invictus- on 2017/3/6.
 */
import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    ListView,
    Text,
    Image,
    TextInput
} from 'react-native'
import resources from '../../common/commonResourses'
import ParsedText from 'react-native-parsed-text'
const scaleX = resources.screen.scaleX;
const scaleY = resources.screen.scaleY;

class commentList extends Component {
    constructor() {
        super();
    }

    _handleNamePress = () => {

    };

    _handleContentPress = () => {

    };

    _renderStarList = (rowData, sectionID, rowID) => {
        return <View style={styles.starView}>
            <Text style={styles.nameText}>{rowData}</Text>
            {rowID == this.props.starData.length - 1 ? null : <Text>，</Text>}
        </View>
    };

    _renderHeader = () => {
        return <View style={styles.imgView}>
            <Image style={styles.starImg} source={require('../../img/DiscoverPage/star.png')}
                   resizeMode='cover'/>
        </View>
    };

    _renderCommentList = (rowData) => {
        return <View style={styles.contentView}>
            <ParsedText style={styles.contentText}
                        onPress={this._handleContentPress}
                        parse={[{pattern: new RegExp(rowData.name),
                                 style: styles.nameText,
                                 onPress: this._handleNamePress}]}>
                {rowData.name + ': ' + rowData.content}
            </ParsedText>
        </View>

    };

    render() {
        let dsStart = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dsComment = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View>
                <ListView
                    contentContainerStyle={styles.starList}
                    renderRow={this._renderStarList}
                    renderHeader={() =>this._renderHeader()}
                    enableEmptySections={true}
                    dataSource={dsStart.cloneWithRows(this.props.starData)}
                />
                <View style={styles.line}/>
                <ListView
                    contentContainerStyle={styles.commentList}
                    renderRow={this._renderCommentList}
                    enableEmptySections={true}
                    dataSource={dsComment.cloneWithRows(this.props.commentData)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    starList: {
        width: resources.screen.screenWidth - 85 * scaleX,
        backgroundColor: resources.colors.commentWhite,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 10 * scaleX
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    starView: {
        flexDirection: 'row',
        height: 20 * scaleY,
        alignItems: 'center'
    },
    starImg: {
        width: 18 * scaleX,
        height: 13.5 * scaleY,
        marginTop: 2 * scaleY,
        marginRight: 3 * scaleX
    },
    nameText: {
        fontSize: 15,
        fontWeight: '500',
        color: resources.colors.nameBlue
    },
    line: {
        width: resources.screen.screenWidth - 85 * scaleX,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2
    },
    commentList: {
        width: resources.screen.screenWidth - 85 * scaleX,
        backgroundColor: resources.colors.commentWhite,
        paddingLeft: 5 * scaleX,
        paddingRight: 5 * scaleX
    },
    contentList: {
        width: resources.screen.screenWidth - 95 * scaleX,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    contentHeadView: {
        marginTop: 1 * scaleY
    },
    contentView: {},
    contentText: {
        marginTop: 3 * scaleY,
        fontSize: 15,
        color: resources.colors.black,
    },
});

export default commentList