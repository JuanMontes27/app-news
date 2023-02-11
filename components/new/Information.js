import React from "react";
import { View, ScrollView, Text, useWindowDimensions } from "react-native";
import { Card } from "@rneui/themed";
import RenderHTML from "react-native-render-html";

const Information = ({ title, image, author, content }) => {
  const { width } = useWindowDimensions();
  title = title.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    let num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });

  content = content.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    let num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });

  const source = {
    html: content
  };

  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: image,
            }}
          />
          <Text style={{ marginTop: 10 }}>Autor: {author}</Text>
        </Card>
        <RenderHTML contentWidth={width} source={source}/>
      </View>
    </ScrollView>
  );
};

export default Information;
