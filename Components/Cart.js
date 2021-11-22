import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { render } from 'react-dom';


export default function Cart({ data, openStatus }) {

    //Please read the folling comments.
    /* use this type of data in the main App.js file.
    const data = [
    { key:1,  quantity: 1, item: "Bacon and Egg Roll", price: 10 },
    { key:2,  quantity: 1, item: "Coffee", price: 5 },
    { key:3,  quantity: 2, item: "Pasta", price: 10 },
    { key: 4, quantity: 1, item: "Muffin", price: 5 },
        
    ];

    use the following code inside return in the main App.js file.
    <Cart data={ { data } }/>
    */


    const [itemQuantity, setItemQuantity] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    var totalPrice = 0;

    const handleViewCart = () => {
        setModalOpen(true);
    }

    const handleAddItems = () => {
        setModalOpen(false);
    }

    const handleAddPrice = (price) => {
        totalPrice = totalPrice + price;
    }


    return (

        <View>
            <TouchableOpacity onPress={ handleViewCart }> 
                <Text style={ styles.button }>View Cart</Text>
            </TouchableOpacity>

        <Modal 
                animationType='slide'
                visible={ modalOpen }
                onRequestClose={ ()=>{setModalOpen(false)}}
        >
            <View style={ styles.cartContainer}>
            <ScrollView showsVerticalScrollIndicator={ false}>
                <View style={ styles.pushBar}>
                    <MaterialIcons
                        name="horizontal-rule"
                        size={ 50 }
                        color="white"
                    />
                </View>
                
                <View style={styles.titleContainer}>
                    <Text style={ styles.titleText }>Your Cart</Text>
                </View>

                <View style={ styles.horizontalLine}></View>

                <View>
                {/* Item inside needs to run for each item */ }
                    { data.data.map((val) => {
                        return (
                                <View>
                                <View style={ styles.bodyContainer }>
                                    <View style={ styles.col1 }><Text style={ styles.bodyText }>{ val.quantity}</Text></View>
                                    <View style={ styles.col2 }><Text style={ styles.bodyText }>{ val.item}</Text></View>
                                    <View style={ styles.col3 }><Text style={ styles.bodyText }>${ val.price}</Text></View>
                                
                                </View>
                                <View style={ styles.horizontalLine }></View>
                                { handleAddPrice(val.price*val.quantity)}
                                </View>
                            )
                        }
                    )}
                                
                {/* Item above this needs to run for each item */ }
                </View>
                
               

                <View style={ styles.totalPriceContainer }>
                    <View><Text style={ styles.bodyText}>Total Price: </Text></View>
                    <View><Text style={ styles.bodyText }>${ totalPrice}</Text></View>
                </View>
                
                <TouchableOpacity>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText}>Go to checkout</Text>

                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ handleAddItems }>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>Add more items</Text>
                </View>
                </TouchableOpacity>

                
            </ScrollView>
            </View>
        </Modal>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    bodyText: {
        color: 'white',
    },
    cartContainer: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#2a368f',
        height: '100%',
        
    },
    button: {
        color: 'black',
        backgroundColor: '#f9db04',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        height: 30,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    col1: {
        backgroundColor: '#989DAF',
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    col2: {},
    col3: {},
    horizontalLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 4,
    },
    pushBar: {
        alignItems: 'center',
        marginTop: 0,
    },
    titleContainer: {
      marginBottom: 20,  
    },
    titleText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    totalPriceContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
});