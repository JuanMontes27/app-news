import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { helpHttp } from "../../helpers/helpHttp";
import NewsCard from "./NewsCard";

const News = ({ navigation }) => {
  // const [news, setNews] = useState(null);
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let endpointNews =
    "https://notigram.com/wp-json/wp/v2/posts?per_page=10&status=publish&page=1&_embed";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(endpointNews)
      .then((res) => {
        if (!res.err) {
          setNews(res);
          setError(null);
        } else {
          console.log(res);
          setNews(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [endpointNews]);

  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="#2543cc" />}
        {error && <Text>Ocurrio un error</Text>}
        {news &&
          news.map((el) => (
            <NewsCard
              key={el.id}
              navigation={navigation}
              idNew={el.id}
              image={el._embedded["wp:featuredmedia"][0]["source_url"]}
              title={el.title.rendered}
              author={el._embedded.author[0].name}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default News;

/**
 *
 */
