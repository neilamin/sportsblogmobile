import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { Header, Button } from "./common";

const App = () => {
    const { imageContainer, imageStyle } = styles;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                headerText="Sports Blog"
            />

            <View style={imageContainer}>
                <Image 
                    source={require("./img/home.jpg")}
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined
                    }}
                />
            </View>
            
            <Button>
                Home
            </Button>
        </SafeAreaView>
    );
    
};

const styles = {
    imageContainer: {
        flex: 1, 
        alignItems: "center", 
        borderColor: "red", 
        borderWidth: 1,
    },
    imageStyle: { 
        height: "100%", 
        width: "100%" 
    }
}

export default App;