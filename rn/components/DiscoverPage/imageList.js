/**
 * Created by invictus- on 2017/3/6.
 */
import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    ListView,
    TouchableWithoutFeedback
} from 'react-native'
import resources from '../../common/commonResourses'
import PhotoSwiper from '../common/photoSwiper'
const scaleX = resources.screen.scaleX;
const scaleY = resources.screen.scaleY;

class imageList extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            index: 0
        }
    }

    _showPhoto = (i) => {
        this.setState({visible: true, index: i})
    };

    _cancelSwiper = () => {
        this.setState({visible: false})
    };

    _renderList = (rowData, sectionID, rowID) => {
        return <TouchableWithoutFeedback onPress={() => this._showPhoto(rowID)}>
            <Image style={styles.itemImg} resizeMode='cover' source={rowData}/>
        </TouchableWithoutFeedback>
    };

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View>
                <ListView
                    contentContainerStyle={styles.list}
                    renderRow={this._renderList}
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRows(this.props.dataSource)}
                />
                <PhotoSwiper visible={this.state.visible} imgList={this.props.dataSource}
                             cancel={this._cancelSwiper} index={Number(this.state.index)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: 300,
        marginLeft: -5 * scaleX
    },

    itemImg: {
        width: 75 * scaleX,
        height: 70 * scaleY,
        marginLeft: 5 * scaleX,
        marginTop: 5 * scaleY
    }
});

export default imageList