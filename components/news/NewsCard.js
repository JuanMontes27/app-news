import React from "react";
import { Text, Card, Button } from "@rneui/themed";

const NewsCard = ({ navigation, idNew, image, title, author }) => {

  title = title.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
    let num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });

  const showNew = () => {
    navigation.navigate("NewInfo", {
      id: idNew,
    });
  };

  return (
    <Card>
      <Card.Image style={{ padding: 0 }} source={{ uri: image }} />
      <Card.Divider />
      <Card.Title>{title}</Card.Title>
      <Text style={{ marginBottom: 10 }}>Autor: {author}</Text>
      <Button color="#2543cc" title="Ver noticia" onPress={showNew} />
    </Card>
  );
};

export default NewsCard;
