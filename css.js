import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    isLoading: {
        flex: 1,
        padding: 20
    },
    //box0
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    //box1
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderStyle: 'solid'
    },
    //box1-1
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    //box2
    msg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 1
    },
    //box2-1
    subtitle: {
        color: 'green',
    },
    //box3
    content: {
        flex: 9,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
    },
    //box3-1
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 20
    },
    //box3-1-1
    icon: {
        flex: 1,
        padding: 10
    },
    //box3-1-2
    name: {
        flex: 7,
        padding: 10
    },
    //box3-1-3
    year: {
        flex: 2,
        padding: 10
    },
})
