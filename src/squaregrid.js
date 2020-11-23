import SquareGrid from "react-native-square-grid";
import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";

var NUMBERS = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six"
];
 
var styles = StyleSheet.create({
    item: {
        flex: 1,
        alignSelf: "stretch",
        padding: 16
    },
    content: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 32
    }
});
 
 
// Best viewed in landscape
export default function SquareGridExample(props){
    return (
        <SquareGrid rows={2} columns={3} items={NUMBERS} renderItem={renderItem} />
    );
}
 
function renderItem(item) {
    return (
        <View style={styles.item}>
            <View style={styles.content}>
                <Text style={styles.text}>{item}</Text>
            </View>
        </View>
    );
}
