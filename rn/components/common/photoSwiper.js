/**
 * Created by invictus- on 2017/3/3.
 */
import React, {Component} from 'react'
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'
import Swiper from 'react-native-swiper'
import resources from '../../common/commonResourses'


class photoSwiper extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Modal animationType='fade'
                   transparent={true}
                   visible={this.props.visible}>
                <Swiper dotColor={resources.colors.gray}
                        activeDotColor={resources.colors.white} index={this.props.index}>
                    {this.props.imgList.map((item, i) => <TouchableWithoutFeedback key={i} onPress={this.props.cancel}>
                        <View style={styles.photoView}>
                            <Image style={styles.photo} source={item} resizeMode='cover'/>
                        </View>
                    </TouchableWithoutFeedback>)}
                </Swiper>
            </Modal>)
    }
}

const styles = StyleSheet.create({
    photoView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,1)'
    },
    photo: {
        width: resources.screen.screenWidth,
        height: 400
    }
});

export default photoSwiper
