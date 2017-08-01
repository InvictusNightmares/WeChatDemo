/**
 * Created by invictus- on 2017/3/1.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TouchableWithoutFeedback
} from 'react-native'
import NavigationBar from '../common/navigationBar'
import resources from '../../common/commonResourses'
import ImageList from './imageList'
import CommentList from './commentList'
import test from './testData'
const scaleX = resources.screen.scaleX;
const scaleY = resources.screen.scaleY;
let dataSource = [];

class momentPage extends Component {

    constructor() {
        super();
        for (let i = 0; i < test.length; i++) {
            dataSource.push(test[i]);
        }
        this.state = {
            dataSource: dataSource,
            commentData: ''
        };
    }

    _leftNavBtnClick = () => {
        dataSource = [];
        this.props.navigator.pop()
    };

    _operate = (sectionID, rowID) => {
        dataSource[rowID].showHeart = !dataSource[rowID].showHeart;
        this.setState({dataSource: dataSource})
    };

    _disMiss = (sectionID, rowID) => {
        if (dataSource[rowID].showHeart)
            dataSource[rowID].showHeart = !dataSource[rowID].showHeart;
        this.setState({dataSource: dataSource})
    };

    _star = (rowID) => {
        if (dataSource[rowID].isStar)
            dataSource[rowID].star.pop();
        else
            dataSource[rowID].star.push('Invictus-');
        dataSource[rowID].isStar = !dataSource[rowID].isStar;
        dataSource[rowID].showHeart = !dataSource[rowID].showHeart;
        this.setState({dataSource: dataSource})
    };

    _comment = () => {

    };

    _onScrollBeginDrag = () => {
    };

    _onScrollEndDrag = () => {

    };

    _renderHeader = () => {
        return <View>
            <Image style={styles.bigImg} source={require('../../img/DiscoverPage/bigImg.jpeg')}
                   resizeMode='cover'/>
            <Image style={styles.refreshImg} source={require('../../img/DiscoverPage/showAlbum.png')}
                   resizeMode='cover'/>
            <View style={styles.nameView}>
                <Text style={styles.name}>Invictus-</Text>
                <View style={styles.headView}>
                    <Image style={styles.headImg} source={require('../../img/MePage/me.png')}
                           resizeMode='contain'/>
                </View>
            </View>
        </View>
    };

    _renderList = (rowData, sectionID, rowID) => {
        return <TouchableWithoutFeedback onPress={() => this._disMiss(sectionID, rowID)}>
            <View style={styles.itemView}>
                <View style={styles.itemTextView}>
                    <Image style={styles.itemHeadImg} resizeMode='contain' source={rowData.url}/>
                    <View style={styles.contentView}>
                        <Text style={styles.itemName}>{rowData.name}</Text>
                        <Text style={styles.itemText}>{rowData.word}</Text>
                        <ImageList dataSource={rowData.photo}/>
                        <Text style={styles.addressText}>{rowData.address}</Text>
                        <View style={styles.dateView}>
                            <Text style={styles.dateText}>{rowData.date}</Text>
                            <View style={styles.operateView}>
                                {
                                    rowData.showHeart ?
                                        <View style={styles.commentView}>
                                            <TouchableWithoutFeedback onPress={() => this._star(rowID)}>
                                                <View style={styles.heartView}>
                                                    <Image style={styles.heartImg} resizeMode="contain"
                                                           source={require('../../img/DiscoverPage/heart.png')}/>
                                                    {
                                                        rowData.isStar ? <Text style={styles.heartText}>取消赞</Text> :
                                                            <Text style={styles.heartText}>赞</Text>
                                                    }
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <View style={styles.line1}/>
                                            <TouchableWithoutFeedback onPress={() => this._comment()}>
                                                <View style={styles.heartView}>
                                                    <Image style={styles.heartImg} resizeMode="contain"
                                                           source={require('../../img/DiscoverPage/comment.png')}/>
                                                    <Text style={styles.heartText}>评论</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View> : null
                                }
                                <TouchableWithoutFeedback onPress={() => this._operate(sectionID,rowID)}>
                                    <Image style={styles.operateImg} resizeMode='contain'
                                           source={require('../../img/DiscoverPage/albumOperate.png')}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <CommentList commentData={rowData.comment} starData={rowData.star}/>
                    </View>
                </View>
                <View style={styles.line}/>
            </View>
        </TouchableWithoutFeedback>
    };

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return <View>
            <NavigationBar navigator={this.props.navigator} title="朋友圈" leftText='发现'
                           leftImg={require('../../img/common/back.png')}
                           leftNavBtnClick={this._leftNavBtnClick}
                           rightImg={require('../../img/DiscoverPage/album.png')}/>
            <ListView
                style={styles.list}
                renderHeader={() =>this._renderHeader()}
                renderRow={this._renderList}
                enableEmptySections={true}
                onScrollBeginDrag={this._onScrollBeginDrag}
                onScrollEndDrag={this._onScrollEndDrag}
                dataSource={ds.cloneWithRows(dataSource)}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    bigImg: {
        width: resources.screen.screenWidth,
        height: 350 * scaleY,
        marginTop: -64 * scaleY
    },
    refreshImg: {
        width: 25 * scaleX,
        height: 25 * scaleY
    },
    nameView: {
        flexDirection: 'row',
        marginTop: -35 * scaleY,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'center'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: resources.colors.white,
        marginRight: 20 * scaleX,
        marginBottom: 25 * scaleY
    },
    headView: {
        backgroundColor: resources.colors.white,
        width: 64 * scaleX,
        height: 64 * scaleY,
        marginRight: 15 * scaleX,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(0,0,0,0.15)',
        borderWidth: 0.5,
    },
    headImg: {
        width: 60 * scaleX,
        height: 60 * scaleY
    },
    list: {
        width: resources.screen.screenWidth,
        backgroundColor: resources.colors.white
    },
    itemView: {
        width: resources.screen.screenWidth,
        marginTop: 20 * scaleY
    },
    itemHeadImg: {
        width: 40 * scaleX,
        height: 40 * scaleY,
        marginLeft: 15 * scaleX
    },
    itemName: {
        fontSize: 15,
        fontWeight: '500',
        color: resources.colors.nameBlue
    },
    itemText: {
        fontSize: 15,
        color: resources.colors.black,
        marginTop: 5 * scaleY,
        width: 240 * scaleX
    },
    itemTextView: {
        flexDirection: 'row'
    },
    contentView: {
        marginLeft: 15 * scaleX
    },
    addressText: {
        marginTop: 5 * scaleY,
        color: resources.colors.nameBlue,
        fontSize: 11
    },
    dateView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: resources.screen.screenWidth - 70 * scaleX,
        marginTop: -5 * scaleY
    },
    dateText: {
        color: resources.colors.gray,
        fontSize: 11
    },
    operateImg: {
        width: 20 * scaleX,
        height: 20 * scaleY,
        marginRight: 15 * scaleY
    },
    operateView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 35 * scaleY
    },
    commentView: {
        flexDirection: 'row',
        backgroundColor: resources.colors.commentGray,
        width: 200 * scaleX,
        height: 35 * scaleY,
        borderRadius: 3
    },
    heartView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100 * scaleX,
        height: 35 * scaleY
    },
    heartImg: {
        width: 20 * scaleX,
        height: 20 * scaleY,
        marginTop: 2 * scaleY
    },
    heartText: {
        color: resources.colors.white,
        fontSize: 14,
        marginLeft: 3 * scaleX
    },
    line: {
        width: resources.screen.screenWidth,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2,
        marginTop: 10 * scaleY
    },
    line1: {
        width: 0.5,
        height: 20 * scaleY,
        backgroundColor: resources.colors.black,
        marginTop: 7.5 * scaleY
    },
});

export default momentPage
